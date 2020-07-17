var font = new FontFaceObserver('Jaapokki subtract')
font.load().then(() => {
    //This is only a demo for preloading fonts. Use ONLY for loader fonts strictly
    // setTimeout(() => {
    //     document.documentElement.className += 'fonts-loaded'
    // },800)
    //this setTimeout emulates FOUT when the font might be loaded.
    //uncomment setTimeout to se it in action locally
     document.documentElement.className += 'fonts-loaded'
})

let sectionNo = 0
let scrollDebounce = true
document.documentElement.scrollTo(0,0)
const fromTop = document.getElementsByClassName('page')[1].getBoundingClientRect().top
const pages = document.getElementsByClassName('page')



//generic function for scrolling the section
const scrollSection = distance => {
    if(scrollDebounce) {
        scrollDebounce=false
        if(distance>0 || distance==='down') {
            if(pages[pages.length-1].getBoundingClientRect().top<=0) {
                scrollDebounce=true
                return
            }
            let scrollAmt = fromTop
            window.scrollBy({
                top: scrollAmt,
                left:0,
                behavior: "smooth"
            })
         }
         if(distance<0 || distance==='up') {
             window.scrollBy({
                
                top: -fromTop,
                left:0,
                behavior: "smooth"
            })
         }
        setTimeout(() => scrollDebounce=true, 500)
    }
}


//Below line for touchpad and mousewheel swipe
window.addEventListener("wheel", e=> scrollSection(e.deltaY))

window.addEventListener('keyup', e=> {
    if(e.keyCode===40) {
        scrollSection('down')
    }
    if(e.keyCode===38) {
        scrollSection('up')
    }

})

let initialX, initialY, dispX, dispY, swipedir, 
threshold=100, //Minimum amount of swipe
restraint=100, //Maximum tolerance of perpendicular swipe
allowdTime=300,//Maximum time for registering swipe
elaspedTime,
startTime;


//Code for registering touchswipe
window.addEventListener('touchstart', e => {
    var screen = e.changedTouches[0]
    swipeDir = 'none'
    dispX=0, dispY=0
    initialX = screen.pageX
    initialY=screen.pageY
    startTime = new Date().getTime()
    e.preventDefault()
}, false)

window.addEventListener('touchmove', e => {
    e.preventDefault()
}, false)

window.addEventListener('touchend', e=> {
    var screen = e.changedTouches[0]
    dispX = screen.pageX - initialX
    dispY = screen.pageY- initialY
    elaspedTime = new Date().getTime()- startTime
    if(elaspedTime<=allowdTime) {
        if(Math.abs(dispX)>=threshold && Math.abs(dispY)<=restraint) {
            swipeDir= dispX<0 ? 'left': 'right'
        }
        else if(Math.abs(dispY)>=threshold && Math.abs(dispX)<=restraint) {
            swipeDir= dispY<0 ? 'down': 'up'
        }
    }
    e.preventDefault()
    scrollSection(swipeDir)
}, false)