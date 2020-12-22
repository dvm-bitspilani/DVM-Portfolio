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

document.getElementsByClassName('projects')[0].scrollRight = 150

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
    document.getElementsByClassName('projects')[0].scrollRight = 150
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

// Drag Scroll

const slider = document.querySelector('.projects');
const inner = document.querySelector('.inner')
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - inner.offsetLeft;
    scrollLeft = inner.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - inner.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    inner.scrollLeft = scrollLeft - walk;
    console.log(walk);
});

// Slider 

let x = 0;

const ele = document.getElementById('slider');
const left_limit = document.getElementById('dotted_line_wrapper').offsetLeft
const right_limit = document.getElementById('dotted_line_wrapper').offsetLeft + document.getElementById('dotted_line_wrapper').offsetWidth - document.getElementById('slider').offsetWidth
const mouseDownHandler = function (e) {
    x = e.clientX;
    ele.classList.add('active')
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    if ((ele.offsetLeft + dx) > right_limit || (ele.offsetLeft + dx) < left_limit) {
        return
    }
    ele.style.left = `${ele.offsetLeft + dx}px`;

    x = e.clientX;
};

const mouseUpHandler = function () {
    ele.classList.remove('active')
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

ele.addEventListener('mousedown', mouseDownHandler);


