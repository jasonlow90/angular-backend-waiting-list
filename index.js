var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var cors = require('cors');
// Load the routes.
var routes = require('./config/route');
// For socket io
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());
// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/waiting_list');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/waiting_list');
// Create the application.)



// require('./models/db');

// Add Middleware necessary for REST API's
app.use(routes);
// Load the models.

// io.on('connection', function(socket){
//   // write emits and on here for individual sockets
//   // console.log(socket);
//   console.log('New socket connection: ' + socket.id);
//   socket.on('message', function(data){
//     io.emit('got-message', {content: data.content});
//     console.log(data);
//   });
// });


// var userNames = (function() {
//   var names = {};
//
//   var claim = function(name) {
//     if(!name || names[name]){
//       return false;
//     } else {
//       userNames[name] = true;
//       return true;
//     }
//   };
//
//   // find the lowest unused "guest" name and claim it
//   var getGuestName = function() {
//     var name, nextUserId = 1;
//
//     do {
//       name = "Guest " + nextUserId;
//       nextUserId += 1;
//     } while (!claim(name));
//
//     return name;
//   };
//
//   // serialized claimed names as an array
//   var get =  function(){
//     var res = [];
//     for(var user in names){
//       res.push(user);
//     }
//
//     return res;
//   };
//
//   var free = function(name){
//     if (names[name]) {
//       delete names[name];
//     }
//   };
//
//   return {
//     claim: claim,
//     free: free,
//     get: get,
//     getGuestName: getGuestName
//   };
//
// });
var userNames = require('./controllers/userNamesController.js');

io.on("connection", function(socket){
  console.log("Socket connection is successful");
  var name = userNames.getGuestName();

  //This is what happens when the a new user just joined

  // send the new user their name and a list of  users when the a new user just logs in
  socket.emit('init', {
    name: name,
    users: userNames.get()
  });

  // Notify other clients that a new user has joined
  socket.broadcast.emit('user:join', {
    name: name
  });

  //broadcast a user's message to public message board
  // This is when socket receives an event name called 'send:message'
  socket.on('send:message:fromClient', function (data) {
    console.log(data);
    console.log(name);
    // Once it receives it, socket will broadcast it out back to public message board
    socket.broadcast.emit('send:message:fromServer', {
      user: name,
      text: data.message
    });
    console.log("send:message:fromClient received");
  });

  // validate a user's name change, and broadcast it on success
  socket.on('change:name', function (data, fn){
    if(userNames.claim(data.name)){
      var oldName = name;
      userNames.free(oldName);

      name = data.name;

      socket.broadcast.emit('change:name', {
        oldName: oldName,
        newName: name
      });

      fn(true);
    } else {
      fn(false);
    }
  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function(){
    socket.broadcast.emit("user:left", {
      name: name
    });
    userNames.free(name);
  });

  console.log(userNames.names)
});





server.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port xxxx || 3000...');
});
