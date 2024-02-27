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
  translate( width * 0.5, height * 0.5);
  background('slategrey');
  stroke('white');
  strokeWeight(4);
  line(0 - width * 0.2, 0, width * 0.2, 0);
  line(0, 0 - height * 0.2, 0, height * 0.2);
}

function keyPressed() {
  if (key === 's') {
    save(`reg_${filename}_${currentMoment}.png`);
  }
}