// // Teams - 1: Android, 2: Backend, 3: Design, 4: Frontend, 5: Video
// // Format of date - Year - Month (Name)
// // Text1 - The text which is in bold letters
// // Change the page_link if you're making a different page
// // Long photos - Minimum 2
// // Photos - can be same

// // Basically there are 3 types of photos of a project- The photo of the hero section (main), Long photos, Photos of different pages in one

let information = [
  {
    name: "Project 1",
    teams: [1, 2, 5],
    main_photo_link: "./content-projects/project1/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - June",
    long_photos_link: [
      "./content-projects/project1/long1.jpg",
      "./content-projects/project1/long2.jpg",
      "./content-projects/project1/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project1/photo1.jpg",
      "./content-projects/project1/photo2.jpg",
    ],
    page_link: "/project.html?1",
  },
  {
    name: "Project 2",
    teams: [1, 3, 5],
    main_photo_link: "./content-projects/project2/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - July",
    long_photos_link: [
      "./content-projects/project2/long1.jpg",
      "./content-projects/project2/long2.jpg",
      "./content-projects/project2/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project2/photo1.jpg",
      "./content-projects/project2/photo2.jpg",
    ],
    page_link: "/project.html?2",
  },
  {
    name: "Project 3",
    teams: [3, 4, 5],
    main_photo_link: "./content-projects/project3/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2021 - August",
    long_photos_link: [
      "./content-projects/project3/long1.jpg",
      "./content-projects/project3/long2.jpg",
      "./content-projects/project3/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project3/photo1.jpg",
      "./content-projects/project3/photo2.jpg",
    ],
    page_link: "/project.html?3",
  },
  {
    name: "Project 4",
    teams: [1, 2, 4],
    main_photo_link: "./content-projects/project4/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - June",
    long_photos_link: [
      "./content-projects/project4/long1.jpg",
      "./content-projects/project4/long2.jpg",
      "./content-projects/project4/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project4/photo1.jpg",
      "./content-projects/project4/photo2.jpg",
    ],
    page_link: "/project.html?4",
  },
  {
    name: "Project 5",
    teams: [4, 2, 3],
    main_photo_link: "./content-projects/project5/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - June",
    long_photos_link: [
      "./content-projects/project5/long1.jpg",
      "./content-projects/project5/long2.jpg",
      "./content-projects/project5/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project5/photo1.jpg",
      "./content-projects/project5/photo2.jpg",
    ],
    page_link: "/project.html?5",
  },
  {
    name: "Project 6",
    teams: [3, 1],
    main_photo_link: "./content-projects/project6/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - June",
    long_photos_link: [
      "./content-projects/project6/long1.jpg",
      "./content-projects/project6/long2.jpg",
      "./content-projects/project6/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project6/photo1.jpg",
      "./content-projects/project6/photo2.jpg",
    ],
    page_link: "/project.html?6",
  },
  {
    name: "Project 7",
    teams: [4, 5],
    main_photo_link: "./content-projects/project7/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - June",
    long_photos_link: [
      "./content-projects/project7/long1.jpg",
      "./content-projects/project7/long2.jpg",
      "./content-projects/project7/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project7/photo1.jpg",
      "./content-projects/project7/photo2.jpg",
    ],
    page_link: "/project.html?7",
  },
  {
    name: "Project 8",
    teams: [1, 2, 3, 4, 5],
    main_photo_link: "./content-projects/project8/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - June",
    long_photos_link: [
      "./content-projects/project8/long1.jpg",
      "./content-projects/project8/long2.jpg",
      "./content-projects/project8/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project8/photo1.jpg",
      "./content-projects/project8/photo2.jpg",
    ],
    page_link: "/project.html?8",
  },
  {
    name: "Project 9",
    teams: [2, 3, 4],
    main_photo_link: "./content-projects/project9/main.png",
    link: "https://dvm-bitspilani.github.io/DVM-Portfolio/",
    text1:
      "About APOGEE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    text2:
      "About Website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit mi neque, ultricies tincidunt leo vulputate ac. Integer mattis, ligula quis fringilla egestas, quam diam viverra felis, sit amet accumsan quam felis at lectus. Vivamus lectus nulla, euismod et dolor id, consectetur fringilla felis.",
    date: "2020 - June",
    long_photos_link: [
      "./content-projects/project9/long1.jpg",
      "./content-projects/project9/long2.jpg",
      "./content-projects/project9/long3.jpg",
    ],
    photos_link: [
      "./content-projects/project9/photo1.jpg",
      "./content-projects/project9/photo2.jpg",
    ],
    page_link: "/project.html?9",
  },
];

export default information;
