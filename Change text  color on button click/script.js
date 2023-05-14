const display = document.querySelector(".display p");

const button = document.getElementById("btn");

let colorChange = function(){
    let elements = "123456789ABCDEFGHIJKLMN";
    let sym = "#";

    for(let i = 0; i < 6; i++){
        sym += elements[Math.floor(Math.random() * 16)];
    }
    return sym;
}

button.addEventListener("click",()=>{
    display.style.color = colorChange();
})