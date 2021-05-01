const elements = document.getElementsByClassName("departmentElement");
const teamContainer = document.querySelector(".teamContainer");

const developers = [
  [
    {
      year: 2018,
      members: [
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
      ],
    },
    {
      year: 2019,
      members: [
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
        {
          name: "Denis Lomov",
          designation: "Frontend Developer",
          image: "assets/members/placeholder.jfif",
          links: {
            insta: "",
            facebook: "",
            twitter: "",
          },
        },
      ],
    },
  ],
];

const updateTeam = (num) => {
  teamContainer.innerHTML = "";

  developers[num].map(({ year, members }) => {
    let teamName = document.createElement("h2");
    let createDiv = document.createElement("div");
    createDiv.innerHTML = "";
    teamName.className = "teamName";
    teamName.innerHTML = year;
    teamContainer.appendChild(teamName);
    teamContainer.appendChild(createDiv);
    createDiv.className = "teamMembers";
    members.map(({ name, designation, image, links }) => {
      let member = document.createElement("div");
      member.className = "member";
      member.innerHTML = `<div class="memberImage">
                        <img src="${image}">
                    </div>
                    <div class="memberName hide">
                        ${name}
                    </div>
                    <div class="designation hide">
                        ${designation}
                    </div>
                    <div class="links hide">
                        <a href="${links.insta}">
                            <img src="./assets/img/instagram-sketched.png">
                        </a>
                        <a href="${links.twitter}">
                            <img src="./assets/img/twitter.png">
                        </a>
                        <a href="${links.facebook}">
                            <img src="./assets/img/facebook (2).png">
                        </a>
                    </div>`;

      createDiv.appendChild(member);
    });
    teamContainer.appendChild(createDiv);
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
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
            and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          updateTeam(i);

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
