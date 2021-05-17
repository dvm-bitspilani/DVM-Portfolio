var font = new FontFaceObserver("Jaapokki subtract");
var loaderDestroying = false;
let destroyerTriggerTime = null;
font.load().then(() => {
  //This is only a demo for preloading fonts. Use ONLY for loader fonts strictly
  // setTimeout(() => {
  //     document.documentElement.className += 'fonts-loaded'
  // },800)
  //this setTimeout emulates FOUT when the font might be loaded.
  //uncomment setTimeout to  se it in action locally
  document.documentElement.className += "fonts-loaded";
});

function allImagesLoaded() {
  console.log("ALL IMAGES LOADED");
  let loaderContainer = document.querySelector(".loaderContainer");
  let pentagon = document.querySelector(".pentagon");

  loaderContainer.addEventListener(
    "animationend",
    () => {
      if (destroyerTriggerTime != null && loaderDestroying) {
        document.getElementsByClassName("loader")[0].style.display = "none";
      }
    },
    false
  );

  loaderContainer.addEventListener(
    "animationiteration",
    function () {
      currentTime = Math.round(Date.now() / 1000);
      if (!loaderDestroying) {
        destroyerTriggerTime = Math.round(Date.now() / 1000);
        console.log(destroyerTriggerTime);
        loaderDestroying = true;
        loaderContainer.style.animation = "2s loader-disappear forwards";
        pentagon.style.animation = "none";
      }
    },
    false
  );
}
