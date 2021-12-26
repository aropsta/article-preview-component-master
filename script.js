/**@type {HTMLElement}*/

const social = document.querySelector(".social");
const user = document.querySelector(".user");
const fill = document.querySelector(".share");
const container = document.querySelector(".contain");

container.addEventListener('click', toggleStyle);




const svgPath = document.getElementsByTagName('path')[0];



const x = window.matchMedia("(min-width: 53rem)");
    function toggleStyle(){
        
        svgPath.classList.toggle("toggleChange");
        container.classList.toggle("toggleChange");
        
        social.classList.toggle('make-visible');
        
        console.log(container.classList)
    }
    
