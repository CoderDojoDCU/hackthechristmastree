var Galileo = require("galileo-io");
var Twit = require('twit');
var board = new Galileo();

var ports = [1,2,3,4,5,6,7,8,9,10,11];
var maxInterval = 90000;
var currentInterval = 0;
var interval = 100;

var trend = "ChristmasTreeHack"


var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})



board.on("ready", function() {
   currentInterval = 0;
   light(0);
});

function light(sequence) {
  var port = ports[sequence];
  console.log("Lighting port "+ port);
  board.digitalWrite(port, 1);
  currentInterval = currentInterval + interval;
  setTimeout(function () {
    board.digitalWrite(port, 0); 
    lightNext(sequence);
  },interval);
}

function lightNext(sequence) {
  if(currentInterval < maxInterval) {
    var nextPort = sequence + 1;
    if(nextPort >= ports.length) {
      nextPort = 0;
    } 
    light(nextPort);
  }
}


