/** ***************************************************************************
 *
        ▒█▀▄▀█ █▀▀█ ░▀░ █▀▀▄ 　 ▒█▀▀█ █░░ █▀▀█ ▀▀█▀▀ █▀▀ █▀▀█ █▀▀█ █▀▄▀█
        ▒█▒█▒█ █▄▄█ ▀█▀ █░░█ 　 ▒█▄▄█ █░░ █▄▄█ ░░█░░ █▀▀ █░░█ █▄▄▀ █░▀░█
        ▒█░░▒█ ▀░░▀ ▀▀▀ ▀░░▀ 　 ▒█░░░ ▀▀▀ ▀░░▀ ░░▀░░ ▀░░ ▀▀▀▀ ▀░▀▀ ▀░░░▀
 *
  *****************************************************************************
*/
// define global variables
const requiredTime = 50; // 1 sec = 1000 milliseconds.
let travelDistance;
let timeTraveled;
timeTraveled = 0;
const px1 = 400;
const py1 = 100;
const px2 = 800;
const py2 = 500;
const r1 = 10;
const r2 = 10;

let distanceX = px1;
let distanceY = py1;

const xc = px2 - px1;
const yc = py2 - py1;

travelDistance = Math.sqrt((px2 - px1) ** 2 + (py2 - py1) ** 2);

let vx = travelDistance / (requiredTime * 1000); // 1000 millisecond
let vy = travelDistance / (requiredTime * 1000);
let calculateTime;
calculateTime = 0;
let switchx;
switchx = false;
const fps = 60;
let stoppingTime;
let accumlativeCycles = 0;

// Setup canvas
function setup() {
  /** It will used for setup your objects
   *
   */

  createCanvas(1000, 800);
  frameRate(60);
}
// Dyanmic 60 fps draw on canvas
function draw() {
  /* Drawing function where you can get all the objects moving
   *
   */

  background(100, 140, 130);
  screenStats();
  checkBoudaries();
  arrivalParticle();
  timeelapsed();
  particleX();
  console.log('How Many Frames per Second : ' + requestAnimFrame());
}
// Functions and  utilities
function particleX() {
  line(px1, py1, px2, py2);
  fill([12, 100, 20]);
  fill([123, 100, 140]);
  ellipse(
      px1,
      py1,
      r1 + Math.sin(frameCount / 10) * 20,
      r1 + Math.sin(frameCount / 10) * 20,
  );
  fill([0, 200, 0]);
  ellipse(
      px2,
      py2,
      r2 + Math.sin(frameCount / 10) * 20,
      r2 + Math.sin(frameCount / 10) * 20,
  );

  const ld = normalizeVector(px1, py1, px2, py2);

  distanceX = distanceX + vx * (xc / ld) * deltaTime;
  distanceY = distanceY + vy * (yc / ld) * deltaTime;

  fill([120, 150, 144]);
  ellipse(
      distanceX,
      distanceY,
      50 + Math.sin(frameCount / 10) * 20,
      50 + Math.sin(frameCount / 10) * 20,
  );
  fill(10, 10, 10);

  text(
      'Position:<' + distanceX.toFixed(2) + ',' + distanceY.toFixed(2) + '>',
      distanceX,
      distanceY,
  );
}

function timeelapsed() {
  const fc = frameCount;
  calculateTime += deltaTime / 1000;
  text(
      'Time Ellapsed:' + calculateTime.toFixed(2),
      distanceX - 300,
      distanceY - 50,
  );
  text('FrameCount: ' + parseFloat(fc), distanceX + 20, distanceY + 20);
  text(
      'Ellapsed Time: ' + (fc / fps).toFixed(3),
      distanceX - 300,
      distanceY - 75,
  );
  timeTraveled = timeTraveled + deltaTime;
  text(
      'Real Time Traveled (sec): ' + (timeTraveled / 1000).toFixed(2),
      distanceX - 300,
      distanceY - 90,
  );
  line(distanceX, distanceY, distanceX - 150, distanceY - 50);
}

function normalizeVector(px1, py1, px2, py2) {
  const L = Math.sqrt((px1 - px2) ** 2 + (py1 - py2) ** 2);
  return L;
}

function checkBoudaries() {
  if (distanceX >= px2 || distanceX <= px1) {
    vx = -1 * vx;
    // console.log('Reached to y' + vx);
  }

  if (distanceY >= py2 || distanceY <= py1) {
    vy = -1 * vy;
  }
}

// textSize(20);
function arrivalParticle() {
  if (distanceX >= px2 && distanceY >= py2) {
    switchx = true;
    stoppingTime = timeTraveled;
  }

  if (switchx === true) {
    text(
        'Arrive at : ' + (stoppingTime / 1000).toFixed(2) + ' Sec. ',
        px2 - 150,
        py2 + 30,
    );
    accumlativeCycles += 1;
    text('Cycles No. : ' + accumlativeCycles, px2 - 150, py2 + 10);
    // textSize(10);
  }
}

function screenStats() {
  fill([0, 0, 0]);
  text('FPS: ' + int(getFrameRate()), 900, 20);
  text(
      'Time Delta \n at each frame:' + parseInt(deltaTime, 10),
      width / 2 + 400,
      height / 4 - 150,
  );
}

let lastCalledTime;
let fps2;
// Function to calcuate the frame per second
function requestAnimFrame() {
  if (!lastCalledTime) {
    lastCalledTime = Date.now();
    fps2 = 0;
    return fps;
  }
  delta = (Date.now() - lastCalledTime) / 1000;
  lastCalledTime = Date.now();
  fps2 = 1 / delta;
  // console.clear();
  console.log('\n'.repeat('100'));
  return parseInt(fps2);
}

// My clear console function
