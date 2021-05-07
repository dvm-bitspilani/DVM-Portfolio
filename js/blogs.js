var loaderDestroying = false;
let destroyerTriggerTime = null;


  function allImagesLoaded() {
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

