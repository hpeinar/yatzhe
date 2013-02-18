'use strict';

/*
 * GET users listing.
 */

var rooms = [];

exports.index = function(req, res) {
  res.send("index is here");
}

exports.list = function(req, res){
  for (var i = 0; i < rooms.length; i++) {
    res.send(rooms[i].name)  
  };
};