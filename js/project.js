const scrollFullPage = () => {
  const back = document.querySelector(".background");

  window.scrollTo(0, back.offsetHeight);
};

const params = new URLSearchParams(window.location.search);
let id;
for (const param of params) {
  id = parseInt(param[1]) - 1;
  console.log(param[1]);
}

const info = information[id];
