console.log('Hello New Project!');

// Make a variable that will display current date
var showClock = document.querySelector("#clock");
var changeBg = document.querySelector("body")

function currentClock () {
  var currentTime = new Date ();
  // Getting hours in current time
  var hr = currentTime.getHours ();
    // Subtracts -12 from hours that are over 12 hrs to prevent military time.
    var newhr = (hr > 12 || hr < 21) ? "0" + (hr - 12) : hr;
  // Getting minutes in current time
  var min = currentTime.getMinutes ();
    // Adds a 0 string on the minute when it's less than 10 seconds.
    var newmin = (min < 10) ? "0" + min : min;
  /// Getting seconds in current time.
  var sec = currentTime.getSeconds ();
    // Adds a 0 string on the minute when it's less than 10 seconds.
    var newsec = (sec < 10) ? "0" + sec : sec;
  var clockDisplay = (newhr + ":" + newmin + ":" + newsec);
  var hexaColor = ("#" + newhr + "" + newmin + "" + newsec);
  showClock.innerHTML = clockDisplay;
  showClock.innerHTML = hexaColor;
  changeBg.style.background = hexaColor;
}

// function colorChange () {
//   background.style.background =
// }

var finalClock = setInterval(currentClock, 1000);
