'use strict';

var sockets = require('socket.io').listen(3001);

var members = [];

exports.start = function() {
  var that = this;

  sockets.on('connection', function (socket) {
    console.log(socket.id);
    socket.emit('welcome', 'welcome! Your ID is '+ socket.id);

    that.bind(socket);

    members.push(socket.id);
    that.emitUsersList(socket);
  });
}

exports.bind = function(socket) {
  var that = this;
  socket.on('disconnect', function() {
    members.splice(members.indexOf(socket.id), 1);

    that.emitUsersList(socket);
  })

  socket.on('list rooms', function(socket) {
  })
}

exports.emitUsersList = function(socket) {
  console.log('Emitting users list');
  socket.emit('list', { member: members });
}

exports.getRooms = function(cb) {
  cb(socketServer.sockets.manager.rooms);
}