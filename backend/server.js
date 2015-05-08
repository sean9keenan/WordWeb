// var io      = require('socket.io').listen(8905), // for npm, otherwise use require('./path/to/socket.io')
var web     = require('./wordweb.js');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http)

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

http.listen(8080, function(){
  console.log('listening on *:8080');
});

app.use(express.static('../frontend'));

try{

  allUsers = []

  io.sockets.on('connection', function (socket) {

    var thisTeam = null;

    socket.on('loginToMainWebsite', function(data, callback) {
      var isSuccess = false
      if (allUsers.length == 0){
        socket.emit('loginReturn', 'Failure')
        return;
      }
      for (var i = 0; i < allUsers.length; i++) {
        var team = allUsers[i]
        if (data.name == team.name){
          socket.team = team;
          team.sockets.push(socket);
          isSuccess = true;
        }
      }
      if (!isSuccess){
        socket.emit('loginReturn', 'Failure')
      } else {
        socket.emit('loginReturn', 'Success')
      }
    });

    socket.on('registerUser', function (data, callback){
      newUser = {}
      newUser.name = data
      newUser.sockets = []
      newUser.wordweb = []
      newUser.wordwebUnknown = [0]
      allUsers.push(newUser)
    })

    socket.on('disconnect', function (data, callback){
      if (socket.team != null){
        var i = socket.team.sockets.indexOf(socket);
        // var i = socket.team.sockets.indexOf(this);
        socket.team.sockets.splice(i, 1);
      }
    });

    socket.on('requestPuzzleProgress', function (data, callback){
      if (socket.team == undefined){
        return;
      }
      data = genData(socket.team);
      socket.emit('puzzleState', data);
    });

    genData = function(team){
      data = {}
      data.web = web.generateWeb(team);
      data.validIndexes = team.wordweb.concat(team.wordwebUnknown);
      data.wordweb = team.wordweb;
      percent = data.wordweb.length / data.web.length;
      return data
    }

    socket.on('webRequest', function(data, callback){
      if (socket.team == undefined){
        console.log("Team undefined")
        return;
      }
      for (i in socket.team.wordweb){
        if (data.toLowerCase() === web.web[socket.team.wordweb[i]].word.toLowerCase()){
          socket.emit('answerAlreadyThere', true);
          return;
        }
      }

      webUpdates = web.updateWeb(socket.team, data);
      if (webUpdates.length != 0){
        data = genData(socket.team);
        socket.emit('puzzleUpdate', data);
        socket.emit('isAnswerCorrect', true)
        console.log(socket.team.sockets);
        emitToAllTeams(socket.team, 'puzzleUpdate', data)
      } else {
        socket.emit('isAnswerCorrect', false)
        data = genData(socket.team);
        socket.emit('puzzleState', data);
      }
    });

  });


function emitToAllTeams(team, type, value){
  if (team != null && team.sockets != null && team.sockets.length != 0){
    for (socket in team.sockets){
      console.log("emitToAllTeams")
      console.log(value);
      team.sockets[socket].emit(type, value);
    }
  }
}

} catch(err){
  console.log(err);
}