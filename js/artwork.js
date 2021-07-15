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

fetch("https://bits-apogee.org/portfolio/artworks/")
  .then((response) => response.json())
  .then((data) => populate(data));

let col1 = document.getElementsByClassName("column")[0];
let col2 = document.getElementsByClassName("column")[1];
let wrapper_height;
populate = (main_arr) => {
  console.log(main_arr);
  for (var i = 0; i < main_arr.length / 2; i++) {
    let artworkContainer1 = document.createElement("div");
    artworkContainer1.classList.add("artworkContainer");
    artworkContainer1.innerHTML = `
        <div class="artworkImage">
              <img src="${main_arr[2 * i].blogImageLink}" alt="" />
            </div>
            <div class="artworkSomething">${main_arr[2 * i].about || ""}</div>
            <div class="artworkName">${main_arr[2 * i].title}</div>
            <div class="artistName">By ${main_arr[2 * i].artistName}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <a href=${main_arr[2 * i].BehanceLink} class=${
      main_arr[2 * i].BehanceLink ? "" : "disabled"
    }><img src="./assets/icons/behance.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i].DribbleLink} class=${
      main_arr[2 * i].DribbleLink ? "" : "disabled"
    }><img src="./assets/icons/dribble.svg" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i].InstagramLink} class=${
      main_arr[2 * i].InstagramLink ? "" : "disabled"
    }><img src="./assets/icons/instagram-sketched@2x.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i].LinkedInLink} class=${
      main_arr[2 * i].LinkedInLink ? "" : "disabled"
    }><img src="./assets/icons/linkedin.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i].GithubLink} class=${
      main_arr[2 * i].GithubLink ? "" : "disabled"
    }><img src="./assets/icons/github.png" /></a>
              </div>
            </div>
    `;
    col1.appendChild(artworkContainer1);

    let artworkContainer2 = document.createElement("div");
    artworkContainer2.classList.add("artworkContainer");
    artworkContainer2.innerHTML = `
        <div class="artworkImage">
              <img src="${main_arr[2 * i + 1].blogImageLink}" alt="" />
            </div>
            <div class="artworkSomething">${
              main_arr[2 * i + 1].about || ""
            }</div>
            <div class="artworkName">${main_arr[2 * i + 1].title}</div>
            <div class="artistName">By ${main_arr[2 * i + 1].artistName}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <a href=${main_arr[2 * i + 1].BehanceLink} class=${
      main_arr[2 * i + 1].BehanceLink ? "" : "disabled"
    }><img src="./assets/icons/behance.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i + 1].DribbleLink} class=${
      main_arr[2 * i + 1].DribbleLink ? "" : "disabled"
    }><img src="./assets/icons/dribble.svg" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i + 1].InstagramLink} class=${
      main_arr[2 * i + 1].InstagramLink ? "" : "disabled"
    }><img src="./assets/icons/instagram-sketched@2x.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i + 1].LinkedInLink} class=${
      main_arr[2 * i + 1].LinkedInLink ? "" : "disabled"
    }><img src="./assets/icons/linkedin.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[2 * i + 1].GithubLink} class=${
      main_arr[2 * i + 1].GithubLink ? "" : "disabled"
    }><img src="./assets/icons/github.png" /></a>
            </div>
    `;
    col2.appendChild(artworkContainer2);
  }

  wrapper_height = document
    .getElementsByClassName("wrapper")[0]
    .getBoundingClientRect().height;
  console.log(wrapper_height);

  let el = document.querySelector(".artworkImage");
  el.addEventListener("onmouseover", (e) => {
    console.log("dmmo");
    el_mouseover(el, e);
  });
};

const scrollFullPage = () => {
  const back = document.querySelector(".background");
  window.scrollTo(0, back.offsetHeight);
};

// while (wrapper_height == undefined) {
//   // Do nothing
//   console.log(document.querySelector(".artworkImage"));
//   if (document.querySelector(".artworkImage")) {
//     el = document.querySelector(".artworkImage");
//   }
// }

function el_mouseover(el, e) {
  console.log("kokokok");
  el.style.transform = `translate(${-e.offsetX / 10}px , ${-e.offsetY / 10}px)`;
  console.log(`translate(${-e.offsetX / 100}px , ${-e.offsetY / 100}px)`);
}

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
