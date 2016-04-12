console.log('Hello New Project!');

// Make a variable that will display current date
var currentClock = new Date ()
  var hr = currentClock.getHours ()
  var min = currentClock.getMinutes ()
  var sec = currentClock.getSeconds ()
    var timer = hr + ":" + min + ":" + sec;

var addSecond = (currentClock, 1000);
// Display Clock on HTML
var clockAnswer = document.querySelector("#clock");
clockAnswer.innerHTML = addSecond;
