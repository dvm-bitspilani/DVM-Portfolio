// about page
let about = document.getElementById("about");
window.addEventListener("scroll", () => {
  if (about.getBoundingClientRect().top === 0) {
    aboutAimations();
  }
});

aboutAimations = () => {
  var textWrapper = document.querySelector(".ml6 .letters");

  setTimeout(() => {
    textWrapper.style.opacity = "1";
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    let a = document.querySelectorAll(".ml6 .letter");
    console.log(a);
    a.forEach((letter) => {
      letter.style.opacity = "1";
    });

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml6 .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: ".ml6",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, 200);
  setTimeout(() => {
    let data1 = document.getElementsByClassName("about-info-1")[0];
    data1.style.animation = "slideup 1s 0.7";
    setTimeout(() => {
      data1.style.opacity = "1";
    }, 700);

    setTimeout(() => {
      let data2 = document.getElementsByClassName("about-info-2")[0];
      data2.style.animation = "slideup 1s 0.7";
      setTimeout(() => {
        data2.style.opacity = "1";
      }, 700);

      setTimeout(() => {
        let box = document.getElementsByClassName("about-picture")[0];
        box.classList.add("enterFromRight");
        let icons = document.getElementsByClassName("about-icons")[0];
        icons.classList.add("enterFromLeft");
      }, 700);
    }, 500);
  }, 1000);
};

// projects page 1

let projects1 = document.getElementById("projects_oasis");
window.addEventListener("scroll", () => {
  console.log(projects1.getBoundingClientRect().top);
  if (projects1.getBoundingClientRect().top === 0) {
    projects1Aimations();
  }
});

projects1Aimations = () => {
  let infoHead = document.getElementsByClassName("infoHead1");
  for (let i of infoHead) {
    i.style.animation = "slideup 1s 0.7";
  }
  setTimeout(() => {
    for (let i of infoHead) {
      i.style.opacity = "1";
    }
  }, 500);

  setTimeout(() => {
    let mobile1 = document.getElementsByClassName("mobile1")[0];
    mobile1.style.animation = "expandLeftRotate 1s 0.7";

    let mobile2 = document.getElementsByClassName("mobile2")[0];
    mobile2.style.animation = "expandRightRotate 1s 0.7";

    let projectLink = document.getElementsByClassName("project1");
    for (let i of projectLink) {
      i.style.animation = "slideleft 1s 0.7";
    }

    setTimeout(() => {
      for (let i of projectLink) {
        i.style.opacity = "1";
      }
      mobile1.style.opacity = "1";
      mobile2.style.opacity = "1";
    }, 500);
  }, 1000);
};


// projects page 2

let projects2 = document.getElementById("projects_apogee");
window.addEventListener("scroll", () => {
  console.log(projects2.getBoundingClientRect().top);
  if (projects2.getBoundingClientRect().top === 0) {
    projects2Aimations();
  }
});

projects2Aimations = () => {
  let infoHead = document.getElementsByClassName("infoHead2");
  for (let i of infoHead) {
    i.style.animation = "slideup 1s 0.7";
  }
  setTimeout(() => {
    for (let i of infoHead) {
      i.style.opacity = "1";
    }
  }, 500);

  setTimeout(() => {
    let mobile3 = document.getElementsByClassName("mobile3")[0];
    mobile3.style.animation = "expandLeftRotate 1s 0.7";

    let mobile4 = document.getElementsByClassName("mobile4")[0];
    mobile4.style.animation = "expandRightRotate 1s 0.7";

    let projectLink = document.getElementsByClassName("project2");
    for (let i of projectLink) {
      i.style.animation = "slideleft 1s 0.7";
    }

    setTimeout(() => {
      for (let i of projectLink) {
        i.style.opacity = "1";
      }
      mobile3.style.opacity = "1";
      mobile4.style.opacity = "1";
    }, 500);
  }, 1000);
};