let main_arr = [
  {
    name: "Blog2",
    image_link: "content-blogs/blog2/joshua-reddekopp-GkFQEOubrCo-unsplash.png",
    url: "",
    author: "Name Surname",
    date: "4th May 2021",
  },
  {
    name: "Blog2",
    image_link: "content-blogs/blog3/kevin-ku-w7ZyuGYNpRQ-unsplash.png",
    url: "",
    author: "Name Surname",
    date: "4th May 2021",
  },
  {
    name: "Blog2",
    image_link: "content-blogs/blog4/markus-spiske-hvSr_CVecVI-unsplash.png",
    url: "",
    author: "Name Surname",
    date: "4th May 2021",
  },
];

let recent_blogs = document.getElementsByClassName("recent-blogs")[0];
recent_blogs.innerHTML = `<div class="recent-blog-heading">
            <div class="">Recent Blogs</div>
            <div class="underline"></div>
          </div>`;

let main_div = document.createElement("div");
for (var i = 0; i < main_arr.length; i++) {
  main_div.innerHTML += `
        <div class="recent-blogs-post" onclick='location.href='${main_arr[i].url}'>
              <div class="other-post-image" >
                <img
                  src="${main_arr[i].image_link}"
                />
              </div>
              <div class="other-post-heading" >${main_arr[i].name}</div>
              <div class="other-post-details">
                  <div class="other-post-author">${main_arr[i].author}</div>
                  <div class="dot"></div>
                  <div class="other-post-date">${main_arr[i].date}</div>
              </div>
            </div>
    `;
}
recent_blogs.appendChild(main_div);
