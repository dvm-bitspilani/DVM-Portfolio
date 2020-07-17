//console.log(document.documentElement.getBoundingClientRect().top)
//var FontFaceObserver = require('fontfaceobserver');

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
//window.scrollTo(0,0)
//console.log(document.getElementsByClassName('page')[++sectionNo].getBoundingClientRect().top)
const fromTop = document.getElementsByClassName('page')[1].getBoundingClientRect().top
console.log(fromTop)
const pages = document.getElementsByClassName('page')
//console.log(window.innerHeight)

const scrollSection = distance => {
    if(scrollDebounce) {
        //console.log(scrollDebounce)
        scrollDebounce=false
        if(distance>0 || distance==='down') {
            if(pages[pages.length-1].getBoundingClientRect().top<=0) {
                scrollDebounce=true
                return
            }
            let scrollAmt = fromTop
            // if(sectionNo>=document.getElementsByClassName("page").length-1) {
            //     console.log("returning")
            //     return
            // }
            //console.log(top- 0.5*distance)
            window.scrollBy({
                top: scrollAmt,
                left:0,
                behavior: "smooth"
            })
         }
         if(distance<0 || distance==='up') {
            //  if(sectionNo<=0)
            //     return
             //console.log("hi")
             window.scrollBy({
                
                top: -fromTop,
                left:0,
                behavior: "smooth"
            })
         }
        setTimeout(() => scrollDebounce=true, 500)
    }
    //console.log(distance)
}

window.addEventListener("wheel", e=> scrollSection(e.deltaY))

let startX, startY, distX, distY, swipedir, 
threshold=150,
restraint=100,
allowdTime=300,
elaspedTime,
startTime;

window.addEventListener('touchstart', e => {
    var touchObj = e.changedTouches[0]
    swipedir = 'none'
    distX=0, distY=0
    startX = touchObj.pageX
    startY=touchObj.pageY
    startTime = new Date().getTime()
    e.preventDefault()
}, false)

window.addEventListener('touchmove', e => {
    e.preventDefault()
}, false)

window.addEventListener('touchend', e=> {
    var touchObj = e.changedTouches[0]
    distX = touchObj.pageX - startX
    distY = touchObj.pageY- startY
    elaspedTime = new Date().getTime()- startTime
    if(elaspedTime<=allowdTime) {
        if(Math.abs(distX)>=threshold && Math.abs(distY)<=restraint) {
            swipedir= distX<0 ? 'left': 'right'
        }
        else if(Math.abs(distY)>=threshold && Math.abs(distX)<=restraint) {
            swipedir= distY<0 ? 'up': 'down'
        }
    }
    e.preventDefault()
    scrollSection(swipedir)
}, false)