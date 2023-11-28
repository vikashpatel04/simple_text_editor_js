function f1() {
  //function to make the text bold using DOM method
  document.getElementById("textarea").style.fontWeight = "bold";
}

function f2() {
  //function to make the text italic using DOM method
  document.getElementById("textarea").style.fontStyle = "italic";
}

function f3() {
  //function to make the text alignment left using DOM method
  document.getElementById("textarea").style.textAlign = "left";
}

function f4() {
  //function to make the text alignment center using DOM method
  document.getElementById("textarea").style.textAlign = "center";
}

function f5() {
  //function to make the text alignment right using DOM method
  document.getElementById("textarea").style.textAlign = "right";
}

function f6() {
  //function to make the text in Uppercase using DOM method
  document.getElementById("textarea").style.textTransform = "uppercase";
}

function f7() {
  //function to make the text in Lowercase using DOM method
  document.getElementById("textarea").style.textTransform = "lowercase";
}

function f8() {
  //function to make the text capitalize using DOM method
  document.getElementById("textarea").style.textTransform = "capitalize";
}

function f9() {
  //function to make the text back to normal by removing all the methods applied
  //using DOM method
  document.getElementById("textarea").style.fontWeight = "normal";
  document.getElementById("textarea").style.textAlign = "left";
  document.getElementById("textarea").style.fontStyle = "normal";
  document.getElementById("textarea").style.textTransform = "capitalize";
  document.getElementById("textarea").value = " ";
}
