function checkDivisibility() {
    const inputNumbers = document.getElementById("input-numbers").value;
    const numbersArray = inputNumbers.split(",");
    let outputString = "";
  
    for (let i = 0; i < numbersArray.length; i++) {
      const number = parseInt(numbersArray[i]);
  
      if (isNaN(number)) {
        outputString += `${numbersArray[i]} is not a number<br>`;
        continue;
      }
  
      if (number % 3 === 0 && number % 2 !== 0) {
        outputString += `${number} is divisible by 3 but not by 2<br>`;
      }
    }
  
    document.getElementById("output").innerHTML = outputString;
  }
  