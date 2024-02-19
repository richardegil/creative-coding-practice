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
let offset;

function setup() {
  pixelDensity(2);
  maxCanvas = min(windowWidth, windowHeight);
  createCanvas(maxCanvas, maxCanvas);
  offset = width * 0.2;
}

function draw() {
  translate( width / 2, height / 2);
  background('lightgrey');
  stroke('white');
  triangle(0, 0 - offset, offset, offset, 0 - offset, offset);
}

function keyPressed() {
  if (key === 's') {
    save(`reg_${filename}_${currentMoment}.png`);
  }
}