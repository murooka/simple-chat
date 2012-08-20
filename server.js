// require('coffee-script');
// require('./server.coffee');

var express = require('express');
var controller = require('./controller');

var app = express.createServer(express.logger());
app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

var socketio = require('socket.io').listen(app);

controller.start(app, socketio);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Listening on ' + port + '\nPressCTRL-C to stop server.');
});
