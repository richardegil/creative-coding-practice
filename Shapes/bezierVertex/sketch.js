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
let pt1, pt2, pt3, pt4;
let p1, p2, p3, p4;
let vectors = [];
let shuffled

function setup() {
  pixelDensity(2);
  maxCanvas = min(windowWidth, windowHeight);
  createCanvas(maxCanvas, maxCanvas);

  // Setting random values
  pt1 = createVector(random(0, width * 0.5), random(0, height * 0.5));
  pt2 = createVector(random(width * 0.5, width), random(0, height * 0.5));
  pt3 = createVector(random(width * 0.5, width), random(height * 0.5, height));
  pt4 = createVector(random(0, width * 0.5), random(height * 0.5, height));
  vectors = [pt1, pt2, pt3, pt4];
  shuffleArray(vectors);

  // Getting values from txt file
  // pt1 = createVector(197.8444638969146, 266.6745246600788, 0);
  // pt2 = createVector(640.8598857975712, 950.8568612902473, 0);
  // pt3 = createVector(1011.8115870442751, 74.8091120296026, 0);
  // pt4 = createVector(510.998397190112, 872.6402128037198, 0);
  // vectors = [pt1, pt2, pt3, pt4];
}

function draw() {
  
  background('slategrey');
  noFill();
  stroke('cyan');
  line(vectors[0].x, vectors[0].y, vectors[1].x, vectors[1].y);
  line(vectors[3].x, vectors[3].y, vectors[2].x, vectors[2].y);
  stroke('pink');
  ellipse(vectors[0].x, vectors[0].y, 10, 10);
  ellipse(vectors[1].x, vectors[1].y, 10, 10);
  ellipse(vectors[2].x, vectors[2].y, 10, 10);
  ellipse(vectors[3].x, vectors[3].y, 10, 10);
  stroke('white');
  beginShape();
    vertex(vectors[0].x, vectors[0].y);
    bezierVertex(vectors[1].x, vectors[1].y, vectors[2].x, vectors[2].y, vectors[3].x, vectors[3].y);
  endShape();
}

function keyPressed() {
  if (key === 's') {
    save(`reg_${filename}_${currentMoment}.png`);
    buildFile(vectors);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildFile(text) {
  const blob = new Blob([text], { type: "text/plain" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = `reg_${filename}_${currentMoment}_coordinates.txt`;
document.body.appendChild(a);
a.click();
URL.revokeObjectURL(url);
}