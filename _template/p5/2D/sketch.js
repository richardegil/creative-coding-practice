/* ------------------------------ */
// PROJECT INFO
/* ------------------------------ */
let filename = getProjectName();

/* ------------------------------ */
// DATE
/* ------------------------------ */
let currentMoment = getCurrentDate();

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
  background('lightgrey');
  stroke('white');

}

function keyPressed() {
  if (key === 's') {
    save(`reg_${filename}_${currentMoment}.png`);
  }
}