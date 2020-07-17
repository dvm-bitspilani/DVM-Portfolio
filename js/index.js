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
window.addEventListener("wheel", e=> {
    
    if(scrollDebounce) {
        //console.log(scrollDebounce)
        scrollDebounce=false
        if(e.deltaY>0) {
            if(pages[pages.length-1].getBoundingClientRect().top<=0) {
                console.log('returning')
                scrollDebounce=true
                return
            }
            let scrollAmt = fromTop
            // if(sectionNo>=document.getElementsByClassName("page").length-1) {
            //     console.log("returning")
            //     return
            // }
            //console.log(top- 0.5*e.deltaY)
            window.scrollBy({
                top: scrollAmt,
                left:0,
                behavior: "smooth"
            })
         }
         if(e.deltaY<0) {
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
    //console.log(e.deltaY)
})

//font.load