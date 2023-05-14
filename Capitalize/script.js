let inputValue = document.querySelector("#inputValue");
let capValue = document.querySelector("#capValue");

let stringValue;

//Event Apply

inputValue.addEventListener("input", capitalizeFirstLetter);

// Code For Captalize First Character of a given String

function capitalizeFirstLetter() {
  stringValue = inputValue.value;

  capitalString =
    stringValue.charAt(0) === stringValue.charAt(0).toUpperCase()
      ? stringValue
      : stringValue.charAt(0).toUpperCase() + stringValue.slice(1);

  capValue.innerText = capitalString;
}