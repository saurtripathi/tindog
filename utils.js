
import Dog from "./Dog.js"
import dogs from "./data.js"

function addBadge(dog) {
    document.onclick = e => {
        if (Object.keys(dog).length !== 0) {
            let { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = dog.getDogData()
            let btnClicked = e.target.id
            if (btnClicked === 'accept') {
                hasBeenLiked = true
                hasBeenSwiped = true
                document.getElementById('dog-desc').innerHTML = ""
                document.getElementById('dog-desc').innerHTML = dog.getDogHtml()
                document.getElementById('dog-desc').innerHTML += dog.getLikeBadgeHtml()
            } else if (btnClicked === 'reject' && hasBeenLiked) {
                hasBeenLiked = false
                hasBeenSwiped = true
                document.getElementById('dog-desc').innerHTML = ""
                document.getElementById('dog-desc').innerHTML = dog.getDogHtml()
                document.getElementById('dog-desc').innerHTML += dog.getNopeBadgeHtml()
            } else if (btnClicked === 'reject' && !hasBeenLiked) {
                hasBeenSwiped = true
                document.getElementById('dog-desc').innerHTML += dog.getNopeBadgeHtml()
            }
            if (hasBeenSwiped) {

                setTimeout(() => {
                    dog = getNewDog()
                    if (Object.keys(dog).length !== 0) {
                        document.getElementById('dog-desc').innerHTML = dog.getDogHtml()
                    }else {
                        setTimeout(() => {
                            location.replace(location.href);
                        }, 2000);
                    }
                }

                    , 1000)

            }
        }

    }
}

function swipeVertically() {
    let touchstartY = 0
    let touchendY = 0

    function checkDirection() {
        if (touchendY < touchstartY) {
            let dog = getNewDog()
            if (Object.keys(dog).length !== 0)
                document.getElementById('dog-desc').innerHTML = dog.getDogHtml()
        }
    }

    document.addEventListener('touchstart', e => {
        touchstartY = e.changedTouches[0].screenY
    })

    document.addEventListener('touchend', e => {
        touchendY = e.changedTouches[0].screenY
        checkDirection()
    })
}

function getNewDog() {
    const nextDog = dogs.shift()
    return nextDog ? new Dog(nextDog) : {}
}

export {addBadge, swipeVertically, getNewDog }