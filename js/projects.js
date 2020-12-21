main_arr = [
    [
        {
            img: '/Android/1.jpg',
            name: 'Android 1',
            url: ''
        },
        {
            img: '/Android/2.jpg',
            name: 'Android 2',
            url: ''
        },
        {
            img: '/Android/3.jpg',
            name: 'Android 3',
            url: ''
        },
        {
            img: '/Android/4.jpg',
            name: 'Android 4',
            url: ''
        }
    ],
    [
        {
            img: '/Backend/1.jpg',
            name: 'Backend 1',
            url: ''
        },
        {
            img: '/Backend/2.jpg',
            name: 'Backend 2',
            url: ''
        },
        {
            img: '/Backend/3.jpg',
            name: 'Backend 3',
            url: ''
        }
    ],
    [
        {
            img: '/Frontend/1.jpg',
            name: 'Frontend 1',
            url: ''
        },
        {
            img: '/Frontend/2.jpg',
            name: 'Frontend 2',
            url: ''
        },
        {
            img: '/Frontend/3.jpg',
            name: 'Frontend 3',
            url: ''
        }
    ],
    [
        {
            img: '/Design/1.jpg',
            name: 'Design 1',
            url: ''
        },
        {
            img: '/Design/2.jpg',
            name: 'Design 2',
            url: ''
        },
        {
            img: '/Design/3.jpg',
            name: 'Design 3',
            url: ''
        },
        {
            img: '/Design/4.jpg',
            name: 'Design 4',
            url: ''
        }
    ],
    [
        {
            img: '/Video/1.jpg',
            name: 'Video 1',
            url: ''
        },
        {
            img: '/Video/2.jpg',
            name: 'Video 2',
            url: ''
        }
    ]

]

team(2)

function team(input) {
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName('team-name')[i].className = 'team-name'
    }
    document.getElementsByClassName('team-name')[input].className = 'team-name highlighted'
    team_projects(input)
}

function team_projects(input) {
    var window_width = window.innerWidth
    console.log(window_width)

    document.getElementsByClassName('projects')[0].innerHTML = ''
    var no_of_projects = main_arr[input].length
    var total_width = (64 * no_of_projects)
    console.log(total_width)
    document.getElementsByClassName('projects')[0].style.width = total_width + 'vw'
    for (var i = 0; i < no_of_projects; i++) {
        var div = document.createElement('div')
        div.setAttribute('class', 'single_project')
        var background = 'url("./content-projects' + main_arr[input][i].img + '")'
        div.setAttribute('style', 'background-image:' + background + '; background-position: center; background - repeat: no - repeat; background - size: cover; ')
        document.getElementsByClassName('projects')[0].appendChild(div)

        var name_div = document.createElement('div')
        name_div.setAttribute('class', 'project_name')
        name_div.innerHTML = main_arr[input][i].name
        document.getElementsByClassName('single_project')[i].appendChild(name_div)
    }
}