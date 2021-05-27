// window.onload = function(){
//   window.scrollTo(0, 0);
// }

window.scrollTo({
  top: 0,
  left: 0,
});
let video_loaded = false;
document.getElementsByClassName("loader-video")[0].playbackRate = 1.3;
function allImagesLoaded() {
  let logo = document.getElementsByClassName("dvm-logo")[0];
  let rightStrip = document.getElementsByClassName("section-nav")[0];
  let ham = document.getElementsByClassName("ham")[0];
  let brand = document.getElementsByClassName("brand")[0];
  let purple_circuit = document.getElementsByClassName("purple-circuit")[0];

  if (video_loaded) {
    console.log("ALL IMAGES LOADED");
    document.getElementsByClassName("loader-video")[0].style.opacity = "0";

    setTimeout(() => {
      document.getElementsByClassName("loader")[0].style.display = "none";
      document.getElementsByClassName("wrapper")[0].style.opacity = "1";
      purple_circuit.style.transition = "all 0.4s ease";
      purple_circuit.style.transform = "scaleX(1) ";

      setTimeout(() => {
        logo.style.opacity = "1";
        logo.style.transition = "all 0.3s ease-out";
        logo.style.transform = "scale(1) rotate(0deg)";
      }, 150);

      setTimeout(() => {
        rightStrip.style.transition = "all 0.5s ease-in-out";
        rightStrip.style.transform = "translateX(0)";
        // brand.style.transition = "all 0.5s ease-in-out";
        // brand.style.transform = "translateX(0)";
        // ham.style.transition = "all 0.5s ease-in-out";
        // ham.style.transform = "translateY(0)";
        // activeDot = 0;
        // console.log("gadhe")
        window.scrollTo(0, 0);
        selectDot(0);
        const params = new URLSearchParams(window.location.search);

        for (const param of params) {
          if (param[0] === "about") toDot(1);
          else if (param[0] === "contact") toDot(6);
        }
      }, 400);
    }, 500);

    // for (let i = 0; i < pages.length; ++i) {
    //   let nameOfClass = `dot${i}`
    //   document.getElementsByClassName("section-nav")[0].innerHTML += `
    //         <div class="dot ${nameOfClass}" onclick="toDot(${i})"></div>
    //     `;
    // }

    for (let i = 0; i < pages.length; i++) {
      pagesPositions.push(pages[i].getBoundingClientRect().top);
    }
  }
}

// let currentPage = 0;
// let lastScrollTime = 0;
// const whereTop = document
//   .getElementsByClassName("page")[0]
//   .getBoundingClientRect().top;
// let scrollDebounce = true;
// document.documentElement.scrollTo(0, 0);
// const fromTop = document
//   .getElementsByClassName("page")[1]
//   .getBoundingClientRect().top;
// currentPage = Math.floor((whereTop / fromTop) * -1);

const pages = document.getElementsByClassName("page");
let pagesPositions = [];

// for (let i = 0; i < pages.length; ++i) {
//   document.getElementsByClassName("section-nav")[0].innerHTML += `
//         <div class="dot" onclick="toDot(${i})"></div>
//     `;
// }

// for (let i = 0; i < pages.length; i++) {
//   pagesPositions.push(pages[i].getBoundingClientRect().top);
//   console.log(pagesPositions[i]);
// }

// for (let i = 0; i < pages.length; ++i) {
//   document.getElementsByClassName("section-nav")[0].innerHTML += `
//         <div class="dot" onclick="toDot(${i})"></div>
//     `;
// }

// for (let i = 0; i < pages.length; i++) {
//   pagesPositions.push(pages[i].getBoundingClientRect().top);
//   console.log(pagesPositions[i]);
// }

let dots = document.getElementsByClassName("dot");

//generic function for scrolling the section starts here---------------

// const scrollSection = (distance, pageNo) => {
//   console.log("scrollSection");
//   if ((pageNo && distance === null) || (pageNo === 0 && distance === null)) {
//     const factor = pageNo;
//     currentPage = pageNo;

//     window.scrollTo({
//       top: fromTop * factor,
//       left: 0,
//       behavior: "smooth",
//     });
//   }
//   if (distance > 0 || distance === "down") {
//     if (pages[pages.length - 1].getBoundingClientRect().top <= 50) {
//       scrollDebounce = true;
//       return;
//     }
//     let scrollAmt = fromTop;
//     ++currentPage;
//     window.scrollBy({
//       top: scrollAmt,
//       left: 0,
//       behavior: "smooth",
//     });
//     selectDot(currentPage);
//   }
//   if (distance < 0 || distance === "up") {
//     if (pages[0].getBoundingClientRect().top > 0) {
//       scrollDebounce = true;
//       return;
//     }

//     --currentPage;
//     if (currentPage < 0) currentPage = 0;
//     window.scrollBy({
//       top: -fromTop,
//       left: 0,
//       behavior: "smooth",
//     });
//     selectDot(currentPage);
//   }
// };

let activeDot;

const scrollSection = (pageNo) => {
  window.scrollTo({
    top: pagesPositions[pageNo],
    left: 0,
    behavior: "smooth",
  });
};

const scrollToSection = () => {
  let currActiveDot = activeDot;
  let currScroll = document.documentElement.scrollTop;
  if (currScroll > pagesPositions[pagesPositions.length - 1]) {
    activeDot = pagesPositions.length - 1;
  } else if (currScroll < pagesPositions[1]) {
    activeDot = 0;
  } else {
    for (let i = 1; i < pages.length - 1; i++) {
      if (currScroll > pagesPositions[i] && currScroll < pagesPositions[i + 1])
        activeDot = i;
    }
  }
  if (currActiveDot !== activeDot) {
    selectDot(activeDot);
  }
};

const toDot = (pageNo) => {
  document.removeEventListener("scroll", scrollToSection);
  selectDot(pageNo);
  scrollSection(pageNo);
  setTimeout(() => {
    document.addEventListener("scroll", scrollToSection);
  }, 800);
};

const selectDot = (pageNo) => {
  let newDots = document.getElementsByClassName("dot");
  for (let i = 0; i < newDots.length; ++i) {
    if (newDots[i].classList.contains("dot-active"))
      newDots[i].classList.remove("dot-active");
    newDots[i].classList.add("enlarge");
  }
  newDots[pageNo].classList.add("dot-active");
  newDots[pageNo].classList.remove("enlarge");
  activeDot = pageNo;
};

document.addEventListener("scroll", scrollToSection);

let loaded = () => {
  // let heading = document.getElementsByClassName("home-heading")[0];
  video_loaded = true;
  allImagesLoaded();
};

// selectDot(currentPage);

//generic function for scrolling the section ends here---------------

//Below line for touchpad and mousewheel swipe

// function throttle(callback, limit) {
//   var tick = false;
//   return (e) => {
//     if (!tick) {
//       scrollSection(e.deltaY);
//       tick = true;
//       const timer = setTimeout(function () {
//         clearTimeout(timer);
//         tick = false;
//       }, limit);
//     }
//   };
// }

// window.addEventListener("wheel", (e) =>
//   throttle(() => scrollSection(e.deltaY), 500)()
// );

// window.addEventListener("wheel", throttle(scrollSection, 500), false);

// //Below line for arrow up and scroll scroll
// window.addEventListener("keyup", (e) => {
//   if (e.keyCode === 40) {
//     scrollSection("down");
//   }
//   if (e.keyCode === 38) {
//     scrollSection("up");
//   }
// });

let initialX,
  initialY,
  dispX,
  dispY,
  swipedir,
  threshold = 100, //Minimum amount of swipe
  restraint = 100, //Maximum tolerance of perpendicular swipe
  allowdTime = 300, //Maximum time for registering swipe
  elaspedTime,
  startTime;

//Code for registering touchswipe starts here-----------
// window.addEventListener(
//   "touchstart",
//   (e) => {
//     var screen = e.changedTouches[0];
//     swipeDir = "none";
//     (dispX = 0), (dispY = 0);
//     initialX = screen.pageX;
//     initialY = screen.pageY;
//     startTime = new Date().getTime();
//     e.preventDefault();
//   },
//   { passive: false }
// );

// window.addEventListener(
//   "touchmove",
//   (e) => {
//     e.preventDefault();
//   },
//   false
// );

// window.addEventListener(
//   "touchend",
//   (e) => {
//     var screen = e.changedTouches[0];
//     dispX = screen.pageX - initialX;
//     dispY = screen.pageY - initialY;
//     elaspedTime = new Date().getTime() - startTime;
//     if (elaspedTime <= allowdTime) {
//       if (Math.abs(dispX) >= threshold && Math.abs(dispY) <= restraint) {
//         swipeDir = dispX < 0 ? "left" : "right";
//       } else if (Math.abs(dispY) >= threshold && Math.abs(dispX) <= restraint) {
//         swipeDir = dispY < 0 ? "down" : "up";
//       }
//     }
//     e.preventDefault();
//     scrollSection(swipeDir);
//   },
//   false
// );

//Code for registering touchswipe ends here-----------

//-----------------------------------------
(function () {
  // Init
  var container = document.getElementById("homeLogoContainer"),
    inner = document.getElementById("homeLogoInner");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //-----------------------------------------

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
  };

  //-----------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inner.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //-----------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      2 * (mouse.y / inner.offsetHeight).toFixed(2),
      2 * (mouse.x / inner.offsetWidth).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //-----------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();

const cursor = document.getElementById("cursor");
//-----------------
window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".spotlight");

  let spotlightSize = "transparent -17px, rgba(0, 0, 0, 0.8) 72px)";

  window.addEventListener("mousemove", (e) => updateSpotlight(e));

  window.addEventListener("mousedown", (e) => {
    spotlightSize = "transparent , rgba(0, 0, 0, 0.8) )";

    updateSpotlight(e);
  });

  window.addEventListener("mouseup", (e) => {
    spotlightSize = "transparent -17px, rgba(0, 0, 0, 0.8) 72px)";

    updateSpotlight(e);
  });

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `radial-gradient(circle at ${
      (e.pageX / window.innerWidth) * 100
    }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    cursor.style.left = `${(e.pageX / window.innerWidth) * 100}%`;
    cursor.style.top = `${(e.pageY / window.innerHeight) * 100}%`;
  }
});

// document
//   .getElementById("blog-wrapper")
//   .addEventListener("mouseover", function () {
//     document.getElementById("blogDragDiv").style.display = "flex";
//   });
// document
//   .getElementById("blog-wrapper")
//   .addEventListener("mouseout", function () {
//     document.getElementById("blogDragDiv").style.display = "none";
//   });

// var timeout;

// let circle = document.getElementById("blogDragDiv");

// var circlepos = { x: 0, y: 0 };
// var mouse = { x: 0, y: 0 };

// // setInterval(followMouse, 50);

// function followMouse() {
//   var distX = mouse.x - circlepos.x;
//   var distY = mouse.y - circlepos.y;
//   circlepos.x += distX / 2;
//   circlepos.y += distY / 2;
//   circle.style.left = circlepos.x + "px";
//   circle.style.top = circlepos.y + "px";
// }

// var prevEvent, currentEvent;
// document.documentElement.onmousemove = function (event) {
//   currentEvent = event;
//   mouse.x = event.pageX;
//   mouse.y = event.pageY - 60;
// };
// var maxSpeed = 0,
//   prevSpeed = 0,
//   maxPositiveAcc = 0,
//   maxNegativeAcc = 0;
// setInterval(function () {
//   if (prevEvent && currentEvent) {
//     var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
//     var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
//     var movement = Math.sqrt(movementX * movementX + movementY * movementY);
//     var speed = 10 * movement;
//     if (speed > 500) {
//       circle.style.width = "75px";
//       circle.style.height = "75px";
//     } else {
//       circle.style.width = "100px";
//       circle.style.height = "100px";
//     }
//   }
//   prevEvent = currentEvent;
//   prevSpeed = speed;
// }, 100);

// Drag scroll for blogs section on landing

function random_function() {
  console.log("We solemnly swear that we are up to no good");
  document.getElementsByClassName("random")[0].style.display = "flex";
  document.getElementsByClassName("random")[0].style.opacity = "1";
  setTimeout(() => {
    document.getElementsByClassName("random")[0].style.transform = "scaleX(1)";
  }, 100);
  setTimeout(() => {
    document.getElementsByClassName("random")[0].style.opacity = "0";
    setTimeout(() => {
      document.getElementsByClassName("random")[0].style.display = "none";
      document.getElementsByClassName("random")[0].style.transform =
        "scaleX(0)";
    }, 600);
  }, 2500);
}
let touchcount = 0;
window.addEventListener("touchstart", function (e) {
  touchcount++;
  console.log("jij");
  setTimeout(() => {
    if (touchcount != 3) {
      touchcount = 0;
    }
  }, 600);
  if (touchcount == 3) {
    random_function();
  }
});
const slider = document.querySelector(".scrolling-wrapper");
const blogCard = document.getElementsByClassName("blogimage");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  for (let index = 0; index < blogCard.length; index++) {
    blogCard[index].classList.add("active");
  }
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  for (let index = 0; index < blogCard.length; index++) {
    blogCard[index].classList.remove("active");
  }
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  for (let index = 0; index < blogCard.length; index++) {
    blogCard[index].classList.remove("active");
  }
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 4; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

// For touch devices

// slider.addEventListener("touchstart", (e) => {
//   isDown = true;
//   for (let index = 0; index < blogCard.length; index++) {
//     blogCard[index].classList.add("active");
//   }
//   slider.classList.add("active");
//   startX = e.touches[0].pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("touchend", () => {
//   isDown = false;
//   for (let index = 0; index < blogCard.length; index++) {
//     blogCard[index].classList.remove("active");
//   }
//   slider.classList.remove("active");
// });
// slider.addEventListener("touchmove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.touches[0].pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });
