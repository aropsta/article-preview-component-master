/**@type {HTMLElement}*/

const social = document.querySelector(".social");
const user = document.querySelector(".user");

const container = document.querySelector('.contain');

container.addEventListener('click', ()=>{

    var b = social.style.display;

    if(b=="none"){
        social.style.display = "block"
    }
        else social.style.display="none"

})

function styles(e){
}


