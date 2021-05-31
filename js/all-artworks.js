let left_arr = [{
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    }
];
let right_arr = [{
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    },
    {
        name: "Noir Illustration",
        image_link: "./assets/artwork/yash/noirIllustration.webp",
        author: "Yash Bhagat",
        social_links: { behance: "", dribble: "https://dribbble.com/yashbhagat", insta: "https://www.instagram.com/yashb1202/" }
    }
];
let col1 = document.getElementsByClassName("column")[0];
for (var i = 0; i < left_arr.length; i++) {
    let artworkContainer = document.createElement("div");
    artworkContainer.classList.add("artworkContainer");
    artworkContainer.innerHTML = `
        <div class="artworkImage">
              <img src="${left_arr[i].image_link}" alt="" />
            </div>
            <div class="artworkSomething">something over here</div>
            <div class="artworkName">${left_arr[i].name}</div>
            <div class="artistName">By ${left_arr[i].author}</div>
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
    col1.appendChild(artworkContainer);
}
let col2 = document.getElementsByClassName("column")[1];
for (var i = 0; i < left_arr.length; i++) {
    let artworkContainer = document.createElement("div");
    artworkContainer.classList.add("artworkContainer");
    artworkContainer.innerHTML = `
        <div class="artworkImage">
              <img src="${right_arr[i].image_link}" alt="" />
            </div>
            <div class="artworkSomething">something over here</div>
            <div class="artworkName">${right_arr[i].name}</div>
            <div class="artistName">By ${right_arr[i].author}</div>
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
    col2.appendChild(artworkContainer);
}