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
  background('slategrey');
  stroke('white');
  noFill();
  arc(0, 0, width * 0.5, width * 0.5, 0, HALF_PI);
  fill('white');
  arc(0, 0, width * 0.5, width * 0.5, HALF_PI, PI, CHORD);
  noFill();
  arc(0, 0, width * 0.5, width * 0.5, PI, PI + QUARTER_PI, PIE);
  fill('white');
  arc(0, 0, width * 0.5, width * 0.5, PI + HALF_PI, 0, PIE);

}

function keyPressed() {
  if (key === 's') {
    save(`reg_${filename}_${currentMoment}.png`);
  }
}