// Create the Dog class here
import dogs from "./data.js"

class Dog {

    constructor(data){
       Object.assign(this,data)
    }

    getDogData(){
        return this;
    }

    getDogHtml(){
       let {name,avatar,age,bio,hasBeenSwiped,hasBeenLiked} = this

        return `
                        <img class="dog-image" src="${avatar}" id=${name} />
                        <div class="pdiv" ><p class="p1">${name}, ${age}</p>
                        <p class="p2">${bio}</p></div>

                 `
    }

    getLikeBadgeHtml(){
        return `
                                <div class="rec">
                                <img src="images/badge-like.png" class="like" id="like" />  
                                </div>              
                            `
    }

    getNopeBadgeHtml(){
        return `<div class="rec">
                <img src="images/badge-nope.png" class="dislike" id="dislike" />  
                </div>                                                                 
                `
    }





}

export default Dog
