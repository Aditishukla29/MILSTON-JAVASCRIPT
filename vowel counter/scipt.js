function countVowels() {
    // Get the name input and convert it to lowercase
    var name = document.getElementById("name").value.toLowerCase();
  
    // Define an array of vowels
    var vowels = ["a", "e", "i", "o", "u"];
  
    // Initialize the vowel count to 0
    var count = 0;
  
    // Iterate through each character in the name
    for (var i = 0; i < name.length; i++) {
      // If the character is a vowel, increment the count
      if (vowels.includes(name[i])) {
        count++;
      }
    }
  
    // Display the result
    var result = document.getElementById("result");
    result.innerHTML = "The name " + name + " has " + count + " vowels.";
  }
  