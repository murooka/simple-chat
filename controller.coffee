
exports.start = (app, socketio) ->

  socketio.on 'connection', (socket) ->
    console.log('connected')

    socket.on 'message', (message) ->
      socket.emit('chat', message)
      socket.broadcast.emit('chat', message)

    socket.on 'disconnect', ->
      console.log('disconnected')

  app.get '/chat', (req, res) ->
    res.render('chat.ejs', {locals:{mes:''}})
