let wrapper_height;
document.getElementsByClassName("loader-video")[0].playbackRate = 1.3;
function allImagesLoaded() {
  //console.log("ALL IMAGES LOADED");
  document.getElementsByClassName("loader-video")[0].style.opacity = "0";

  setTimeout(() => {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByClassName("wrapper")[0].style.opacity = "1";
  }, 500);

  wrapper_height = document
    .getElementsByClassName("wrapper")[0]
    .getBoundingClientRect().height;
  //console.log(wrapper_height);
}

let back = document.getElementsByClassName("background")[0];

const scrollFullPage = () => {
  window.scrollTo(0, back.offsetHeight);
};

const params = new URLSearchParams(window.location.search);
let id;
for (const param of params) {
  id = parseInt(param[1]) - 1;
  //console.log(param[1]);
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

document
  .getElementsByClassName("show-all")[0]
  .setAttribute("onclick", `window.open('${info.link}', '_blank')`);
document.getElementsByClassName("show-all")[0].setAttribute("target", "_blank");
document.getElementsByClassName("date")[0].innerHTML = info.date;
document.getElementsByClassName("main-photo")[0].src = info.main_photo_link;
document.getElementsByClassName("long-1")[0].src = info.long_photos_link[0];
document.getElementsByClassName("photo")[0].src = info.photos_link[0];
//console.log("hey");
if (info.photos_link[1]) {
  document.getElementsByClassName("photo")[1].src = info.photos_link[1];
} else {
  document.getElementsByClassName("photo")[1].remove();
}
if (info.long_photos_link.length > 1) {
  for (var x = 1; x < info.long_photos_link.length; x++) {
    document.getElementsByClassName(
      `long-photos-container`
    )[0].innerHTML += `<div>
            <img class="long-${x + 1}" src="${info.long_photos_link[x]}" />
          </div>`;
  }
} else {
  document.getElementsByClassName("long-photos-container")[0].remove();
}

let scroll_indicator_height =
  document.getElementsByClassName("scroll-indicator")[0].offsetHeight;

let white_line = document.getElementsByClassName("white-line")[0];
let grey_line = document.getElementsByClassName("grey-line")[0];
//console.log(wrapper_height - back.offsetHeight);
window.onscroll = () => {
  document.getElementsByClassName("top-arrow")[0].style.display =
    window.pageYOffset > 100 ? "block" : "none";

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
