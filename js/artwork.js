let back = document.getElementsByClassName("background")[0];
function allImagesLoaded() {
  console.log("ALL IMAGES LOADED");
  document.getElementsByClassName("loader-video")[0].style.opacity = "0";

  setTimeout(() => {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByClassName("wrapper")[0].style.opacity = "1";
  }, 500);
}
document.getElementsByClassName("loader-video")[0].playbackRate = 1.3;

const scrollFullPage = () => {
  const back = document.querySelector(".background");
  window.scrollTo(0, back.offsetHeight);
};
let el = document.querySelector(".artworkImage");
el.addEventListener("onmouseover", (e) => {
  el.style.transform = `translate(${-e.offsetX / 10}px , ${-e.offsetY / 10}px)`;
  console.log(`translate(${-e.offsetX / 100}px , ${-e.offsetY / 100}px)`);
});

let inner = document.querySelectorAll(".artworkImage");

inner.forEach((inner) =>
  (function () {
    // Init

    // Mouse
    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = e.offsetY - this._y;
        // console.log(this)
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      },
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(inner);

    //-----------------------------------------

    let counter = 0;
    let updateRate = 10;
    let isTimeToUpdate = function () {
      return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    let onMouseEnterHandler = function (event) {
      update(event);
    };

    let onMouseLeaveHandler = function () {
      inner.style = "";
    };

    let onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------

    let update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        2 * (mouse.x / inner.offsetWidth).toFixed(2),
        2 * (mouse.y / inner.offsetHeight).toFixed(2)
      );
    };

    let updateTransformStyle = function (x, y) {
      // console.log(x)
      let style = "translateX(" + -10 * x + "px) translateY(" + -10 * y + "px)";
      inner.children[0].style.transform =
        "translateX(" + 10 * x + "px) translateY(" + 10 * y + "px) scale(1.15)";
      inner.style.transform = style;
    };

    //-----------------------------------------

    inner.onmouseenter = onMouseEnterHandler;
    inner.onmouseleave = onMouseLeaveHandler;
    inner.onmousemove = onMouseMoveHandler;
  })()
);

let scroll_indicator_height =
  document.getElementsByClassName("scroll-indicator")[0].offsetHeight;

let white_line = document.getElementsByClassName("white-line")[0];
let grey_line = document.getElementsByClassName("grey-line")[0];

window.onscroll = () => {
  if (wrapper_height == undefined || scroll_indicator_height == undefined) {
    //console.log("no wrapper");
    return;
  }

  let percentage = window.pageYOffset / (wrapper_height - back.offsetHeight);
  if (percentage > 1) {
    white_line.style.height = `${scroll_indicator_height}px`;
    grey_line.style.height = 0;
  } else {
    white_line.style.height = `${percentage * scroll_indicator_height}px`;
    grey_line.style.height = `${(1 - percentage) * scroll_indicator_height}px`;
  }
};
