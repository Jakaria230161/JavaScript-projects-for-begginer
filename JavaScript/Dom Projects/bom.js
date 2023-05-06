// variable declaration
let myWindow;

// Select element 
const width = document.getElementById("width");
const height = document.getElementById("height");
const availHeight = document.getElementById("availHeight");
const availWidth  = document.getElementById("availWidth");
// window location
const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");

// Navigator
const onLine = document.getElementById("onLine");
const appCodeName = document.getElementById("appCodeName");
const appName = document.getElementById("appName");

// Timing events
const timeout = document.getElementById("setTimeout");
const interval = document.getElementById("setTimeInterval");

// show window object properties
width.innerHTML = "Window width is : " + window.innerWidth;
height.innerHTML = "Window height is : " + window.innerHeight;
availWidth.innerHTML = "Screen availHeight is : " + screen.availWidth;
availHeight.innerHTML = "Screen availHeight is : " + screen.availHeight;

// window location
href.innerHTML = "Window location href is :" + location.href;
href.style.color = "red";
hostname.innerHTML = "Window location hostname is :" + location.hostname;
hostname.style.color = "green";
pathname.innerHTML = "Window location pathname is :" + location.pathname;
pathname.style.color = "blue";
protocol.innerHTML = "Window location protocol is :" + location.protocol;
protocol.style.color = "tomato";
port.innerHTML = "Window location port is :" + location.port;
port.style.color = "gray";

// Navigator
onLine.innerHTML = "Navigator onLine is : " + navigator.onLine;
appCodeName.innerHTML = "Navigator appCodeName is : " + navigator.appCodeName;
appName.innerHTML = "Navigator appName is : " + navigator.appName;

// Timing events
let timeInstance;
let intervalInstance;
function startTimeout () {
  timeInstance = setTimeout(() => {
    timeout.innerHTML = "3 seconds is over";
  }, 3000);
}

function stopTimeout () {
  clearTimeout(timeInstance);
}

function startInterval () {
  intervalInstance = setInterval(() => {
    interval.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}

function stopInterval () {
  clearInterval(intervalInstance);
}

// timing events ends here

function openWindow () {
  myWindow = window.open("http://google.com");
}

function closeWindow () {
  myWindow.close();
}

/* 
WINDOW LOCATION
---------------
1, window.location.protocol
2, window.location.hostname
3, window.location.port
4, window.location.href
5, window.location.assign()
*/

/*
WINDOW HISTORY
---------------
1, window.history.back();
2, window.history.forward();
*/

/* 
WINDOW NAVIGATOR
-----------------
1, window.navigator.appName
3, window.navigator.appCodeName
2, window.navigator.platform
*/

/* 
JAVASCRIPT POPUP BOXES
-----------------------
1, alert();
2, prompt();
3, confirm();
*/
