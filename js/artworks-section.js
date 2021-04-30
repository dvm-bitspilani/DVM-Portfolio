//Artwork carousel scroll code starts here--------------

const navigateCarousel = (step, stepType) => {
    if (
      document.getElementById("active-scroll-id").style.left === "0vw" &&
      stepType === "single" &&
      step === -1
    ) {
      return;
    }

    if (
      parseInt(document.getElementById("active-scroll-id").style.left.split('v')[0]) >4 &&
      stepType === "single" &&
      step === 1
    ) {
      return;
    }
    let scrollbarDisp = 1.25;
    const prevLeft = +document
      .getElementById("active-scroll-id")
      .style.left.split("v")[0];
    const dist = scrollbarDisp * step;
    let newLeft;
    if (stepType === "single") {
      newLeft = prevLeft + dist;
    } else newLeft = dist;
    let prevLeftCarousel = +document
      .getElementsByClassName("artwork-img-container")[0]
      .style.left.split("%")[0];
    let distCarousel = -(step * 100);
    if (prevLeftCarousel <= -100 || step === -1) {
      if (stepType === "single") distCarousel -= step * 1;
    }
    if (prevLeftCarousel === 1) prevLeftCarousel -= 1;
    let newLeftCarousel;
    if (stepType === "single") newLeftCarousel = prevLeftCarousel + distCarousel;
    else {
      newLeftCarousel = distCarousel;
      const offset = Math.ceil(newLeftCarousel / 100) + 1;
      newLeftCarousel += offset;
    }

    document.getElementById("active-scroll-id").style.transition =
      "left .5s ease-in";
    document.getElementById("active-scroll-id").style.left = `${newLeft}vw`;
    document.getElementsByClassName(
      "artwork-img-container"
    )[0].style.left = `${newLeftCarousel}%`;
    setTimeout(() => {
      document.getElementById("active-scroll-id").style.transition = "0s";
    }, 600);
  };
