express    = require 'express'
controller = require './controller'

app = express.createServer(express.logger())
app.configure ->
  app.use(express.bodyParser())
  app.use(express.methodOverride())

socketio = require('socket.io').listen(app)

controller.start app, socketio
port = process.env.PORT or 5000
app.listen port, ->
  console.log "Listening on #{port}\nPress CTRL-C to stop server."
