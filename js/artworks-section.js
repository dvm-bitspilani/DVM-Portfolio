//Artwork carousel scroll code starts here--------------

function enter_animation(name) {
  title = document.getElementsByClassName(`${name}`)[0];
  title.style.display = "inline-block";
  title.style.transform = "translateX(-100px)";
  title.style.opacity = "0";
  title.classList.add('right_animate');
  title.style.opacity = "1";
  title.style.transform = 'translateX(0)';
}

function exit_animation(name) {
  title = document.getElementsByClassName(`${name}`)[0];
  title.style.transform = 'translateX(-100px)';
  title.style.opacity = "0";
  title.style.display = "none";
}

// function enter_animation(name) {
//   var element = document.getElementsByClassName(`${name}`)[0];
//   element.classList.add('left_animate');
//   setTimeout(() => {
//     element.style.display = "none"
//   }, 700)
// }

let activeArtwork
let arts
let element
let title

document.addEventListener("DOMContentLoaded", () => {
  activeArtwork = 0
  arts = document.getElementsByClassName('artwork-img');
  leftValue = (5-activeArtwork)*1.5
  document.getElementById("active-scroll-id").style.transform = `translateX(-${leftValue}vw)`;
  element = document.getElementsByClassName("artwork-counter")[0];
  element.innerHTML = "01/0" + arts.length
  let nameOfTitleClass = "title-"+activeArtwork
  let nameOfNameClass = "name-"+activeArtwork
  let nameOfLinksClass = "links-"+activeArtwork
  enter_animation(`${nameOfTitleClass}`);
  enter_animation(`${nameOfNameClass}`);
  enter_animation(`${nameOfLinksClass}`);
});

const navigateCarousel = (step, stepType) => {
  if (stepType === "single" && step === -1 && activeArtwork === 0) {
    return;
  }
  if (stepType === "single" && step === 1 && activeArtwork === arts.length-1) {
    return;
  }
  let prevLeftCarousel = +document.getElementsByClassName("artwork-img-container")[0].style.left.split("%")[0];
  console.log(document.getElementById("active-scroll-id").style.left);
  let finalLeftCarousel
  let finalLeftScroll
  let initialActiveArtwork = activeArtwork;
  if(stepType === "single" && step === -1 && activeArtwork !== 0){
    finalLeftCarousel = prevLeftCarousel + 100
    activeArtwork -= 1
  }
  else if(stepType === "single" && step === 1 && activeArtwork !== arts.length-1){
    finalLeftCarousel = prevLeftCarousel - 100
    activeArtwork += 1
  }
  else if(stepType === "pill"){
    finalLeftCarousel = -100 * step
    activeArtwork = step
  }
  finalLeftScroll = (5-activeArtwork)*1.5
  document.getElementsByClassName("artwork-img-container")[0].style.left = `${finalLeftCarousel}%`;
  document.getElementById("active-scroll-id").style.transition ="all .5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  document.getElementById("active-scroll-id").style.transform = `translateX(-${finalLeftScroll}vw)`;
  element.innerHTML = `0${activeArtwork+1}/0${arts.length}`
  finalTitle = document.getElementsByClassName(`title-${activeArtwork}`)
  exit_animation(`title-${initialActiveArtwork}`);
  exit_animation(`name-${initialActiveArtwork}`);
  enter_animation(`title-${activeArtwork}`)
  enter_animation(`name-${activeArtwork}`)
}