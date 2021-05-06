function allImagesLoaded() {
  console.log("ALL IMAGES LOADED");

  document.getElementsByClassName("loader")[0].style.display = "none";
}
var image = document.getElementsByClassName("blogimages");
new simpleParallax(image, {
  scale: 2,
});
document.querySelectorAll(".blogimage").forEach((item) => {
  item.addEventListener("mouseover", function () {
    document.getElementById("blogMore").style.display = "flex";
  });
});
document.querySelectorAll(".blogimage").forEach((item) => {
  item.addEventListener("mouseout", function () {
    document.getElementById("blogMore").style.display = "none";
  });
});

var timeout;

let circle = document.getElementById("blogMore");

var circlepos = { x: 0, y: 0 };
var mouse = { x: 0, y: 0 };

setInterval(followMouse, 50);

function followMouse() {
  var distX = mouse.x - circlepos.x;
  var distY = mouse.y - circlepos.y;
  circlepos.x += distX / 2;
  circlepos.y += distY / 2;
  circle.style.left = circlepos.x + "px";
  circle.style.top = circlepos.y + "px";
}

var prevEvent, currentEvent;
document.documentElement.onmousemove = function (event) {
  currentEvent = event;
  mouse.x = event.pageX;
  mouse.y = event.pageY - 55;
};
var maxSpeed = 0,
  prevSpeed = 0,
  maxPositiveAcc = 0,
  maxNegativeAcc = 0;
setInterval(function () {
  if (prevEvent && currentEvent) {
    var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
    var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
    var movement = Math.sqrt(movementX * movementX + movementY * movementY);
    var speed = 10 * movement;
    if (speed > 500) {
      circle.style.width = "75px";
      circle.style.height = "75px";
    } else {
      circle.style.width = "100px";
      circle.style.height = "100px";
    }
  }
  prevEvent = currentEvent;
  prevSpeed = speed;
}, 100);
