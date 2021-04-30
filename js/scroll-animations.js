

var done = [false, false, false, false, false]

function inView(element, elementHeight, val) {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = scrollY + windowHeight;
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    if (scrollPosition > elementPosition + val) {
        return true;
    }
    return false;
}

function heading_animation(s, val) {
    this_done = parseInt(s[2]) - 1;
    var element = document.getElementsByClassName(s)[0];
    var elementHeight = element.clientHeight;
    if (inView(element, elementHeight, val) && !done[this_done]) {
        done[this_done] = true
        console.log("hello")
        setTimeout(() => {
            var st = document.getElementsByClassName(s)[0];
            st.style.color = 'white';
        }, 100)
        var textWrapper = document.querySelector(`.${s} .letters`);
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: `.${s} .line`,
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: `.${s} .line`,
                translateX: [0, document.querySelector(`.${s} .letters`).getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 100
            }).add({
                targets: `.${s} .letter`,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            }).add({
                targets: `.${s}`,
                opacity: 1,
                duration: 1000,
                easing: "easeOutExpo",
            });
    }
}

function left_enter_animation(name, val) {
    var element = document.getElementsByClassName(`${name}`)[0];
    var elementHeight = element.clientHeight;
    if (inView(element, elementHeight, val)) {
        element.classList.add('left_animate');
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
    }
}

function right_enter_animation(name, val) {
    var element = document.getElementsByClassName(`${name}`)[0];
    var elementHeight = element.clientHeight;
    if (inView(element, elementHeight, val)) {
        element.classList.add('right_animate');
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
    }
}

function bottom_enter_animation(name, val) {
    var element = document.getElementsByClassName(`${name}`)[0];
    var elementHeight = element.clientHeight;
    if (inView(element, elementHeight, val)) {
        element.classList.add('bottom_animate');
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
    }
}

function scale_enter_animation(name,val) {
    var element = document.getElementsByClassName(`${name}`)[0];
    var elementHeight = element.clientHeight;
    if (inView(element, elementHeight, val)) {
        element.classList.add('scale_animate');
        element.style.opacity = 1;
        element.style.transform = 'scale(1)';
    }
}

function left_enter_animate_icons(name, val) {
    var element = document.getElementsByClassName(`${name}`);
    var elementHeight = element[0].clientHeight;
    if (inView(element[0], elementHeight, val)) {
        element[0].classList.add('left_animate');
        element[0].style.opacity = 1;
        element[0].style.transform = 'translateX(0)';
        setTimeout(() => {
            element[1].classList.add('left_animate');
            element[1].style.opacity = 1;
            element[1].style.transform = 'translateX(0)';
        }, 100)
        setTimeout(() => {
            element[2].classList.add('left_animate');
            element[2].style.opacity = 1;
            element[2].style.transform = 'translateX(0)';
        }, 200)
        setTimeout(() => {
            element[3].classList.add('left_animate');
            element[3].style.opacity = 1;
            element[3].style.transform = 'translateX(0)';
        }, 300)
    }
}

function bottom_enter_animate_cards(name, val) {
    var element = document.getElementsByClassName(`${name}`);
    var elementHeight = element[0].clientHeight;
    if (inView(element[0], elementHeight, val)) {
        element[0].classList.add('bottom_animate');
        element[0].style.opacity = 1;
        element[0].style.transform = 'translateY(0)';
        setTimeout(() => {
            element[1].classList.add('bottom_animate');
            element[1].style.opacity = 1;
            element[1].style.transform = 'translateY(0)';
        }, 100)
        setTimeout(() => {
            element[2].classList.add('bottom_animate');
            element[2].style.opacity = 1;
            element[2].style.transform = 'translateY(0)';
        }, 200)
        setTimeout(() => {
            element[3].classList.add('bottom_animate');
            element[3].style.opacity = 1;
            element[3].style.transform = 'translateY(0)';
        }, 300)
        setTimeout(() => {
            element[4].classList.add('bottom_animate');
            element[4].style.opacity = 1;
            element[4].style.transform = 'translateY(0)';
        }, 400)
    }
}


function animate() {
    heading_animation('ml11', 0)
    heading_animation('ml22', 0)
    heading_animation('ml33', 0)
    heading_animation('ml44', 0)
    heading_animation('ml55', 0)
    left_enter_animation('about-picture', 0)
    right_enter_animation('about-info-1', 0)
    left_enter_animation('about-info-2', 0)
    left_enter_animate_icons('icon', 0)
    scale_enter_animation('project-heading1', 0)
    scale_enter_animation('project-heading2', 0)
    right_enter_animation('mobile11', -100)
    right_enter_animation('mobile21', -100)
    left_enter_animation('mobile12', -200)
    left_enter_animation('mobile22', -200)
    bottom_enter_animation('projectsSecondTextContainer1', 0)
    bottom_enter_animation('projectsSecondTextContainer2', 0)
    bottom_enter_animate_cards('card', 0);
    left_enter_animation('section-end-heading', 0)
    bottom_enter_animation('artwork-container', -200)
    bottom_enter_animation('form-wrapper', 100)
    left_enter_animation('show-all', 0)
    left_enter_animation('heightClass', 0)
}

document.addEventListener('scroll', animate);





