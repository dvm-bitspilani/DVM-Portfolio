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

function loaded() {
  //console.log("Content Loaded");
  content_loaded = true;
  if (first_time) setTimeout(allImagesLoaded, 1000);
}

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
    first_time = false;

    wrapper_height = document
      .getElementsByClassName("wrapper")[0]
      .getBoundingClientRect().height;
  }
}

const teams = ["AppDev", "Backend", "Design", "Frontend", "Video"];

let wrapper_height;
document.getElementsByClassName("loader-video")[0].playbackRate = 1.3;
document.getElementsByClassName("navbar")[0].style.backgroundColor =
  "transparent";
document.getElementsByClassName("navbar")[0].style.backdropFilter = "blur(0px)";
let back = document.getElementsByClassName("background")[0];

const scrollFullPage = () => {
  window.scrollTo(0, back.offsetHeight);
};

const params = new URLSearchParams(window.location.search);
let id;
for (const param of params) {
  id = parseInt(param[1]);
}

async function get_info() {
  let json = await fetch("https://bits-apogee.org/portfolio/projects/");
  let result = await json.json();

  var information = result;

  information = normalise(information);
  //console.log(information);

  information = information[id];
  //console.log(information);

  info = information;
  //console.log(info);

  document.getElementsByClassName(
    "background"
  )[0].style.backgroundImage = `url('${info.heroSectionImageLink}')`;
  if (!info.website_link.includes("null")) {
    document.getElementsByClassName("link")[0].innerHTML =
      info.website_link.split("://")[1];
    document
      .getElementsByClassName("show-all")[0]
      .setAttribute("onclick", `window.open('${info.website_link}', '_blank')`);
  } else {
    if (window.innerWidth > 600) {
      document.getElementsByClassName("heading")[0].style.transform =
        "translateY(-8vh)";
    }
    document.getElementsByClassName("show-all")[0].style.display = "none";
  }

  document.getElementsByClassName("heading")[0].innerHTML = info.name;
  document.getElementsByClassName("left-project-about")[0].innerHTML =
    info.text_1;
  document.getElementsByClassName("smaller-text")[0].innerHTML = info.text_2;

  for (var p = 0; p < info.teamsInvolved.length; p++) {
    var div = document.createElement("div");
    div.classList.add("team");
    div.innerHTML = teams[info.teamsInvolved[p] - 1];
    document.getElementsByClassName("teams")[0].appendChild(div);
  }

  document
    .getElementsByClassName("show-all")[0]
    .setAttribute("target", "_blank");
  document.getElementsByClassName("date")[0].innerHTML = info.date;
  document.getElementsByClassName("main-photo")[0].src =
    info.heroSectionImageLink;
  document.getElementsByClassName("long-1")[0].src = info.long_images_link[0];
  document.getElementsByClassName("photo")[0].src = info.mockups_link[0];
  ////console.log("hey");
  if (info.mockups_link[1]) {
    document.getElementsByClassName("photo")[1].src = info.mockups_link[1];
  } else {
    document.getElementsByClassName("photo")[1].remove();
  }
  if (info.long_images_link.length > 1) {
    for (var x = 1; x < info.long_images_link.length; x++) {
      document.getElementsByClassName(
        `long-photos-container`
      )[0].innerHTML += `<div>
                <img class="long-${x + 1}" src="${info.long_images_link[x]}" />
              </div>`;
    }
  } else {
    document.getElementsByClassName("long-photos-container")[0].remove();
  }
}

async function main() {
  const main_r = await get_info();
  loaded();
  //console.log("loaded function");
}

main();

let scroll_indicator_height =
  document.getElementsByClassName("scroll-indicator")[0].offsetHeight;

let white_line = document.getElementsByClassName("white-line")[0];
let grey_line = document.getElementsByClassName("grey-line")[0];

window.onscroll = () => {
  document.getElementsByClassName("top-arrow")[0].style.display =
    window.pageYOffset > 100 ? "block" : "none";

  if (window.pageYOffset > 50) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
    document.getElementsByClassName("navbar")[0].style.backdropFilter =
      "blur(10px)";
  }
  if (wrapper_height == undefined || scroll_indicator_height == undefined) {
    ////console.log("no wrapper");
    return;
  }
  wrapper_height = document
    .getElementsByClassName("wrapper")[0]
    .getBoundingClientRect().height;

  let percentage = window.pageYOffset / (wrapper_height - back.offsetHeight);
  if (percentage > 1) {
    white_line.style.height = `${scroll_indicator_height}px`;
    grey_line.style.height = 0;
  } else {
    white_line.style.height = `${percentage * scroll_indicator_height}px`;
    grey_line.style.height = `${(1 - percentage) * scroll_indicator_height}px`;
  }
};
