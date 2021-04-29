const elements = document.getElementsByClassName('departmentElement')
const teamContainer = document.querySelector('.teamContainer')

const developers = [[{
    year: 2018,
    members: [
        {
            name: "Denis Lomov",
            designation: "Frontend Developer",
            image:"assets/members/placeholder.jfif",
            links: {
                insta: "",
                facebook: "",
                twitter: ""
            }
        }, {
            name: "Denis Lomov",
            designation: "Frontend Developer",
            image: "assets/members/placeholder.jfif",
            links: {
                insta: "",
                facebook: "",
                twitter: ""
            }
        }, {
            name: "Denis Lomov",
            designation: "Frontend Developer",
            image: "assets/members/placeholder.jfif",
            links: {
                insta: "",
                facebook: "",
                twitter: ""
            }
        }, {
            name: "Denis Lomov",
            designation: "Frontend Developer",
            image: "assets/members/placeholder.jfif",
            links: {
                insta: "",
                facebook: "",
                twitter: ""
            }
        }
    ]
}, {
        year: 2019,
        members: [
            {
                name: "Denis Lomov",
                designation: "Frontend Developer",
                image: "assets/members/placeholder.jfif",
                links: {
                    insta: "",
                    facebook: "",
                    twitter: ""
                }
            }, {
                name: "Denis Lomov",
                designation: "Frontend Developer",
                image: "assets/members/placeholder.jfif",
                links: {
                    insta: "",
                    facebook: "",
                    twitter: ""
                }
            }, {
                name: "Denis Lomov",
                designation: "Frontend Developer",
                image: "assets/members/placeholder.jfif",
                links: {
                    insta: "",
                    facebook: "",
                    twitter: ""
                }
            }, {
                name: "Denis Lomov",
                designation: "Frontend Developer", 
                image: "assets/members/placeholder.jfif",
                links: {
                    insta: "",
                    facebook: "",
                    twitter: ""
                }
            }
        ]
    }]]


const updateTeam = (num) => {
    teamContainer.innerHTML = ''

    developers[num].map(({ year, members }) => {
        let teamName = document.createElement('h2')
        let createDiv = document.createElement('div')
        createDiv.innerHTML = ''
        teamName.className = 'teamName'
        teamName.innerHTML = year
        teamContainer.appendChild(teamName)
        teamContainer.appendChild(createDiv)
        createDiv.className = 'teamMembers'
        members.map(({ name, designation, image, links }) => {
            let member = document.createElement('div')
            member.className = 'member'
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
                    </div>`

            createDiv.appendChild(member)
        })
        teamContainer.appendChild(createDiv)

    })
}

const teamChange = (e) => {
    let num = 0

    for(let i = 0; i<elements.length; i++ ){
        elements[i].className = 'departmentElement'
        if(elements[i] === e){
            num = i
        }
    }     

    e.classList.add("selected")

    updateTeam(num)


}