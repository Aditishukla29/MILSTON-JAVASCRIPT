const button=document.querySelector("button");

const heading=document.querySelector("h1");

button.addEventListener("click",toggleHeading);


function toggleHeading(){

    if(heading.innerText==='The most affordable learning platform'){

        heading.innerText="PW Skills";

    }else{

        heading.innerText="The most affordable learning platform"

    }

}