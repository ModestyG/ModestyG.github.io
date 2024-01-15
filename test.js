//let x = prompt("Hello World");
let text = document.getElementById("start-text");
var xPos = "0px";
var yPos = "0px";
function fun() {
  text.innerText = "Hello World";
  text.onclick = fun2;
}

function fun2() {
  text.innerText = "Default (again)";
  text.onclick = fun;
}

function add(var1, var2, unit = "px") {
  var1 = parseInt(var1.split(unit)[0]);
  var2 = parseInt(var2.split(unit)[0]);
  return var1 + var2 + unit;
}

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    document.getElementById("start-text").style.marginLeft = add(xPos, "-10px");
    xPos = add(xPos, "-10px");
  }
  if (event.key == "ArrowRight") {
    document.getElementById("start-text").style.marginLeft = add(xPos, "10px");
    xPos = add(xPos, "10px");
  }
  if (event.key == "ArrowDown") {
    document.getElementById("start-text").style.marginTop = add(yPos, "10px");
    yPos = add(yPos, "10px");
  }
  if (event.key == "ArrowUp") {
    document.getElementById("start-text").style.marginTop = add(yPos, "-10px");
    yPos = add(yPos, "-10px");
  }
});
