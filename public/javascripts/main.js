$(document).ready(function() {
  
  var socket = io.connect('http://localhost:3001');
  socket.on('welcome', function (data) {
    console.log(data);
  });

  socket.on('list', function(data) {

    $('#memberList').html();
    console.log(data);

    for (var i = 0; i < data.member.length; i++) {
      $('#memberList').append(data.member[i] +'<br />');
    };
  })
})