// Get the paragraph element by class name

const paraGraph = document.querySelector(".para");




// Split the paragraph into an array of words

const words = paraGraph.innerHTML.split(" ");




// Function to highlight words longer than 8 characters

function searchChar(words) {

  for (let i = 0; i < words.length; i++) {

    if (words[i].length >= 8) {

      words[i] = `<span style="background-color: yellow;">${words[i]}</span>`;

    }

  }

  return words.join(" ");

}




// Call the searchChar function on page load

document.addEventListener("DOMContentLoaded", () => {

  paraGraph.innerHTML = searchChar(words);

});