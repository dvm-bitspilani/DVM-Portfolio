

var done = [false, false, false, false, false]

function inView(element, elementHeight) {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = scrollY + windowHeight;
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    if (scrollPosition > elementPosition) {
        return true;
    }
    return false;
}

function heading_animation(s) {
    this_done = parseInt(s[2])-1;
    var element = document.getElementsByClassName(s)[0];
    var elementHeight = element.clientHeight;
    if (inView(element, elementHeight) && !done[this_done]) {
        done[this_done] = true
        console.log("hello")
        setTimeout(() => {
            var st = document.getElementsByClassName(s)[0];
            st.style.color = 'white';
        }, 100)
        var textWrapper = document.querySelector(`.${s} .letters`);
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: `.${s} .line`,
            scaleY: [0,1],
            opacity: [0.5,1],
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
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
        }).add({
            targets: `.${s}`,
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
        });
    }
}

function animate() {
    heading_animation('ml11')
    heading_animation('ml22')
    heading_animation('ml33')
    heading_animation('ml44')
    heading_animation('ml55')
}

document.addEventListener('scroll', animate);





