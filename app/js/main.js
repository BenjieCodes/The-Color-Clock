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
  // Set a variable to display clock.
  var clockDisplay = (newhr + ":" + newmin + ":" + newsec);
  // Set a variable to change clock time to a hexacolor
  showClock.innerHTML = clockDisplay;
}

// The assignment was to change the background every SECOND click, and not every second. So I have to make a new function that will separate the change of the clock per sec from the background color per 2 sec.
function colorChange () {
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
  // Set a variable to display clock.
  var clockDisplay = (newhr + ":" + newmin + ":" + newsec);
  // Set a variable to change clock time to a hexacolor
  var hexaColor = ("#" + newhr + "" + newmin + "" + newsec);
  changeBg.style.background = hexaColor;
}


var finalColor = setInterval(colorChange, 2000);
var finalClock = setInterval(currentClock, 1000);
