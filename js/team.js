const elements = document.getElementsByClassName("departmentElement");
const teamContainer = document.querySelector(".teamContainer");

function allImagesLoaded() {
  document.getElementsByClassName("loader-video")[0].style.opacity = "0";

  setTimeout(() => {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByClassName("wrapper")[0].style.opacity = "1";
  }, 500);
}
document.getElementsByClassName("loader-video")[0].playbackRate = 1.3;

var ids = [1, 2, 3, 4, 5];
const developers = ids.map(() => {
  return [
    {
      year: 2017,
      members: [],
    },

    {
      year: 2018,
      members: [],
    },

    {
      year: 2019,
      members: [],
    },
    {
      year: 2020,
      members: [],
    },
    {
      year: 2021,
      members: [],
    },
    {
      year: 2022,
      members: [],
    },
  ];
});

const social_links = {
  insta: "./assets/icons/instagram-sketched.png",
  github: "./assets/icons/github.png",
  twitter: "./assets/icons/twitter.png",
  behance: "./assets/icons/behance.png",
  dribble: "./assets/icons/dribble.svg",
  linkedin: "./assets/icons/linkedin.png",
};

const scrollFullPage = () => {
  const back = document.querySelector(".background");
  window.scrollTo(0, back.offsetHeight);
};

const updateTeam = async (num) => {
  // let loader = `<div class="loader"> <img src="./assets/img/loader.gif" class="loader-video" /></div>`;
  // document.getElementsByClassName("teamContainer")[0].innerHTML = loader;
  let loader = document.getElementsByClassName("loader")[0];
  document.getElementsByClassName("loader-video")[0].style.opacity = "1";
  loader.style.display = "";
  document.getElementsByClassName("wrapper")[0].style.opacity = "0";

  for (let j = 0; j < 5; j++) {
    let team;
    j == 0
      ? (team = "Frontend")
      : j == 1
      ? (team = "AppDev")
      : j == 2
      ? (team = "Video")
      : j == 3
      ? (team = "Design")
      : (team = "Backend");
    for (let i = 0; i < 5; i++) {
      const mem = await fetch(
        `https://bits-dvm.org/portfolio/members/20${i + 17}/${team}`
      );
      const data = await mem.json();
      developers[j][i].members = data;
    }
  }
  teamContainer.innerHTML = "";

  developers[num].map(({ year, members }) => {
    let teamName = document.createElement("h2");
    let createDiv = document.createElement("div");

    createDiv.innerHTML = "";
    teamName.className = "teamName";
    teamName.innerHTML = year;
    if (members.length != 0) {
      teamContainer.appendChild(teamName);
      teamContainer.appendChild(createDiv);
      createDiv.className = "teamMembers";

      members.map(
        ({
          name,
          designation,
          PhotoLink,
          TwitterLink,
          GithubLink,
          DribbleLink,
          InstagramLink,
          BehanceLink,
          LinkedInLink,
        }) => {
          let member = document.createElement("div");
          member.className = "member";
          member.innerHTML = `
          <div class="memberTopLine"></div>
          <div class="memberImage">
                        <img src="${PhotoLink}">
                    </div>
                    <div class="memberName hide">
                        ${name}
                    </div>
                    <div class="designation hide">
                        ${designation || "Team Member"} 
                    </div>
                    <div class="links hide">
                       ${get_links_url([
                         TwitterLink,
                         GithubLink,
                         DribbleLink,
                         InstagramLink,
                         BehanceLink,
                         LinkedInLink,
                       ])}
                    </div>`;

          createDiv.appendChild(member);
        }
      );
      teamContainer.appendChild(createDiv);
      document.getElementsByClassName("loader-video")[0].style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
        document.getElementsByClassName("wrapper")[0].style.opacity = "1";
      }, 500);
    }
  });
};

const teamChange = (e) => {
  let num = 0;

  for (let i = 0; i < elements.length; i++) {
    elements[i].className = "departmentElement";
    if (elements[i] === e) {
      num = i;
    }
  }
  e.classList.add("selected");

  updateTeam(num);
};

function get_links_url(links_array) {
  let final_string = "";
  for (let links in links_array) {
    if (links_array[links] != null) {
      let site;
      links == 0
        ? (site = social_links.twitter)
        : links == 1
        ? (site = social_links.github)
        : links == 2
        ? (site = social_links.dribble)
        : links == 3
        ? (site = social_links.insta)
        : links == 4
        ? (site = social_links.behance)
        : (site = social_links.linkedin);
      let temp = `
      <a href="${links_array[links]}" target='_blank'>
          <img src="${site}">
      </a>
    `;
      final_string += temp;
    }
  }
  return final_string;
}

// Select option

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
        create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    if (
      selElmnt.options[selElmnt.selectedIndex].innerHTML ==
      selElmnt.options[j].innerHTML
    ) {
      c.setAttribute("class", "same-as-selected");
    }
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
            and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (var p = 1; p < sl; p++) {
        if (s.options[p].innerHTML == this.innerHTML) {
          s.selectedIndex = p;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");

          updateTeam(p - 1);

          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
    except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
