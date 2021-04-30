let wrapper_height;
function allImagesLoaded() {
  console.log("ALL IMAGES LOADED");
  document.getElementsByClassName("loader")[0].style.display = "none";
  wrapper_height = document
    .getElementsByClassName("wrapper")[0]
    .getBoundingClientRect().height;
  console.log(wrapper_height);
}
let back = document.getElementsByClassName("background")[0];

const scrollFullPage = () => {
  window.scrollTo(0, back.offsetHeight);
};

const params = new URLSearchParams(window.location.search);
let id;
for (const param of params) {
  id = parseInt(param[1]) - 1;
  console.log(param[1]);
}

const info = information[id];
const teams = ["AppDev", "Backend", "Design", "Frontend", "Video"];

document.getElementsByClassName(
  "background"
)[0].style.backgroundImage = `url('${info.main_photo_link}')`;
document.getElementsByClassName("link")[0].innerHTML = info.link;
document.getElementsByClassName("heading")[0].innerHTML = info.name;
document.getElementsByClassName("left-project-about")[0].innerHTML = info.text1;
document.getElementsByClassName("smaller-text")[0].innerHTML = info.text2;

for (var p = 0; p < info.teams.length; p++) {
  var div = document.createElement("div");
  div.classList.add("team");
  div.innerHTML = teams[info.teams[p] - 1];
  document.getElementsByClassName("teams")[0].appendChild(div);
}

document.getElementsByClassName("date")[0].innerHTML = info.date;
document.getElementsByClassName("main-photo")[0].src = info.main_photo_link;
document.getElementsByClassName("long-1")[0].src = info.long_photos_link[0];
document.getElementsByClassName("photo")[0].src = info.photos_link[0];
document.getElementsByClassName("photo")[1].src = info.photos_link[1];
document.getElementsByClassName("long-2")[0].src = info.long_photos_link[1];
document.getElementsByClassName("long-3")[0].src = info.long_photos_link[2];

let scroll_indicator_height = document.getElementsByClassName(
  "scroll-indicator"
)[0].offsetHeight;

let white_line = document.getElementsByClassName("white-line")[0];
let grey_line = document.getElementsByClassName("grey-line")[0];
console.log(wrapper_height - back.offsetHeight);
window.onscroll = () => {
  if (wrapper_height == undefined || scroll_indicator_height == undefined) {
    console.log("no wrapper");
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
