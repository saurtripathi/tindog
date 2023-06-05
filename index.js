// Remember to import the data and Dog class!

import Dog from "./Dog.js"
import dogs from "./data.js"
import data from "./data.js"


const acceptBtn = document.getElementById('accept')
const rejectBtn = document.getElementById('reject')


function render() {
    let dogObj = new Dog(data[0])
    document.getElementById('dog-desc').innerHTML = dogObj.getDogHtml()
    document.onclick = e => {
    let btnClicked = e.target.id
    if(btnClicked === 'accept'){
        hasBeenLiked = true
        hasBeenSwiped = true
        document.getElementById('dog-desc').innerHTML = ""
        document.getElementById('dog-desc').innerHTML = dogObj.getDogHtml()
        document.getElementById('dog-desc').innerHTML  += dogObj.getLikeBadgeHtml()                                                   
    }else if (btnClicked === 'reject' && hasBeenLiked){
        hasBeenLiked = false
        hasBeenSwiped = true
        document.getElementById('dog-desc').innerHTML = ""
        document.getElementById('dog-desc').innerHTML = dogObj.getDogHtml()
        document.getElementById('dog-desc').innerHTML  += dogObj.getNopeBadgeHtml()                                                  
    }else if (btnClicked === 'reject' && !hasBeenLiked) {
        hasBeenSwiped = true
        document.getElementById('dog-desc').innerHTML  += dogObj.getNopeBadgeHtml()
    }

} 
    swipeHorizontally()
}
function swipeHorizontally() {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
        if (touchendX < touchstartX) alert('swiped left!')
        if (touchendX > touchstartX) alert('swiped right!')
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    })
}

// document.getElementById('dog-desc').innerHTML = ''







render()