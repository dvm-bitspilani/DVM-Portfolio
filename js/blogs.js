function allImagesLoaded() {
  console.log("ALL IMAGES LOADED");
  document.getElementsByClassName("loader-video")[0].style.opacity = "0";

  setTimeout(() => {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByClassName("wrapper")[0].style.opacity = "1";
  }, 500);
}
