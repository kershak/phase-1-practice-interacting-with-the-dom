let counter = 0;
let isPaused = false;
let likes = {};

const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const pauseButton = document.getElementById("pause");
const likeButton = document.getElementById("like");
const commentsSection = document.getElementById("comments");

function updateCounter() {
  counterElement.textContent = counter;
}

function incrementCounter() {
  if (!isPaused) {
    counter++;
    updateCounter();
  }
}

function decrementCounter() {
  if (!isPaused) {
    counter--;
    updateCounter();
  }
}

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    pauseButton.textContent = "Resume";
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
  } else {
    pauseButton.textContent = "Pause";
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
  }
}

function likeCounter() {
  if (!isPaused) {
    if (likes[counter] === undefined) {
      likes[counter] = 1;
    } else {
      likes[counter]++;
    }
    likeButton.textContent = `Like (${likes[counter]})`;
  }
}

function addComment(comment) {
  const commentElement = document.createElement("p");
  commentElement.textContent = comment;
  commentsSection.appendChild(commentElement);
}

// Update the counter every second
setInterval(incrementCounter, 1000);

// Add event listeners for buttons
plusButton.addEventListener("click", incrementCounter);
minusButton.addEventListener("click", decrementCounter);
pauseButton.addEventListener("click", togglePause);
likeButton.addEventListener("click", likeCounter);

// Example comment
addComment("Wow, what a fun game this is!");

// Initial counter display
updateCounter();