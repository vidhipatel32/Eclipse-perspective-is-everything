const grid = document.getElementById("grid");
const questionDiv = document.getElementById("question");
const scoreDiv = document.getElementById("score");
const movesDiv = document.getElementById("moves");
const resetButton = document.getElementById("resetButton");
const submitButton = document.querySelector("input[type='submit']");
let alignmentScoreIncreased = false;




// Create an array of image objects with IDs
const images = [
  { id: 1, src: "sun.png" },
  { id: 2, src: "moon.jpg" },
  { id: 3, src: "earth.png" }
];

const gridData = [];
let selectedImage = "";
let score = 0;
let moves = 0;

// Initialize the grid
for (let i = 0; i < 9; i++) {
  const row = [];
  for (let j = 0; j < 9; j++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${i}-${j}`; // Set a unique ID for each card
    grid.appendChild(card);
    row.push(card);

    card.addEventListener("click", () => flipCard(i, j));
  }
  gridData.push(row);
}

// Shuffle images
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(images);

// Handle form submission
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Generate a random question
  generateQuestion();
});

// Flip a card
function flipCard(row, col) {
  const card = gridData[row][col];

  if (!card.classList.contains("flipped")) {
    card.textContent = ""; // Clear any previous text content

    // Get the selected image object
    const selectedImageObj = images.find((image) => image.src === selectedImage);

    // Create an image element with the src of the selected image object
    const imageElement = document.createElement("img");
    imageElement.src = selectedImageObj.src;
    imageElement.id = selectedImageObj.id;

    imageElement.width = 50; // Change this to your desired width
    imageElement.height = 50; // Change this to your desired height

    // Append the image to the clicked card
    card.appendChild(imageElement);

    card.classList.add("flipped");
    checkMatch(row, col);

    // Increment the player's moves
    moves++;
    // Update the display to show the number of moves
    updateMoves();
  }
}

function checkMatch(row, col) {
  // Get the content of the clicked card
  const cardContent = gridData[row][col].textContent;

  // Check for a horizontal sequence match (1, 2, 3)
  let horizontalMatch = true;
  for (let i = col - 2; i <= col; i++) {
    if (i < 0 || i >= 9 || gridData[row][i].textContent !== (parseInt(cardContent) - 2).toString()) {
      horizontalMatch = false;
      break;
    }
  }

  // Check for a vertical sequence match (1, 2, 3)
  let verticalMatch = true;
  for (let i = row - 2; i <= row; i++) {
    if (i < 0 || i >= 9 || gridData[i][col].textContent !== (parseInt(cardContent) - 2).toString()) {
      verticalMatch = false;
      break;
    }
  }

  if (horizontalMatch || verticalMatch) {
    // Check if the sequence is 1, 2, 3
    if (cardContent === "1" && horizontalMatch) {
      // Increase the score when the sequence is found
      if (!alignmentScoreIncreased) {
        score++;
        updateScore();
        checkWin();
        alignmentScoreIncreased = true; // Mark that score has been increased for alignment
      }
    }
  }

  // Check if three suns are set together horizontally
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 7; j++) {
      const cards = [gridData[i][j], gridData[i][j + 1], gridData[i][j + 2]];
      const sunsSetTogether = cards.every((card) => {
        return card && card.querySelector("img") && card.querySelector("img").id === "1";
      });

      if (sunsSetTogether) {
        // Increase the score when three suns are set together horizontally
        if (!alignmentScoreIncreased) {
          score++;
          updateScore();
          checkWin();
          alignmentScoreIncreased = true; // Mark that score has been increased for alignment
        }
      }
    }
  }

  selectedImage = "";
  generateQuestion();
}



// Update the score
function updateScore() {
  scoreDiv.textContent = `Score: ${score}`;
}

// Update the moves
function updateMoves() {
  movesDiv.textContent = `Moves: ${moves}`;
}

// Generate a random question
function generateQuestion() {
  const randomIndex = Math.floor(Math.random() * images.length);
  selectedImage = images[randomIndex].src;

  // Create an image element
  const imageElement = document.createElement("img");
  imageElement.src = selectedImage;

  // Set the width and height of the image
  imageElement.width = 150; // Change this to your desired width
  imageElement.height = 150; // Change this to your desired height

  // Apply centering styles to the image
  imageElement.style.display = "block";
  imageElement.style.margin = "auto";

  // Clear the previous content of questionDiv and append the image
  questionDiv.innerHTML = "";
  questionDiv.appendChild(imageElement);
}

// Check for a win
function checkWin() {
  if (score >= 5) {
    questionDiv.textContent = "Congratulations! You won the game!";
    resetButton.style.display = "block";
  }
}

// Reset the game
resetButton.addEventListener("click", () => {
  location.reload();
});
