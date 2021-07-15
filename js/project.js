function nrmTeams(teams){
  const arr = [];
  if (teams.includes("App")) arr.push(1)
  if (teams.includes("Back")) arr.push(2)
  if (teams.includes("Design")) arr.push(3)
  if (teams.includes("Front")) arr.push(4)
  if (teams.includes("Video")) arr.push(5)
  return arr;
}


// NORMALISATION FUNCTION ON API RESPONSE
function normalise(information){
  for (var x = 0; x < information.length; x++){

    // convert front/back/design
    // Teams - 1: App, 2: Backend, 3: Design, 4: Frontend, 5: Video
    information[x].teamsInvolved = nrmTeams(information[x].teamsInvolved)

    // fix images relative path
    information[x].heroSectionImageLink = "." + information[x].heroSectionImageLink

    information[x].long_images_link = (information[x].long_images_link).split(", ")
    for (var y = 0; y < information[x].long_images_link.length; y++) {
      information[x].long_images_link[y] = "." + information[x].long_images_link[y]
    }

    information[x].mockups_link = (information[x].mockups_link).split(", ")
    for (var y = 0; y < information[x].mockups_link.length; y++) {
      information[x].mockups_link[y] = "." + information[x].mockups_link[y]
    }

    // fix page link
    information[x].page_link = (information[x].page_link.substring("http://".length))
    information[x].page_link = (information[x].page_link.substring(0, (information[x].page_link.length - ".com".length)))
    information[x].page_link = "project.html?id=" + information[x].page_link
  }

  // embed youtube urls for video team
  for (var x = 0; x < information.length; x++){
    const project = information[x]
    if(information[x].teamsInvolved.includes(5)){
      information[x].website_link = (information[x].website_link.substring("http://".length))
      information[x].website_link = (information[x].website_link.substring(0, (information[x].website_link.length - ".com".length)))
      information[x].page_link = information[x].website_link
    }
  }
  return information;
}




  
const teams = ["AppDev", "Backend", "Design", "Frontend", "Video"];


let wrapper_height;
document.getElementsByClassName("loader-video")[0].playbackRate = 1.3;

// document.getElementsByClassName("loader-video")[0].style.opacity = "0";

//   setTimeout(() => {
//     document.getElementsByClassName("loader")[0].style.display = "none";
//     document.getElementsByClassName("wrapper")[0].style.opacity = "1";
//   }, 500);

//   wrapper_height = document
//     .getElementsByClassName("wrapper")[0]
//     .getBoundingClientRect().height; 

function allImagesLoaded() {
  console.log("ALL IMAGES LOADED");
  document.getElementsByClassName("loader-video")[0].style.opacity = "0";

  setTimeout(() => {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByClassName("wrapper")[0].style.opacity = "1";
  }, 500);

  wrapper_height = document
    .getElementsByClassName("wrapper")[0]
    .getBoundingClientRect().height;
  //console.log(wrapper_height);
}

document.getElementsByClassName("navbar")[0].style.backgroundColor =
  "transparent";
document.getElementsByClassName("navbar")[0].style.backdropFilter = "blur(0px)";
let back = document.getElementsByClassName("background")[0];

const scrollFullPage = () => {
  window.scrollTo(0, back.offsetHeight);
};



const params = new URLSearchParams(window.location.search);
let id;
for (const param of params) {
  id = parseInt(param[1] - 1);
  //console.log(param[1]);
}


let info = [{
  "name": "Armageddon 20 Website",
  "teamsInvolved": "Front, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/armageddon-hero-min.png",
  "website_link": "https://bits-apogee.org/",
  "date": "March 2020",
  "text_1": "APOGEE(A Professions Oriented Gathering over Educational Experiences)- is BITS Pilani's annual technical extravaganza. From presenting papers and projects at the oldest-of-its-kind events in the country, developing amazing solutions to real-life cases and problems, exhibitions of the best contraptions that man has made, guest lectures that tell stories never heard before, to the college’s own literature festival, APOGEE challenges the intellect of the participants and piques the minds of the audience.",
  "text_2": "Armageddon is the gaming event in APOGEE. This event brings together many gaming enthusiasts from colleges all over the country. It attracts a massive participation pool of around 1.5k-2k gamers every year. Games hosted during Armageddon are CS: GO, FIFA, Rainbow 6 Siege, PUBG Mobile, and Mini Militia.",
  "long_images_link": "./assets/img/project-imgs/long/armageddon-min.png, ./assets/img/project-imgs/mobile-long/armageddon-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/armageddon-mockup-min.png",
  "page_link": "http://2.com"
}, {
  "name": "BOSM 19 Website",
  "teamsInvolved": "Front, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/bosm19-hero-min.png",
  "website_link": "http://bits-bosm.org/",
  "date": "Sept 2019",
  "text_1": "The BITS Open Sports Meet (BOSM) is the annual sports festival of BITS Pilani, Pilani Campus. This much awaited sporting extravaganza is a platform for college teams to exhibit their exceptional sporting talents and compete for superiority!\r\nSince its first edition way back in 1986, it has grown to be one of the largest and most competitive college sports fests in the country. \"",
  "text_2": "This was the Official Website for BOSM'19. It was aimed to ease the Registration process for the people participating in the fest. It has many other sections like the details of all the sports events, gallery, and a note from the Director of BITS Pilani.",
  "long_images_link": "./assets/img/project-imgs/long/bosm19-min.png, ./assets/img/project-imgs/mobile-long/bosm19-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/bosm19-mockup-min.png",
  "page_link": "http://3.com"
}, {
  "name": "Rocktaves Website",
  "teamsInvolved": "Front, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/rocktaves-hero-min.png",
  "website_link": "https://bits-oasis.org/rocktaves/",
  "date": "Oct 2019",
  "text_1": "Oasis—the cultural fest of BITS Pilani—is nothing but 96 hours of unadulterated thrills comprising music, dance, drama, art, quizzes, fashion, and humour. With a footfall of around 5000+ every year, it is the second-largest cultural festival of India.",
  "text_2": "Rocktaves is India's one of the oldest band competitions, which has acted as a springboard for India's premier rock groups of the stature of Parikrama, Indian Ocean, Superfuzz, PRESTORIKA, Them Clones, and Euphoria, who have taken part in the competition at different points in its history.",
  "long_images_link": "./assets/img/project-imgs/long/rocktaves-min.png, ./assets/img/project-imgs/mobile-long/rocktave-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/rocktave-mockup-min.png",
  "page_link": "http://6.com"
}, {
  "name": "Oasis 20 Website",
  "teamsInvolved": "Front, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/oasis-hero-min.png",
  "website_link": "http://bits-oasis.org/",
  "date": "Oct 2020",
  "text_1": "Oasis—the cultural fest of BITS Pilani—is nothing but 96 hours of unadulterated thrills comprising music, dance, drama, art, quizzes, fashion, and humour. With a footfall of around 5000+ every year, it is the second-largest cultural festival of India.",
  "text_2": "This was the Official Website for Oasis'20. It eased the Registrations for all the events, some of which were paid. It shows the details and rules for all the events along with their timelines. It had many miscellaneous sections, too, like Videos, Sponsors' Page, Gallery, among others. Users could also Login through the website itself.",
  "long_images_link": "./assets/img/project-imgs/long/oasis-min.png, ./assets/img/project-imgs/mobile-long/oasis-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/oasis-mockup-min.png",
  "page_link": "http://4.com"
}, {
  "name": "Armageddon 19 Website",
  "teamsInvolved": "Front, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/armageddon19-hero-min.png",
  "website_link": "http://null.com",
  "date": "March 2019",
  "text_1": "null",
  "text_2": "Armageddon is the gaming event in APOGEE. This event brings together many gaming enthusiasts from colleges all over the country. It attracts a massive participation pool of around 1.5k-2k gamers every year. Games hosted during Armageddon are CS: GO, FIFA, Rainbow 6 Siege, PUBG Mobile, and Mini Militia.",
  "long_images_link": "./assets/img/project-imgs/hero/armageddon19-hero-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/armageddon19-mockup-min.png",
  "page_link": "http://8.com"
}, {
  "name": "Profshows website",
  "teamsInvolved": "Front, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/profshows-hero-min.png",
  "website_link": "https://bits-oasis.org/profshows/",
  "date": "Oct 2019",
  "text_1": "Oasis—the cultural fest of BITS Pilani—is nothing but 96 hours of unadulterated thrills comprising music, dance, drama, art, quizzes, fashion, and humour. With a footfall of around 5000+ every year, it is the second-largest cultural festival of India.",
  "text_2": "ProfShows is the term given to a collection of significant Concerts and Events held during Oasis. In 2019, celebrities like- Nucleya, Biswa Kalyan Rath, Sunidhi Chauhan performed during the fest. Many other famous personalities like Zakir Khan, Abhishek Upmanyu, and Shankar Ehsan Loy have performed during Oasis in past years.",
  "long_images_link": "./assets/img/project-imgs/long/profshows-min.png, ./assets/img/project-imgs/mobile-long/profshows-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/profshows-mockup-min.png",
  "page_link": "http://7.com"
}, {
  "name": "Apogee Innovation Challenge 19",
  "teamsInvolved": "Front, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/aic-hero-min.png",
  "website_link": "http://null.com",
  "date": "March 2019",
  "text_1": "null",
  "text_2": "null",
  "long_images_link": "./assets/img/project-imgs/long/aic-min.png, ./assets/img/project-imgs/mobile-long/aic-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/aic-mockup-min.png",
  "page_link": "http://9.com"
}, {
  "name": "Oasis 19 App",
  "teamsInvolved": "App, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/oasisapp-hero-min.png",
  "website_link": "https://tinyurl.com/oasis19-app",
  "date": "Oct 2019",
  "text_1": "Oasis—the cultural fest of BITS Pilani—is nothing but 96 hours of unadulterated thrills comprising music, dance, drama, art, quizzes, fashion, and humour. With a footfall of around 5000+ every year, it is the second-largest cultural festival of India.",
  "text_2": "This app was aimed to ease participation of students in the fest, comprising of many features such as events tracking, food ordering, QR based sign-ups and many more.",
  "long_images_link": "./assets/img/project-imgs/long/oasisapp-min.png, ./assets/img/project-imgs/mobile-long/oasisapp-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/oasisapp-mockup-min.png",
  "page_link": "http://10.com"
}, {
  "name": "Apogee 21 Website",
  "teamsInvolved": "Front, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/apogee21-hero-min.png",
  "website_link": "http://www.bits-apogee.org/",
  "date": "March 2021",
  "text_1": "APOGEE(A Professions Oriented Gathering over Educational Experiences)- is BITS Pilani's annual technical extravaganza. From presenting papers and projects at the oldest-of-its-kind events in the country, developing amazing solutions to real-life cases and problems, exhibitions of the best contraptions that man has made, guest lectures that tell stories never heard before, to the college’s own literature festival, APOGEE challenges the intellect of the participants and piques the minds of the audience.",
  "text_2": "This was the Official Website of APOGEE'21, based on the theme- \"Digitized Renaissance.\" It eased the Registrations for all the events, some of which were paid. It shows the details and rules for all the events along with their timelines. It had many miscellaneous sections and pages like- Videos, Sponsors' Page, WallMag, among many others. This time there was a Kind Store Page where all the participants could redeem their kind points and get various discount coupons.",
  "long_images_link": "./assets/img/project-imgs/long/apogee21-min.png, ./assets/img/project-imgs/mobile-long/apogee21-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/apogee21-mockup-min.png",
  "page_link": "http://5.com"
}, {
  "name": "BOSM 19 App",
  "teamsInvolved": "App, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/bosmapp-hero-min.png",
  "website_link": "https://tinyurl.com/bosm19-app",
  "date": "Sept 2019",
  "text_1": "The BITS Open Sports Meet (BOSM) is the annual sports festival of BITS Pilani, Pilani Campus. This much-awaited sporting extravaganza is a platform for college teams to exhibit their exceptional sporting talents and compete for superiority!\r\nSince its first edition way back in 1986, it has grown to be one of the largest and most competitive college sports fests in the country. \"",
  "text_2": "\"his app allowed users to keep track of the sports events and competitions and notify accordingly. Users were able to order food and pay using the wallet feature of the app. Users could also play games and quiz.\r\nApart from all these major features, there were many miscellaneous features too.",
  "long_images_link": "./assets/img/project-imgs/long/bosmapp-min.png, ./assets/img/project-imgs/mobile-long/bosmapp-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/bosmapp-mockup-min.png",
  "page_link": "http://11.com"
}, {
  "name": "Apogee '21 Curtain Raiser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "-",
  "website_link": "http://EykvH3KETnc.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://1.com"
}, {
  "name": "Apogee '21 Theme Release",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "-",
  "website_link": "http://z-Pt8nBEa9E.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://2.com"
}, {
  "name": "Apogee '20 Theme Releaser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "Uvo2_vI9Cco",
  "website_link": "http://Uvo2vI9Cco.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://3.com"
}, {
  "name": "Apogee '20 Promo",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "DXPVKwoMB5E",
  "website_link": "http://DXPVKwoMB5E.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://4.com"
}, {
  "name": "Oasis '20 Theme Release",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "C8Mg71oIA2s",
  "website_link": "http://C8Mg71oIA2s.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://5.com"
}, {
  "name": "50 Years of Oasis",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "53_VKUrM5HY",
  "website_link": "http://53VKUrM5HY.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://6.com"
}, {
  "name": "Apogee '19 Theme Releaser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "MqpPYIjDw4I",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://7.com"
}, {
  "name": "Oasis '19 Teaser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "35lWrDmkxko",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://8.com"
}, {
  "name": "Oasis '19 Rocktaves Promo",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "0AlBafi2NiQ",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://8.com"
}, {
  "name": "Oasis '19 Promo",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "ennOr12w52k",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://9.com"
}, {
  "name": "Oasis '19 Nucleya Teaser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "wUyg7-x5jcs",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://10.com"
}, {
  "name": "Oasis '19 Fashp Promo",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "T9KZB_zipmw",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://12.com"
}, {
  "name": "Oasis '19 Curtain Raiser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "wl3XLIzR4QQ",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://13.com"
}, {
  "name": "Oasis '19 Biswa Teaser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "C2B798UjYUM",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://14.com"
}, {
  "name": "Oasis '18 Teaser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "oWDZY6y7ED8",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://15.com"
}, {
  "name": "Oasis '18 Promo",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "b54gY5egToU",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "=",
  "page_link": "http://16.com"
}, {
  "name": "Oasis '18 Curtain Raiser",
  "teamsInvolved": "Video",
  "heroSectionImageLink": "W5RB3xbZiJA",
  "website_link": "http://null.com",
  "date": "-",
  "text_1": "-",
  "text_2": "-",
  "long_images_link": "-",
  "mockups_link": "-",
  "page_link": "http://17.com"
}, {
  "name": "Aarohan 21 Website",
  "teamsInvolved": "Front, Back, Design",
  "heroSectionImageLink": "./assets/img/project-imgs/hero/aarohan-hero-min.png",
  "website_link": "https://dvm-bitspilani.github.io/Aarohan-2020/",
  "date": "March 2021",
  "text_1": "APOGEE(A Professions Oriented Gathering over Educational Experiences)- is BITS Pilani's annual technical extravaganza. From presenting papers and projects at the oldest-of-its-kind events in the country, developing amazing solutions to real-life cases and problems, exhibitions of the best contraptions that man has made, guest lectures that tell stories never heard before, to the college’s own literature festival, APOGEE challenges the intellect of the participants and piques the minds of the audience.",
  "text_2": "Aarohan is a national-level examination crafted and conducted by the students of BITS Pilani. The examination is conducted for the classes of IX, X, XI, and XIIth. It is conducted in two rounds. The winners of round 1 are then invited to BITS Pilani to be a part of round 2. The winners of round 2 win cash prizes and much more. \"",
  "long_images_link": "./assets/img/project-imgs/long/aarohan-min.png, ./assets/img/project-imgs/mobile-long/aarohan-mobile-min.png",
  "mockups_link": "./assets/img/project-imgs/mockup/aarohan-mockup-min.png",
  "page_link": "http://1.com"
}]

function get_info() {
  // bake your code here

  async function getJSONAsync(){

    // The await keyword saves us from having to write a .then() block.
    let json = await fetch('https://bits-apogee.org/portfolio/projects/');
    let resp = await json.json()
  
    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return resp;
  }
  
  getJSONAsync().then( function(result) {
    var information = result;
    
    information = normalise(information)
    console.log(information)

    information = information[id]
    console.log(information)


    // 

  return new Promise((resolve) => {
    info = information;
    console.log(info)


    document.getElementsByClassName(
      "background"
    )[0].style.backgroundImage = `url('${info.heroSectionImageLink}')`;
    if (info.website_link !== "") {
      document.getElementsByClassName("link")[0].innerHTML =
        info.website_link.split("://")[1];
      document
        .getElementsByClassName("show-all")[0]
        .setAttribute("onclick", `window.open('${info.website_link}', '_blank')`);
    } else {
      if (window.innerWidth > 600) {
        document.getElementsByClassName("heading")[0].style.transform =
          "translateY(-8vh)";
      }
      document.getElementsByClassName("show-all")[0].style.display = "none";
    }
    
    document.getElementsByClassName("heading")[0].innerHTML = info.name;
    document.getElementsByClassName("left-project-about")[0].innerHTML = info.text_1;
    document.getElementsByClassName("smaller-text")[0].innerHTML = info.text_2;
    
    for (var p = 0; p < info.teamsInvolved.length; p++) {
      var div = document.createElement("div");
      div.classList.add("team");
      div.innerHTML = teams[info.teamsInvolved[p] - 1];
      document.getElementsByClassName("teams")[0].appendChild(div);
    }
    
    document.getElementsByClassName("show-all")[0].setAttribute("target", "_blank");
    document.getElementsByClassName("date")[0].innerHTML = info.date;
    document.getElementsByClassName("main-photo")[0].src =
      info.heroSectionImageLink;
    document.getElementsByClassName("long-1")[0].src = info.long_images_link[0];
    document.getElementsByClassName("photo")[0].src =  info.mockups_link[0];
    //console.log("hey");
    if (info.mockups_link[1]) {
      document.getElementsByClassName("photo")[1].src = info.mockups_link[1];
    } else {
      document.getElementsByClassName("photo")[1].remove();
    }
    if (info.long_images_link.length > 1) {
      for (var x = 1; x < info.long_images_link.length; x++) {
        document.getElementsByClassName(
          `long-photos-container`
        )[0].innerHTML += `<div>
                <img class="long-${x + 1}" src="${info.long_images_link[x]}" />
              </div>`;
      }
    } else {
      document.getElementsByClassName("long-photos-container")[0].remove();
    }
    
   
    //console.log(wrapper_height - back.offsetHeight);
    
  });

});
}


async function main() {
  const main_r = await get_info();
}

main();


let scroll_indicator_height =
document.getElementsByClassName("scroll-indicator")[0].offsetHeight;

let white_line = document.getElementsByClassName("white-line")[0];
let grey_line = document.getElementsByClassName("grey-line")[0];


window.onscroll = () => {
  document.getElementsByClassName("top-arrow")[0].style.display =
    window.pageYOffset > 100 ? "block" : "none";

  if (window.pageYOffset > 50) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
    document.getElementsByClassName("navbar")[0].style.backdropFilter =
      "blur(10px)";
  }
  if (wrapper_height == undefined || scroll_indicator_height == undefined) {
    //console.log("no wrapper");
    return;
  }

  let percentage = window.pageYOffset / (wrapper_height - back.offsetHeight);
  if (percentage > 1) {
    white_line.style.height = `${scroll_indicator_height}px`;
    grey_line.style.height = 0;
  } else {
    white_line.style.height = `${percentage * scroll_indicator_height}px`;
    grey_line.style.height = `${(1 - percentage) * scroll_indicator_height}px`;
  }
};


// document.getElementsByClassName(
//   "background"
// )[0].style.backgroundImage = `url('${info.heroSectionImageLink}')`;
// if (info.website_link !== "") {
//   document.getElementsByClassName("link")[0].innerHTML =
//     info.website_link.split("://")[1];
//   document
//     .getElementsByClassName("show-all")[0]
//     .setAttribute("onclick", `window.open('${info.website_link}', '_blank')`);
// } else {
//   if (window.innerWidth > 600) {
//     document.getElementsByClassName("heading")[0].style.transform =
//       "translateY(-8vh)";
//   }
//   document.getElementsByClassName("show-all")[0].style.display = "none";
// }

// document.getElementsByClassName("heading")[0].innerHTML = info.name;
// document.getElementsByClassName("left-project-about")[0].innerHTML = info.text_1;
// document.getElementsByClassName("smaller-text")[0].innerHTML = info.text_2;

// for (var p = 0; p < info.teamsInvolved.length; p++) {
//   var div = document.createElement("div");
//   div.classList.add("team");
//   div.innerHTML = teams[info.teamsInvolved[p] - 1];
//   document.getElementsByClassName("teams")[0].appendChild(div);
// }

// document.getElementsByClassName("show-all")[0].setAttribute("target", "_blank");
// document.getElementsByClassName("date")[0].innerHTML = info.date;
// document.getElementsByClassName("main-photo")[0].src =
//   info.heroSectionImageLink;
// document.getElementsByClassName("long-1")[0].src = info.long_images_link[0];
// document.getElementsByClassName("photo")[0].src =  info.mockups_link[0];
// //console.log("hey");
// if (info.mockups_link[1]) {
//   document.getElementsByClassName("photo")[1].src = info.mockups_link[1];
// } else {
//   document.getElementsByClassName("photo")[1].remove();
// }
// if (info.long_images_link.length > 1) {
//   for (var x = 1; x < info.long_images_link.length; x++) {
//     document.getElementsByClassName(
//       `long-photos-container`
//     )[0].innerHTML += `<div>
//             <img class="long-${x + 1}" src="${info.long_images_link[x]}" />
//           </div>`;
//   }
// } else {
//   document.getElementsByClassName("long-photos-container")[0].remove();
// }

// let scroll_indicator_height =
//   document.getElementsByClassName("scroll-indicator")[0].offsetHeight;

// let white_line = document.getElementsByClassName("white-line")[0];
// let grey_line = document.getElementsByClassName("grey-line")[0];
// //console.log(wrapper_height - back.offsetHeight);
// window.onscroll = () => {
//   document.getElementsByClassName("top-arrow")[0].style.display =
//     window.pageYOffset > 100 ? "block" : "none";

//   if (window.pageYOffset > 50) {
//     document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
//     document.getElementsByClassName("navbar")[0].style.backdropFilter =
//       "blur(10px)";
//   }
//   if (wrapper_height == undefined || scroll_indicator_height == undefined) {
//     //console.log("no wrapper");
//     return;
//   }

//   let percentage = window.pageYOffset / (wrapper_height - back.offsetHeight);
//   if (percentage > 1) {
//     white_line.style.height = `${scroll_indicator_height}px`;
//     grey_line.style.height = 0;
//   } else {
//     white_line.style.height = `${percentage * scroll_indicator_height}px`;
//     grey_line.style.height = `${(1 - percentage) * scroll_indicator_height}px`;
//   }
// };