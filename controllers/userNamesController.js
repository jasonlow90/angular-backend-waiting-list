// var userNames = (function() {
  var names = {};

// To check for name's availability
  var claim = function(name) {
    // if name is empty or name has been taken, return false
    if(!name || names[name]){
      return false;
    } else {
      // else give the new name a boolean value of true
      names[name] = true;
      return true;
    }
  };

  // find the lowest unused "guest" name and claim it
  var getGuestName = function() {
    var name, nextUserId = 1;

    do {
      name = "Guest " + nextUserId;
      nextUserId += 1;
    } while (!claim(name));

    return name;
  };

  // serialized claimed names as an array
  var get =  function(){
    var res = [];
    for(var user in names){
      res.push(user);
    }

    return res;
  };

 // Delete a name from the names object
  var free = function(name){
    if (names[name]) {
      delete names[name];
    }
  };

  // return {
  //   claim: claim,
  //   free: free,
  //   get: get,
  //   getGuestName: getGuestName
  // };

// });

module.exports = {
  names: names,
  claim: claim,
  free: free,
  get: get,
  getGuestName: getGuestName
};
