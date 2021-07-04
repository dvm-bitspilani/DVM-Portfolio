fetch('https://bits-apogee.org/portfolio/artworks/')
  .then(response => response.json())
  .then(data => populate(data));
console.log('kaise')
let col1 = document.getElementsByClassName("column")[0];
let col2 = document.getElementsByClassName("column")[1];

populate = main_arr => {
  console.log(main_arr);
  for (var i = 0; i < main_arr.length / 2; i++) {
    let artworkContainer1 = document.createElement("div");
    artworkContainer1.classList.add("artworkContainer");
    artworkContainer1.innerHTML = `
        <div class="artworkImage">
              <img src="${main_arr[2 * i].blogImageLink}" alt="" />
            </div>
            <div class="artworkSomething">${main_arr[2 * i].about || ""}</div>
            <div class="artworkName">${main_arr[2 * i].title}</div>
            <div class="artistName">By ${main_arr[2 * i].artistName}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].BehanceLink} class=${main_arr[(2 * i)].BehanceLink ? "" : "disabled"}><img src="./assets/icons/behance.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].DribbleLink} class=${main_arr[(2 * i)].DribbleLink ? "" : "disabled"}><img src="./assets/icons/dribble.svg" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].InstagramLink} class=${main_arr[(2 * i)].InstagramLink ? "" : "disabled"}><img src="./assets/icons/instagram-sketched@2x.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].LinkedInLink} class=${main_arr[(2 * i)].LinkedInLink ? "" : "disabled"}><img src="./assets/icons/linkedin.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].GithubLink} class=${main_arr[(2 * i)].GithubLink ? "" : "disabled"}><img src="./assets/icons/github.png" /></a>
              </div>
            </div>
    `;
    col1.appendChild(artworkContainer1);

    let artworkContainer2 = document.createElement("div");
    artworkContainer2.classList.add("artworkContainer");
    artworkContainer2.innerHTML = `
        <div class="artworkImage">
              <img src="${main_arr[(2 * i + 1)].blogImageLink}" alt="" />
            </div>
            <div class="artworkSomething">${main_arr[2 * i + 1].about || ""}</div>
            <div class="artworkName">${main_arr[(2 * i + 1)].title}</div>
            <div class="artistName">By ${main_arr[(2 * i + 1)].artistName}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].BehanceLink} class=${main_arr[(2 * i + 1)].BehanceLink ? "" : "disabled"}><img src="./assets/icons/behance.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].DribbleLink} class=${main_arr[(2 * i + 1)].DribbleLink ? "" : "disabled"}><img src="./assets/icons/dribble.svg" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].InstagramLink} class=${main_arr[(2 * i + 1)].InstagramLink ? "" : "disabled"}><img src="./assets/icons/instagram-sketched@2x.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].LinkedInLink} class=${main_arr[(2 * i + 1)].LinkedInLink ? "" : "disabled"}><img src="./assets/icons/linkedin.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].GithubLink} class=${main_arr[(2 * i + 1)].GithubLink ? "" : "disabled"}><img src="./assets/icons/github.png" /></a>
            </div>
    `;
    col2.appendChild(artworkContainer2);
  }
}