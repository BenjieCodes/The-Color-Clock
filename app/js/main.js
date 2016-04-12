console.log('Hello New Project!');

var currentTime = new Date ();
  var hr = currentTime.getHours ();
  var min = currentTime.getMinutes ();
  var sec = currentTime.getSeconds ();

var clock = hr + ":" + min + ":" + sec;
// var currentClock = setInterval(currentTime, 1000);


var clockAnswer = document.querySelector("#clock");

clockAnswer.innerHTML = currentClock;
