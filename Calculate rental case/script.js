let daysValue = 0,  //Variable Declaration
  carTypevalue = 0,
  price;


  //select element using DOM
let days = document.getElementById("days");
let selectCar = document.querySelector("#selectCar");
let displayCost = document.getElementById("displayCost");
let genCostButton = document.querySelector("button");

genCostButton.addEventListener("click", genCost); //apply Event Listener

//Code for generate Cost 

function genCost() {
  daysValue = parseInt(days.value);
  carTypevalue = selectCar.value;
  if (carTypevalue == "Economy") {
    price = 4000 * daysValue;
    displayCost.value = price;
  }
  if (carTypevalue == "Midsize") {
    price = 10000 * daysValue;
    displayCost.value = price;
  }
  if (carTypevalue == "Luxury") {
    price = 20000 * daysValue;
    displayCost.value = price;
  }
}