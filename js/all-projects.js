// Normalisation Functions for API Data
function nrmTeams(teams) {
  const arr = [];
  if (teams.includes("App")) arr.push(1);
  if (teams.includes("Back")) arr.push(2);
  if (teams.includes("Design")) arr.push(3);
  if (teams.includes("Front")) arr.push(4);
  if (teams.includes("Video")) arr.push(5);
  return arr;
}

// NORMALISATION FUNCTION ON API RESPONSE
function normalise(information) {
  for (var x = 0; x < information.length; x++) {
    // convert front/back/design
    // Teams - 1: App, 2: Backend, 3: Design, 4: Frontend, 5: Video
    information[x].teamsInvolved = nrmTeams(information[x].teamsInvolved);

    // fix images relative path
    // information[x].heroSectionImageLink = "." + information[x].heroSectionImageLink

    information[x].long_images_link =
      information[x].long_images_link.split(", ");
    // for (var y = 0; y < information[x].long_images_link.length; y++) {
    //   information[x].long_images_link[y] = "." + information[x].long_images_link[y]
    // }

    information[x].mockups_link = information[x].mockups_link.split(", ");
    // for (var y = 0; y < information[x].mockups_link.length; y++) {
    //   information[x].mockups_link[y] = "." + information[x].mockups_link[y]
    // }

    // fix page link
    information[x].page_link = information[x].page_link.substring(
      "http://".length
    );
    information[x].page_link = information[x].page_link.substring(
      0,
      information[x].page_link.length - ".com".length
    );
    information[x].page_link = "project.html?id=" + x;
  }

  // embed youtube urls for video team
  for (var x = 0; x < information.length; x++) {
    const project = information[x];
    if (information[x].teamsInvolved.includes(5)) {
      information[x].website_link = information[x].website_link.substring(
        "http://".length
      );
      information[x].website_link = information[x].website_link.substring(
        0,
        information[x].website_link.length - ".com".length
      );
      information[x].page_link = information[x].website_link;
    }
  }
  return information;
}

// Array containing the content
document.getElementsByClassName("loader-video")[0].playbackRate = 1.3;
let video = false;
let scroll_dist;
let number_of_projects;
let timer_scroll;
let timer_color;
let content_loaded = false;
let first_time = true;

function allImagesLoaded() {
  if (content_loaded && first_time) {
    console.log("ALL IMAGES LOADED");
    document.getElementsByClassName("loader-video")[0].style.opacity = "0";

    setTimeout(() => {
      document.getElementsByClassName("loader")[0].style.display = "none";
      document.getElementsByClassName("wrapper")[0].style.opacity = "1";
    }, 500);
    translate_function();
    first_time = false;
  }
}

function project_image_translate(x) {
  let time = first_time ? 600 + x * 150 : x * 150;

  setTimeout(() => {
    document.getElementsByClassName("single_project")[x].style.transform =
      "translateY(0)";
  }, time);
}
function translate_function() {
  for (var x = 0; x < number_of_projects; x++) {
    project_image_translate(x);
  }
}
function loaded() {
  //console.log("Content Loaded");
  content_loaded = true;
  if (first_time) allImagesLoaded();
}

let main_arr = [[], [], [], [], []];

async function get_info() {
  // bake your code here

  // async function getJSONAsync(){

  //   // The await keyword saves us from having to write a .then() block.
  let json = await fetch("https://bits-apogee.org/portfolio/projects/");
  let result = await json.json();

  // The result of the GET request is available in the json variable.
  // We return it just like in a regular synchronous function.
  // return resp;

  // getJSONAsync().then( function(result) {
  var information = result;
  //console.log(information);

  information = normalise(information);

  // return new Promise((resolve) => {
  for (var p = 0; p < information.length; p++) {
    let temp = {
      img: information[p].heroSectionImageLink,
      name: information[p].name,
      url: information[p].page_link,
      date: information[p].date,
    };
    for (var q = 0; q < information[p].teamsInvolved.length; q++) {
      main_arr[information[p].teamsInvolved[q] - 1].push(temp);
    }
  }
  //console.log(main_arr);
  // });
}
// });
// }

async function main() {
  const main_r = await get_info();

  let already_called = false;

  //console.log("random");

  const params = new URLSearchParams(window.location.search);
  for (const param of params) {
    if (param[0] == "videos") {
      team(4);
      already_called = true;
    }
  }
  if (!already_called) {
    team(0);
  }
}

main();

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
const page_number = document.getElementById("page-number");

let mobile = false;

function team(input) {
  if (input == 4) video = true;
  else video = false;
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
  var total_width, margin, single_width;
  if (!first_time) {
    translate_function();
  }
  if (window_width > 1024) {
    total_width = 60 * no_of_projects;
    margin = 10;
    single_width = 40;
    mobile = false;
  } else {
    //console.log("mobile");
    mobile = true;
    total_width = 80 * no_of_projects;
    margin = 7.5;
    single_width = 65;
  }
  //console.log(main_arr[input]);

  document.getElementsByClassName("projects")[0].style.width =
    total_width + "vw";
  if (input == 4) {
    for (var i = 0; i < no_of_projects; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "single_project");
      document.getElementsByClassName("projects")[0].appendChild(div);
      let link_final = `https://www.youtube.com/embed/${main_arr[input][i].url}?autoplay=1&mute=1&loop=1&playlist=${main_arr[input][i].url}`;
      div.innerHTML = `
        <iframe src="${link_final}" class='video' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <div class='video_name'>
          ${main_arr[input][i].name}
        </div>
      `;
    }
  } else {
    // SOrting Projects by their dates
    main_arr[input].sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.

      return new Date(b.date) - new Date(a.date);
    });
    console.log(main_arr[input]);
    for (var i = 0; i < no_of_projects; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "single_project");
      // var background = `url( ${main_arr[input][i].img} )`;
      // div.setAttribute(
      //   "style",
      //   "background-image:" +
      //     background +
      //     "; background-position: center; background - repeat: no - repeat; background - size: cover; "
      // );
      div.innerHTML = `
        <div class='project_image'>
          <img src='${main_arr[input][i].img}' />
        </div>
        <div class="project_name">
          ${main_arr[input][i].name}
        </div>
      `;
      div.setAttribute("onclick", `location.href='${main_arr[input][i].url}'`);
      document.getElementsByClassName("projects")[0].appendChild(div);

      // var name_div = document.createElement("div");
      // name_div.setAttribute("class", "project_name");
      // name_div.innerHTML = main_arr[input][i].name;
      // document
      //   .getElementsByClassName("single_project")
      //   [i].appendChild(name_div);
    }
  }

  clearInterval(timer_color);
  clearTimeout(timer_scroll);

  setTimeout(function () {
    // scroll_dist =
    //   document.querySelector(".projects").offsetWidth - window.innerWidth;
    scroll_dist =
      (((number_of_projects - 1) * (2 * margin + single_width)) / 100) *
      innerWidth;

    inner.scrollLeft = 0;
    ele.style.left = `${left_limit}px`;
    white.style.width = "0%";
    page_number.innerHTML = "1";
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

// Projects scroll for touch devices

slider.addEventListener("touchstart", (e) => {
  isDown = true;
  slider.classList.add("active");
  ele.classList.add("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.add("active");
  }
  startX = e.touches[0].pageX - inner.offsetLeft;
  scrollLeft = inner.scrollLeft;
});
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
//   ele.classList.remove("active");
// });
slider.addEventListener("touchend", () => {
  isDown = false;
  slider.classList.remove("active");
  ele.classList.remove("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.remove("active");
  }
});
slider.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - inner.offsetLeft;
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

// Slider for touch devices

const touchDownHandler = function (e) {
  ////console.log("Hello");
  x = e.touches[0].clientX;
  ////console.log(e);
  ele.classList.add("active");
  slider.classList.add("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.add("active");
  }

  ele.addEventListener("touchmove", touchMoveHandler);
  ele.addEventListener("touchend", touchUpHandler);
};

const touchMoveHandler = function (e) {
  // //console.log("mobile moved");
  const dx = e.touches[0].clientX - x;
  var ele_offset = ele.offsetLeft + dx;
  // //console.log(e.touches[0].clientX, x);
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
  x = e.touches[0].clientX;
};

const touchUpHandler = function () {
  ele.classList.remove("active");
  slider.classList.remove("active");
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.remove("active");
  }
  ele.removeEventListener("touchmove", touchMoveHandler);
  ele.removeEventListener("touchend", touchUpHandler);
};

ele.addEventListener("touchstart", touchDownHandler);

// Left and Right Arrow Buttons

function left_right(input) {
  var mulitplying_factor = parseFloat(
    slide_bar_scroll_dist / (number_of_projects - 1)
  ).toFixed(2);
  var distance_from_left = parseFloat(
    parseFloat(ele.style.left) - left_limit
  ).toFixed(2);
  // //console.log("Distance fro left", distance_from_left);
  // //console.log("MF", mulitplying_factor);
  // //console.log("total_dist", slide_bar_scroll_dist);

  if (input == "l") {
    var temp = distance_from_left / mulitplying_factor;
    if (Number.isInteger(temp)) {
      if (temp == 0) {
        page_number.innerHTML = `1`;
        move("l", 0, mulitplying_factor);
      } else {
        page_number.innerHTML = `${temp}`;
        move("l", temp - 1, mulitplying_factor);
      }
    } else {
      var floor = Math.floor(temp);
      page_number.innerHTML = `${floor - 1}`;
      move("l", floor, mulitplying_factor);
    }
  } else {
    var temp = distance_from_left / mulitplying_factor;

    if (Number.isInteger(temp)) {
      if (temp == number_of_projects - 1) {
        move("r", 0, mulitplying_factor);
        page_number.innerHTML = "1";
        return;
      } else {
        page_number.innerHTML = `${temp + 2}`;
        move("r", temp + 1, mulitplying_factor);
      }
    } else {
      var ceil = Math.ceil(temp);
      page_number.innerHTML = `${ceil + 1}`;
      move("r", ceil, mulitplying_factor);
    }
  }
}

function move(direction, to_position, mulitplying_factor) {
  ele.classList.add("left");
  ele.classList.add("active");
  slider.classList.add("active");
  inner.classList.add("active");
  console.log(main_arr);
  for (var i = 0; i < number_of_projects; i++) {
    document
      .getElementsByClassName("single_project")
      [i].classList.add("active");
  }

  clearInterval(timer_color);
  clearTimeout(timer_scroll);
  ele.style.left = `${left_limit + to_position * mulitplying_factor}px`;
  // inner.scrollLeft =
  //   ((left_limit + to_position * mulitplying_factor) / slide_bar_scroll_dist) *
  // //console.log("to position", to_position);
  //   scroll_dist;
  // if (direction == "l") {
  //   inner.scrollLeft =
  //     inner.scrollLeft - scroll_dist / (number_of_projects - 1);
  // } else {
  //   if (to_position == 0) {
  //     inner.scrollLeft = 0;
  //   } else {
  //     inner.scrollLeft =
  //       inner.scrollLeft + scroll_dist / (number_of_projects - 1);
  //     //console.log(scroll_dist / (number_of_projects - 1));
  //   }
  // }
  inner.scrollLeft = (to_position * scroll_dist) / (number_of_projects - 1);
  white.style.width = "0%";
  ////console.log(to_position);
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
    if (parseInt(white.style.width) > 47) {
      page_number.style.color = "#3c3c3c";
    } else {
      page_number.style.color = "#fff";
    }
  }, 50);
  timer_scroll = setTimeout(() => {
    left_right("r");
  }, 5000);
}

// let already_called = false;

// const params = new URLSearchParams(window.location.search);
// for (const param of params) {
//   if (param[0] == "videos") {
//     team(4);
//     already_called = true;
//   }
// }
// if (!already_called) {
//   team(0);
// }
