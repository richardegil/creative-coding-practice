/* ------------------------------ */
// PROJECT INFO
/* ------------------------------ */
let locationData = window.location.pathname;
let path = locationData.substring(0, locationData.lastIndexOf("/"));
let directoryName = path.substring(path.lastIndexOf("/")+1);
let filename = directoryName;

/* ------------------------------ */
// DATE
/* ------------------------------ */
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Adding 1 because month is zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
let currentMoment = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;

/* ------------------------------ */
// VARIABLES
/* ------------------------------ */

function setup() {
  pixelDensity(2);
  maxCanvas = min(windowWidth, windowHeight);
  createCanvas(maxCanvas, maxCanvas);
}

function draw() {
  translate( width / 2, height / 2);
  background('slategrey');
  stroke('white');
  strokeWeight(10);
  rectMode(CENTER);
  rect(0, 0, width * 0.25, height * 0.25);

}

function keyPressed() {
  if (key === 's') {
    save(`reg_${filename}_${currentMoment}.png`);
  }
}