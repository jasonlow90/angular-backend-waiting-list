
## Existing Technologies that the Apps are built on
- NodeJS - [an open-source, cross-platform runtime environment for developing server-side Web applications.] (<https://en.wikipedia.org/wiki/Node.js>)
- ExpressJS - [a minimal and flexible Node.js web application framework](http://expressjs.com/) that provides a robust set of features for web and mobile applications.
- MongoDB - [A free and open-source cross-platform document-oriented database.](https://www.mongodb.com/) Classified as a NoSQL database, MongoDB avoids the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster.]
- Mongoose(ORM for MongoDB in express.js) - A [straight-forward, schema-based solution](http://mongoosejs.com/) to model application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
- Links to previous version of Queuer: Front-end: https://github.com/peterdaniel-fewd/restaurant-waitlist-frontend ; Back-end: https://github.com/jasonlow90/restaurant-waitlist-v2 .

## New Technologies Used
- AngularJS - Front-end framework that utilizes two-way data-binding. Fast, powerful and suitable for one page application.
- Socket.io - Socket.io uses WebSocket protocol that provides full-duplex communication channels over a single TCP connection. Web socket protocol provides a standardized way for the server to send content to the browser without being solicited by the client, and allowing for messages to be passed back and forth while keeping the connection open.

## Previous Technologies Used
- jQuery - [a fast, small, and feature-rich JavaScript library.](https://jquery.com/) It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
- momentJS - [Parse, validate, manipulate, and display dates](http://momentjs.com/) in JavaScript.

## Aim
The goal of this project is to implement Angular.js and some basic form of Socket.io into our Queuer App(developed by Niall, Peter and myself). I am interested to know the difference between using Angular.js, a powerful front-end framework and normal DOM manipulation with jQuery. Besides that, socket.io was also introduced into the app to gain a better understanding of a web socket protocol.

## Links to Queuer v3:
- Github: Back-end: https://github.com/jasonlow90/angular-backend-waiting-list , Front-end: https://github.com/jasonlow90/angular-frontend-waiting-list

## Major challenges:
- Understanding how two-way data-binding works
- Passing params into $stateRouter in Angular; Managed to do it from this link: https://scotch.io/tutorials/3-simple-tips-for-using-ui-router and
- Understanding what $route  and $stateRoute does. Link that helped: https://docs.angularjs.org/api/ngRoute/service/$route
- Understanding $resource in Angular. Link: https://docs.angularjs.org/api/ngResource/service/$resource
- Starting socket.io. This tutorial helped me a lot: http://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/

## Future work:
- Better understanding in two-way data binding and also web socket protocol.
- Using ng-directives of Angular.js.
- Using gulp to minified dependecies in the front-end.
- Better coding practice, such as using more ternary operator to minimize the amount of codes.
