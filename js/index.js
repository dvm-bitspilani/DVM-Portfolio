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

let currentPage = 0
const whereTop = document.getElementsByClassName('page')[0].getBoundingClientRect().top
let scrollDebounce = true
document.documentElement.scrollTo(0,0)
const fromTop = document.getElementsByClassName('page')[1].getBoundingClientRect().top
currentPage = Math.floor(whereTop/fromTop*-1)
const pages = document.getElementsByClassName('page')

for(let i=0; i<pages.length; ++i) {
    document.getElementsByClassName('section-nav')[0].innerHTML += `
        <div class="dot" onclick="selectDot(${i})"></div>
    `
}

let dots = document.getElementsByClassName('dot')
//generic function for scrolling the section starts here---------------
const scrollSection = (distance, pageNo) => {
    if(scrollDebounce) {
        scrollDebounce=false
        if((pageNo && distance===null) || (pageNo===0 && distance===null)) {
            const factor=pageNo
            currentPage=pageNo
            window.scrollTo({
                top: fromTop*factor,
                left: 0,
                behavior: 'smooth'
            })
        }
        if(distance>0 || distance==='down') {
            if(pages[pages.length-1].getBoundingClientRect().top<=50) {
                scrollDebounce=true
                return
            }
            let scrollAmt = fromTop
            ++currentPage
            if(currentPage>pages.length-1)
                currentPage=pages.length-1
            window.scrollBy({
                top: scrollAmt,
                left:0,
                behavior: "smooth"
            })
            selectDot(currentPage)
         }
         if(distance<0 || distance==='up') {
            if(pages[0].getBoundingClientRect().top>0) {
                scrollDebounce=true
                return
            }

             --currentPage
             if(currentPage<0)
                currentPage=0
             window.scrollBy({
                
                top: -fromTop,
                left:0,
                behavior: "smooth"
            })
            selectDot(currentPage)
         }
        setTimeout(() => scrollDebounce=true, 500)
    }
}

const selectDot = pageNo => {
    let newDots = document.getElementsByClassName('dot')
    for(let i=0; i<newDots.length; ++i) {
        if(newDots[i].classList.contains('dot-active'))
            newDots[i].classList.remove('dot-active')
    }
    newDots[pageNo].classList.add('dot-active')
    scrollSection(null, pageNo)
    
}

selectDot(currentPage)





//generic function for scrolling the section ends here---------------


//Below line for touchpad and mousewheel swipe
window.addEventListener("wheel", e=> scrollSection(e.deltaY))


//Below line for arrow up and scroll scroll
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


//Code for registering touchswipe starts here-----------
window.addEventListener('touchstart', e => {
    var screen = e.changedTouches[0]
    swipeDir = 'none'
    dispX=0, dispY=0
    initialX = screen.pageX
    initialY=screen.pageY
    startTime = new Date().getTime()
   e.preventDefault()
}, {passive: false})

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

//Code for registering touchswipe ends here-----------



//Artwork carousel scroll code starts here--------------

const navigateCarousel = (step, stepType) =>  {
    if(document.getElementById('active-scroll-id').style.left==='0vw' && (stepType==='single' && step===-1)) {
        return
    }
        
    if(document.getElementById('active-scroll-id').style.left==='32vw' && (stepType==='single' && step===1)) {
        return
    }
    let scrollbarDisp = 8
    const prevLeft = +(document.getElementById('active-scroll-id').style.left.split('v')[0])
    const dist = scrollbarDisp*step
    let newLeft
    if(stepType==='single') {
        newLeft = prevLeft+dist
    }
    else
        newLeft=dist
    let prevLeftCarousel = +(document.getElementsByClassName('artwork-img-container')[0].style.left.split('%')[0])
    let distCarousel = -(step*100)
    if(prevLeftCarousel<=-100 || step===-1) {
        if(stepType==='single')
        distCarousel-=(step*1)
    }
    if(prevLeftCarousel===1)
        prevLeftCarousel-=1
    let newLeftCarousel
    if(stepType==='single')
        newLeftCarousel = prevLeftCarousel+distCarousel
    else {
        newLeftCarousel=distCarousel
        const offset = Math.ceil(newLeftCarousel/100)+1
        newLeftCarousel+=offset
    }
       
    document.getElementById('active-scroll-id').style.transition="left .5s ease-in"
    document.getElementById('active-scroll-id').style.left=`${newLeft}vw`
    document.getElementsByClassName('artwork-img-container')[0].style.left=`${newLeftCarousel}%`
    setTimeout(()=> {
        document.getElementById('active-scroll-id').style.transition='0s'
    },600)
}

