let main_arr = [{
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        artist: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        artist: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        artist: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        artist: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        artist: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
      name: "Noir Illustration",
      image_link: "./assets/artwork/yash/noirIllustration.webp",
      artist: "Yash Bhagat",
      social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
  },
  {
      name: "Noir Illustration",
      image_link: "./assets/artwork/yash/noirIllustration.webp",
      artist: "Yash Bhagat",
      social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
  },
  {
      name: "Noir Illustration",
      image_link: "./assets/artwork/yash/noirIllustration.webp",
      artist: "Yash Bhagat",
      social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
  },
  {
      name: "Noir Illustration",
      image_link: "./assets/artwork/yash/noirIllustration.webp",
      artist: "Yash Bhagat",
      social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
  },
  {
      name: "Noir Illustration",
      image_link: "./assets/artwork/yash/noirIllustration.webp",
      artist: "Yash Bhagat",
      social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
  }
];

let col1 = document.getElementsByClassName("column")[0];
let col2 = document.getElementsByClassName("column")[1];
for (var i = 0; i < main_arr.length/2; i++) {
    let artworkContainer1 = document.createElement("div");
    artworkContainer1.classList.add("artworkContainer");
    artworkContainer1.innerHTML = `
        <div class="artworkImage">
              <img src="${main_arr[2*i].image_link}" alt="" />
            </div>
            <div class="artworkSomething">something over here</div>
            <div class="artworkName">${main_arr[2*i].name}</div>
            <div class="artistName">By ${main_arr[2*i].artist}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <img src="./assets/icons/behance.png" />
              </div>
              <div class="artistLinks">
                <img src="./assets/icons/dribble.svg" />
              </div>
              <div class="artistLinks">
                <img src="./assets/icons/instagram-sketched@2x.png" />
              </div>
            </div>
    `;
    col1.appendChild(artworkContainer1);

    let artworkContainer2 = document.createElement("div");
    artworkContainer2.classList.add("artworkContainer");
    artworkContainer2.innerHTML = `
        <div class="artworkImage">
              <img src="${main_arr[(2*i+1)].image_link}" alt="" />
            </div>
            <div class="artworkSomething">something over here</div>
            <div class="artworkName">${main_arr[(2*i+1)].name}</div>
            <div class="artistName">By ${main_arr[(2*i+1)].artist}</div>
            <div class="artistLinksContainer">
              <div class="artistLinks">
                <img src="./assets/icons/behance.png" />
              </div>
              <div class="artistLinks">
                <img src="./assets/icons/dribble.svg" />
              </div>
              <div class="artistLinks">
                <img src="./assets/icons/instagram-sketched@2x.png" />
              </div>
            </div>
    `;
    col2.appendChild(artworkContainer2);
}