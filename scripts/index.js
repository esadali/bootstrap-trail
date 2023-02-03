// Get the box element
const box = document.getElementById("box");
const score = document.getElementById("score-number");

// Set the initial position of the box
let x = 0;
let y = 0;

// Move the box to its initial position
box.style.left = x + "px";
box.style.top = y + "px";

// Move the box to a new random position every 100 milliseconds
setInterval(() => {
  x = Math.floor(Math.random() * 450);
  y = Math.floor(Math.random() * 450);
  box.style.left = x + "px";
  box.style.top = y + "px";
}, 100);

// Add an event listener to the box to increment the score when clicked
let points = 0;
box.addEventListener("click", () => {
  points++;
  score.innerHTML = points;
});
