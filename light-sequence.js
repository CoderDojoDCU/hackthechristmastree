var Galileo = require("galileo-io");
var board = new Galileo();

var ports = [9,10,11,12];
var maxInterval = 60000;
var currentInterval = 0;
var interval = 1000;


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


