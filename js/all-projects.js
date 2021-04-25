// Array containing the content
import info from "./information.js";
console.log(info);
let main_arr = [[], [], [], [], []];
function get_info() {
  // bake your code here

  return new Promise((resolve) => {
    for (var p = 0; p < info.length; p++) {
      let temp = {
        img: info[p].main_photo_link,
        name: info[p].name,
        url: info[p].page_link,
      };
      for (var q = 0; q < info[p].teams.length; q++) {
        main_arr[info[p].teams[q] - 1].push(temp);
      }
      console.log("joijoijo");
    }
    
  });
}

// main_arr = [
//   [
//     {
//       img: "/Android/1.jpg",
//       name: "Android 1",
//       url: "",
//     },
//     {
//       img: "/Android/2.jpg",
//       name: "Android 2",
//       url: "",
//     },
//     {
//       img: "/Android/3.jpg",
//       name: "Android 3",
//       url: "",
//     },
//     {
//       img: "/Android/4.jpg",
//       name: "Android 4",
//       url: "",
//     },
//   ],
//   [
//     {
//       img: "/Backend/1.jpg",
//       name: "Backend 1",
//       url: "",
//     },
//     {
//       img: "/Backend/2.jpg",
//       name: "Backend 2",
//       url: "",
//     },
//     {
//       img: "/Backend/3.jpg",
//       name: "Backend 3",
//       url: "",
//     },
//   ],
//   [
//     {
//       img: "/Design/1.jpg",
//       name: "Design 1",
//       url: "",
//     },
//     {
//       img: "/Design/2.jpg",
//       name: "Design 2",
//       url: "",
//     },
//     {
//       img: "/Design/3.jpg",
//       name: "Design 3",
//       url: "",
//     },
//     {
//       img: "/Design/4.jpg",
//       name: "Design 4",
//       url: "",
//     },
//   ],
//   [
//     {
//       img: "/Frontend/1.jpg",
//       name: "Frontend 1",
//       url: "",
//     },
//     {
//       img: "/Frontend/2.jpg",
//       name: "Frontend 2",
//       url: "",
//     },
//     {
//       img: "/Frontend/3.jpg",
//       name: "Frontend 3",
//       url: "",
//     },
//   ],

//   [
//     {
//       img: "/Video/1.jpg",
//       name: "Video 1",
//       url: "",
//     },
//     {
//       img: "/Video/2.jpg",
//       name: "Video 2",
//       url: "",
//     },
//   ],
// ];

// Constant Variables

async function main() {
  const main_r = await get_info();

  console.log(main_arr);
}

main();

console.log("hello");
console.log("DOne");
const slider = document.querySelector(".projects");
const inner = document.querySelector(".inner");
const ele = document.getElementById("slider");
const left_limit = document.getElementById("dotted_line_wrapper").offsetLeft;
const right_limit =
  document.getElementById("dotted_line_wrapper").offsetLeft +
  document.getElementById("dotted_line_wrapper").offsetWidth -
  document.getElementById("slider").offsetWidth;
const slide_bar_scroll_dist =
  document.getElementById("dotted_line_wrapper").offsetWidth -
  document.getElementById("slider").offsetWidth;
const white = document.getElementById("white");
const grey = document.getElementById("grey");

let scroll_dist;
let number_of_projects;
let timer_scroll;
let timer_color;

function team(input) {
  for (var i = 0; i < 5; i++) {
    document.getElementsByClassName("team-name")[i].className = "team-name";
  }
  document.getElementsByClassName("team-name")[input].className =
    "team-name highlighted";

  team_projects(input);
}

function team_projects(input) {
  var window_width = window.innerWidth;

  document.getElementsByClassName("projects")[0].scrollRight = 150;
  document.getElementsByClassName("projects")[0].innerHTML = "";
  var no_of_projects = main_arr[input].length;
  number_of_projects = no_of_projects;
  var total_width = 64 * no_of_projects;

  document.getElementsByClassName("projects")[0].style.width =
    total_width + "vw";
  for (var i = 0; i < no_of_projects; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "single_project");
    var background = `url( ${main_arr[input][i].img} )`;
    div.setAttribute(
      "style",
      "background-image:" +
        background +
        "; background-position: center; background - repeat: no - repeat; background - size: cover; "
    );
    document.getElementsByClassName("projects")[0].appendChild(div);

    var name_div = document.createElement("div");
    name_div.setAttribute("class", "project_name");
    name_div.innerHTML = main_arr[input][i].name;
    document.getElementsByClassName("single_project")[i].appendChild(name_div);
  }

  clearInterval(timer_color);
  clearTimeout(timer_scroll);

  setTimeout(function () {
    scroll_dist =
      document.querySelector(".projects").offsetWidth - window.innerWidth;
    console.log(scroll_dist);
    inner.scrollLeft = 0;
    ele.style.left = `${left_limit}px`;
    white.style.width = "0%";
    grey.style.width = "100%";
    timer();
  }, 500);
}

// Drag Scroll

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  ele.classList.add("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.add("active");
  }
  startX = e.pageX - inner.offsetLeft;
  scrollLeft = inner.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
  ele.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
  ele.classList.remove("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.remove("active");
  }
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - inner.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  clearInterval(timer_color);
  clearTimeout(timer_scroll);
  inner.scrollLeft = scrollLeft - walk;
  var slider_offset = (inner.scrollLeft / scroll_dist) * slide_bar_scroll_dist;

  if (slider_offset > left_limit && slider_offset < right_limit) {
    ele.style.left = `${slider_offset}px`;
  } else if (slider_offset < left_limit) {
    ele.style.left = `${left_limit}px`;
  } else {
    ele.style.left = `${right_limit}px`;
  }
  white.style.width = "0%";
  grey.style.width = "100%";
  timer();
});

// Slider

let x = 0;

const mouseDownHandler = function (e) {
  x = e.clientX;
  ele.classList.add("active");
  slider.classList.add("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.add("active");
  }
  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  const dx = e.clientX - x;
  var ele_offset = ele.offsetLeft + dx;

  if (ele_offset > right_limit || ele_offset < left_limit) {
    return;
  }
  clearInterval(timer_color);
  clearTimeout(timer_scroll);
  ele.style.left = `${ele_offset}px`;

  inner.scrollLeft = (ele_offset / slide_bar_scroll_dist) * scroll_dist;
  white.style.width = "0%";
  grey.style.width = "100%";
  timer();
  x = e.clientX;
};

const mouseUpHandler = function () {
  ele.classList.remove("active");
  slider.classList.remove("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.remove("active");
  }
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
};

ele.addEventListener("mousedown", mouseDownHandler);

// Left and Right Arrow Buttons

function left_right(input) {
  var mulitplying_factor = parseFloat(
    slide_bar_scroll_dist / (number_of_projects - 1)
  ).toFixed(2);
  var distance_from_left = parseFloat(
    parseFloat(ele.style.left) - left_limit
  ).toFixed(2);
  console.log("Distance fro left", distance_from_left);
  console.log("MF", mulitplying_factor);
  console.log("total_dist", slide_bar_scroll_dist);

  if (input == "l") {
    var temp = distance_from_left / mulitplying_factor;
    if (Number.isInteger(temp)) {
      if (temp == 0) {
        move(0, mulitplying_factor);
      } else {
        move(temp - 1, mulitplying_factor);
      }
    } else {
      var floor = Math.floor(temp);

      move(floor, mulitplying_factor);
    }
  } else {
    var temp = distance_from_left / mulitplying_factor;

    if (Number.isInteger(temp)) {
      if (temp == number_of_projects - 1) {
        move(0, mulitplying_factor);
        return;
      } else {
        move(temp + 1, mulitplying_factor);
      }
    } else {
      var ceil = Math.ceil(temp);

      move(ceil, mulitplying_factor);
    }
  }
}

function move(to_position, mulitplying_factor) {
  ele.classList.add("left");
  ele.classList.add("active");
  slider.classList.add("active");
  inner.classList.add("active");

  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.add("active");
  }

  clearInterval(timer_color);
  clearTimeout(timer_scroll);
  ele.style.left = `${left_limit + to_position * mulitplying_factor}px`;
  inner.scrollLeft =
    ((left_limit + to_position * mulitplying_factor) / slide_bar_scroll_dist) *
    scroll_dist;
  white.style.width = "0%";
  grey.style.width = "100%";
  timer();
  setTimeout(() => {
    for (var i = 0; i < number_of_projects; i++) {
      document
        .getElementsByClassName("single_project")
        [i].classList.remove("active");
    }

    ele.classList.remove("left");
    ele.classList.remove("active");
    slider.classList.remove("active");
    inner.classList.remove("active");
  }, 500);
}

// Timer Function

function timer() {
  timer_color = setInterval(() => {
    white.style.width = `${parseInt(white.style.width) + 1}%`;

    grey.style.width = `${parseInt(grey.style.width) - 1}%`;
  }, 50);
  timer_scroll = setTimeout(() => {
    left_right("r");
  }, 5000);
}

// Starting off with Frontend Displayed

team(0);
