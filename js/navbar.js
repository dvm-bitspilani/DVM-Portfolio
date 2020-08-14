let isOpened = false;
const hamLine = document.getElementsByClassName("ham-line");

const openCloseNav = () => {
  let navContainer = document.getElementById("navContainer");
  let smallLinksHeader = document.getElementsByClassName("smallLinksHeader")[0];
  let smallLinks = document.getElementsByClassName("smallLinks");
  if (isOpened) {
    navContainer.style.display = "flex";
    navContainer.style.transition = "all 0.5s ease-out";
    navContainer.style.transform = "translateX(100vw)";
    setTimeout(() => {
      smallLinksHeader.style.opacity = "0";
      smallLinksHeader.style.transform = "translateY(20px)";
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
    hamLine[1].style.left = "0";
    hamLine[1].style.marginTop = "-7px";
    hamLine[0].style.transform = "rotate(45deg)";
    hamLine[1].style.transform = "rotate(-45deg)";
    isOpened = true;
  }
};
