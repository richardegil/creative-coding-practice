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
let p1, p2, p3, p4;

function setup() {
  pixelDensity(2);
  maxCanvas = min(windowWidth, windowHeight);
  createCanvas(maxCanvas, maxCanvas);

  p1 = createVector(random(0, width * 0.5), random(0, height * 0.5));
  p2 = createVector(random(width * 0.5, width), random(0, height * 0.5));
  p3 = createVector(random(width * 0.5, width), random(height * 0.5, height));
  p4 = createVector(random(0, width * 0.5), random(height * 0.5, height));
}

function draw() {
  noLoop();
  background('lightgrey');
  stroke('white');
  fill('white');
  beginShape(LINES);
    vertex(p1.x, p1.y);
    vertex(p2.x, p2.y);
    vertex(p3.x, p3.y);
    vertex(p4.x, p4.y);
  endShape(CLOSE);
  fill('red');
  ellipse(p1.x, p1.y, 10, 10);
  fill('green');
  ellipse(p2.x, p2.y, 10, 10);
  fill('blue');
  ellipse(p3.x, p3.y, 10, 10);
  fill('yellow');
  ellipse(p4.x, p4.y, 10, 10);

  beginShape(POINTS);
    for (let i = width * 0.2; i < (width - (width * 0.2)); i++) {
      strokeWeight(5);
      stroke('white');
      fill('white');
      point(i, height * 0.5);
    }
  endShape(CLOSE);

  beginShape(POINTS);
    for (let i = width * 0.2; i < (width - (width * 0.2)); i+=10) {
      strokeWeight(5);
      stroke('snow');
      let y = random(height * 0.5 - height * 0.1, height * 0.5 + height * 0.1)
      point(i, y);
    }
  endShape(CLOSE);

}

function keyPressed() {
  if (key === 's') {
    save(`reg_${filename}_${currentMoment}.png`);
  }
}