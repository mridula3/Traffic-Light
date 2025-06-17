let redlight = document.getElementById("red");
let yellowlight = document.getElementById("yellow");
let greenlight = document.getElementById("green");
let timeoutId;
let btn = document.getElementById("btn");
btn.addEventListener("click", button_click);

function red() {
  redlight.style.backgroundColor = "red";
  redlight.style.boxShadow = "0 0 5px red";
  greenlight.style.boxShadow = "0 0 0 black";
  yellowlight.style.backgroundColor = "black";
  greenlight.style.backgroundColor = "black";
  timeoutId=setTimeout(yellow, 3000);
}
function yellow() {
  redlight.style.backgroundColor = "black";
  yellowlight.style.backgroundColor = "yellow";
  yellowlight.style.boxShadow = "0 0 5px yellow";
  redlight.style.boxShadow = "0 0 0 black";
  greenlight.style.backgroundColor = "black";
  timeoutId=setTimeout(green, 3000);
}
function green() {
  redlight.style.backgroundColor = "black";
  yellowlight.style.backgroundColor = "black";
  greenlight.style.backgroundColor = "green";
  greenlight.style.boxShadow = "0 0 5px green";
  yellowlight.style.boxShadow = "0 0 0 black";
  timeoutId=setTimeout(red, 3000);
}

function button_click() {
  if (btn.innerHTML == "Start") {
    btn.innerHTML = "Stop";
    red();
  } else if (btn.innerHTML == "Stop") {
    // console.log("hello");
    btn.innerHTML = "Start";
    redlight.style.backgroundColor = "black";
    redlight.style.boxShadow = "0 0 0 black";

    yellowlight.style.backgroundColor = "black";
    yellowlight.style.boxShadow = "0 0 0 black";
    
    greenlight.style.backgroundColor = "black";
    greenlight.style.boxShadow = "0 0 0 black";
    // console.log("bye");
    clearTimeout(timeoutId);
  }
}