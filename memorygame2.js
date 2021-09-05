// Link to the Requirements if you need them
// http://curric.rithmschool.com/springboard/exercises/memory-game/
// There was starter code for the COLORS array, 
// shuffle function, and createDivsforColors function.
// My code is lines 7-11 and 72+.

const gameContainer = document.getElementById("game");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
let scoreCount = document.querySelector("#score-value");
// let highScore = document.querySelector("#high-score-value");

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
    newDiv.classList.add('hidden');


    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// sets a starting score
let score = 0;
scoreCount.innerHTML = score;

// creating variables that will be used in handleCardClick
let count = 0;
let targetOne = '';
let targetTwo = '';
let matchCount = 0;

function handleCardClick(event) {
  // count will increase to ensure user only clicks 2 cards per turn
  count++;
    
    // on click 1, increase score, change the background
    if (count === 1) {
      score++;
      scoreCount.innerHTML = score;
      
      targetOne = event.target;
      // when you remove the hidden class, the only class remaining is the card color
      targetOne.classList.remove('hidden');
      classOneColor = targetOne.className;
    }
    // on click 2
    if (count === 2) {
      targetTwo = event.target;
      // if you click the same div twice, nothing happens
      if (targetOne == targetTwo) {
        count --;
      }
      // increase score, change the background
      else {
        score++;
        scoreCount.innerHTML = score;

        targetTwo.classList.remove('hidden');
        classTwoColor = targetTwo.className;        

        // check to see if the two backgrounds are a match
        if (classOneColor==classTwoColor) {
          match = true; 
          matchCount++;
          count = 0; 
        }
        // turn both cards back to white and reset the 2-card click count to 0
        else {
          match = false;
          setTimeout(function() {
            targetOne.classList.add('hidden');
            targetTwo.classList.add('hidden');
            count = 0;
          }, 1000);
        }
      if (matchCount === 5) {
        var highScore = score;
        localStorage.setItem('High Score', highScore);
      }}
    }
}

// creates the gameboard
startButton.addEventListener('click', function() {
  createDivsForColors(shuffledColors);
  // this stops the user from creating multiple gameboards at once
  startButton.remove();
  }
)

// removes gameboard, reshuffles, creates new gameboard
resetButton.addEventListener('click', function() {
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  shuffledColors = shuffle(COLORS);
  createDivsForColors(shuffledColors);
})


// remembers high score
// not currently working
// localStorage.setItem = ('High Score', JSON.stringify(score));

// For starting with a start game button then switching to reset butotn
//   var reset = document.createElement('button');
// reset.innerText = 'Reset Game';
  