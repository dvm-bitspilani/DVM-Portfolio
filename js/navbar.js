let isOpened = false;
const hamLine = document.getElementsByClassName("ham-line");

const openCloseNav = () => {
  let navContainer = document.getElementById("navContainer");
  let smallLinksHeader = document.getElementsByClassName("smallLinksHeader")[0];
  let smallLinks = document.getElementsByClassName("smallLinks");
  let largeLink1 = document.getElementsByClassName("largeLink1")[0];
  let largeLink2 = document.getElementsByClassName("largeLink2")[0];
  let largeLink3 = document.getElementsByClassName("largeLink3")[0];
  let largeLink4 = document.getElementsByClassName("largeLink4")[0];
  let largeLink5 = document.getElementsByClassName("largeLink5")[0];
  let largeLink6 = document.getElementsByClassName("largeLink6")[0];
  if (isOpened) {
    navContainer.style.display = "flex";
    navContainer.style.transition = "all 0.5s ease-out";
    navContainer.style.transform = "translateX(100vw)";
    setTimeout(() => {
      smallLinksHeader.style.opacity = "0";
      smallLinksHeader.style.transform = "translateY(20px)";
      largeLink1.style.opacity = 0;
      largeLink2.style.opacity = 0;
      largeLink3.style.opacity = 0;
      largeLink4.style.opacity = 0;
      largeLink5.style.opacity = 0;
      largeLink6.style.opacity = 0;
      for (let i of smallLinks) {
        i.style.opacity = "0";
        i.style.transform = "translateY(20px)";
      }
    }, 500);
    isOpened = false;
    hamLine[1].style.left = "";
    hamLine[1].style.marginTop = "";
    hamLine[0].style.transform = "";
    hamLine[1].style.transform = "";
  } else {
    navContainer.style.display = "flex";
    navContainer.style.transition = "all 0.5s ease-out";
    navContainer.style.transform = "translateX(0vw)";

    setTimeout(() => {
      smallLinksHeader.style.opacity = "1";
      smallLinksHeader.style.transition = "all 0.5s ease-out";
      smallLinksHeader.style.transform = "translateY(0)";
    }, 500);
    setTimeout(() => {
      for (let i of smallLinks) {
        i.style.opacity = "1";
        i.style.transition = "all 0.5s ease-out";
        i.style.transform = "translateY(0)";
      }
    }, 1000);
    setTimeout(() => {
      largeLink1.style.opacity = 1;
      largeLink2.style.opacity = 1;
      largeLink3.style.opacity = 1;
      largeLink4.style.opacity = 1;
      largeLink5.style.opacity = 1;
      largeLink6.style.opacity = 1;

      var textWrapper = document.querySelector(
        ".largeLinkContainer1 .largeLink1"
      );
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<a class='letter'>$&</a>"
      );

      var textWrapper = document.querySelector(
        ".largeLinkContainer2 .largeLink2"
      );
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<a class='letter'>$&</a>"
      );

      var textWrapper = document.querySelector(
        ".largeLinkContainer3 .largeLink3"
      );
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<a class='letter'>$&</a>"
      );

      var textWrapper = document.querySelector(
        ".largeLinkContainer4 .largeLink4"
      );
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<a class='letter'>$&</a>"
      );

      var textWrapper = document.querySelector(
        ".largeLinkContainer5 .largeLink5"
      );
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<a class='letter'>$&</a>"
      );

      var textWrapper = document.querySelector(
        ".largeLinkContainer6 .largeLink6"
      );
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<a class='letter'>$&</a>"
      );

      for (let i = 0; i < 6; i++) {
        anime
          .timeline({ loop: false })
          .add({
            targets: ".largeLinkContainer" + (i + 1).toString() + " .letter",
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i,
          })
          .add({
            targets: ".largeLinkContainer" + (i + 1).toString(),
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
          });
      }
    }, 1000);
    hamLine[1].style.left = "0";
    hamLine[1].style.marginTop = "-7px";
    hamLine[0].style.transform = "rotate(45deg)";
    hamLine[1].style.transform = "rotate(-45deg)";
    isOpened = true;
  }
};
