let main_arr = [
  {
    name: "Blog2",
    image_link: "content-blogs/blog2/joshua-reddekopp-GkFQEOubrCo-unsplash.png",
    url: "",
  },
  {
    name: "Blog2",
    image_link: "content-blogs/blog3/kevin-ku-w7ZyuGYNpRQ-unsplash.png",
    url: "",
  },
  {
    name: "Blog2",
    image_link: "content-blogs/blog4/markus-spiske-hvSr_CVecVI-unsplash.png",
    url: "",
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
        <div class="recent-blogs-post">
              <div class="other-post-image" onclick='location.href='${main_arr[i].url}'>
                <img
                  src="${main_arr[i].image_link}"
                />
              </div>
              <div class="other-post-heading" onclick='location.href='${main_arr[i].url}'>${main_arr[i].name}</div>
            </div>
    `;
}
recent_blogs.appendChild(main_div);
