exports.start = function (app, socketio) {
    socketio.on('connection', function (socket) {
        console.log('connected');
        
        socket.on('message', function (message) {
            socket.emit('chat', message);
            socket.broadcast.emit('chat', message);
        });

        socket.on('disconnect', function () {
            console.log('disconnect');
        });
    });

    app.get('/chat', function (req, res) {
        res.render('chat.ejs', {locals:{mes:''}});
    });
};
