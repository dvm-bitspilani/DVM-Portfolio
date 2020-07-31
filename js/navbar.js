let isOpened = false
const hamLine = document.getElementsByClassName('ham-line')

const openCloseNav = () => {
    if(isOpened){
        document.getElementById('navContainer').style.display = 'none'
        isOpened = false;
        hamLine[1].style.left = '';
        hamLine[1].style.marginTop = '';
        hamLine[0].style.transform = '';
        hamLine[1].style.transform = '';
    }
    else{
        document.getElementById('navContainer').style.display = 'flex'
        hamLine[1].style.left = '0';
        hamLine[1].style.marginTop = '-7px';
        hamLine[0].style.transform = 'rotate(45deg)';
        hamLine[1].style.transform = 'rotate(-45deg)';
        isOpened = true
    }

}