const image = document.querySelector(".move-img");

let positionY = 0;
let positionX = 0;

const moveSteps = 20; // amount of pixel that i want to move my image ..more pixel faster movement.

document.addEventListener("keydown", (event)=>{
    switch(event.key){
        case("ArrowUp"): positionY -= moveSteps;
        break;
        case("ArrowDown"): positionY += moveSteps;
        break;
        case("ArrowLeft"): positionX -= moveSteps;
        break;
        case("ArrowRight"): positionX += moveSteps;
        break;
        default: alert("use only up down left right keys");
        break;
    }
    image.style.transform = `translate(${positionX}px, ${positionY}px)`
});