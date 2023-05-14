const button = document.getElementById("btn");

button.addEventListener("click",()=>{
    const color = ["black","red","green","blue","yellow","purple","white"];

    let random = function(){
        const randomIndex = Math.floor(Math.random()*color.length);
        const randomColor = color[randomIndex];
        return randomColor;
    }
    document.body.style.background = random();
});