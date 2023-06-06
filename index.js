// Remember to import the data and Dog class!

import Dog from "./Dog.js"
import dogs from "./data.js"
import data from "./data.js"


const acceptBtn = document.getElementById('accept')
const rejectBtn = document.getElementById('reject')
const dogObj = new Dog(data[0])

function render() {
    document.getElementById('dog-desc').innerHTML = getNewDog().getDogHtml()
    swipeVertically()
}

function getNewDog(){
    const nextDog = data.shift()
    return nextDog ? new Dog(nextDog) : {}
}




    //     document.onclick = e => {
    //     let btnClicked = e.target.id
    //     if(btnClicked === 'accept'){
    //         hasBeenLiked = true
    //         hasBeenSwiped = true
    //         document.getElementById('dog-desc').innerHTML = ""
    //         document.getElementById('dog-desc').innerHTML = dogObj.getDogHtml()
    //         document.getElementById('dog-desc').innerHTML  += dogObj.getLikeBadgeHtml()                                                   
    //     }else if (btnClicked === 'reject' && hasBeenLiked){
    //         hasBeenLiked = false
    //         hasBeenSwiped = true
    //         document.getElementById('dog-desc').innerHTML = ""
    //         document.getElementById('dog-desc').innerHTML = dogObj.getDogHtml()
    //         document.getElementById('dog-desc').innerHTML  += dogObj.getNopeBadgeHtml()                                                  
    //     }else if (btnClicked === 'reject' && !hasBeenLiked) {
    //         hasBeenSwiped = true
    //         document.getElementById('dog-desc').innerHTML  += dogObj.getNopeBadgeHtml()
    //     }
    
    // } 







function swipeVertically() {
    let touchstartY = 0
    let touchendY = 0

    function checkDirection() {
        if (touchendY < touchstartY) alert('swiped up!')
        if (touchendY > touchstartY) alert('swiped down!')
    }

    document.addEventListener('touchstart', e => {
        touchstartY = e.changedTouches[0].screenY
    })

    document.addEventListener('touchend', e => {
        touchendY = e.changedTouches[0].screenY
        checkDirection()
    })
}

// document.getElementById('dog-desc').innerHTML = ''







render()