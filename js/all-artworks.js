fetch('https://bits-apogee.org/portfolio/artworks/')
  .then(response => response.json())
  .then(data => populate(data));

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
            <div class="artworkSomething">something over here</div>
            <div class="artworkName">${main_arr[2 * i].title}</div>
            <div class="artistName">By ${main_arr[2 * i].artistName}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].BehanceLink}><img src="./assets/icons/behance.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].DribbleLink}><img src="./assets/icons/dribble.svg" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i)].InstagramLink}><img src="./assets/icons/instagram-sketched@2x.png" /></a>
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
            <div class="artworkSomething">something over here</div>
            <div class="artworkName">${main_arr[(2 * i + 1)].title}</div>
            <div class="artistName">By ${main_arr[(2 * i + 1)].artistName}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].BehanceLink}><img src="./assets/icons/behance.png" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].DribbleLink}><img src="./assets/icons/dribble.svg" /></a>
              </div>
              <div class="artistLinks">
                <a href=${main_arr[(2 * i + 1)].InstagramLink}><img src="./assets/icons/instagram-sketched@2x.png" /></a>
              </div>
            </div>
    `;
    col2.appendChild(artworkContainer2);
  }
}