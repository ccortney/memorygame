const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let count = 0;
let classOne = '';
let classTwo = '';
let targetOne = '';
let targetTwo = '';

function handleCardClick(event) {
  // count will increase
  count++;
  const backColor = this.className
    
    // on click 1, change the background
    if (count == 1) {
      targetOne = event.target;
      classOneColor = backColor;
      event.target.style.backgroundColor = classOneColor;
    }
    // on click 2, change the background
    if (count == 2) {
      targetTwo = event.target;
      if (targetOne == targetTwo) {
        count --;
      }
      else {
        classTwoColor = backColor;
        event.target.style.backgroundColor = classTwoColor;

        // check to see if the two backgrounds are a match
        if (classOneColor === classTwoColor) {
          match = true; 
          count = 0; 
        }
        else {
          match = false;
          setTimeout(function() {
            targetOne.style.backgroundColor = 'white';
            targetTwo.style.backgroundColor = 'white';
            count = 0;
          }, 1000);
        }
      }
    }
}

// function handleCardClick(event) {
//   // you can use event.target to see which element was clicked
//   count++;
//   if (count <= 2) {
//     event.target.style.backgroundColor = this.className;
//     const backColor = this.className
//       if (count == 1) {
//         classOne = backColor;
//       }
//       if (count == 2) {
//         classTwo = backColor;
//         if (classOne === classTwo) {
//           match = true;  
//         }
//         else {
//           match = false;
//         }
//         console.log(match);
//       }
    
//   }
// }

// when the DOM loads
createDivsForColors(shuffledColors);
