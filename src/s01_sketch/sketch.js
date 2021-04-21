/*
 *
  ▒█▀▄▀█ █▀▀█ ░▀░ █▀▀▄ 　 ▒█▀▀█ █░░ █▀▀█ ▀▀█▀▀ █▀▀ █▀▀█ █▀▀█ █▀▄▀█
  ▒█▒█▒█ █▄▄█ ▀█▀ █░░█ 　 ▒█▄▄█ █░░ █▄▄█ ░░█░░ █▀▀ █░░█ █▄▄▀ █░▀░█
  ▒█░░▒█ ▀░░▀ ▀▀▀ ▀░░▀ 　 ▒█░░░ ▀▀▀ ▀░░▀ ░░▀░░ ▀░░ ▀▀▀▀ ▀░▀▀ ▀░░░▀
 *
 */
const requiredTime = 10; // 1 sec = 1000 millisec.
let travelDistance;
let timeTraveled;
timeTraveled = 0;
const px1 = 200;
const py1 = 300;
const px2 = 500;
const py2 = 500;

let distanceX = 200;
let distanceY = 300;

const xc = px2 - px1;
const yc = py2 - py1;

travelDistance = Math.sqrt((px2 - px1) ** 2 + (py2 - py1) ** 2);

let vx = travelDistance / (requiredTime * 1000); // 1000 millisecond
let vy = travelDistance / (requiredTime * 1000);
let calculateTime;
calculateTime = 0;
const fps = 60;
let switchx;
switchx = false;
let stoppingTime;

function setup() {
  /** It will used for setup your objects
   *
   */

  createCanvas(1000, 800);
  frameRate(60);
}

function draw() {
  /* Drawing function where you can get all the objects moving
   *
   */

  background(100, 200, 200);
  screenStats();
  particleX();
  checkBoudaries();
  timeelapsed();
  arrivalParticle();
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

function arrivalParticle() {
  if (distanceX >= px2 && distanceY >= py2) {
    // textSize(20);
    switchx = true;
    stoppingTime = timeTraveled;
  }

  if (switchx === true) {
    text(
        'Arrive at : ' + (stoppingTime / 1000).toFixed(2) + ' Sec. ',
        500,
        600,
    );
    // textSize(10);
  }
}

function particleX() {
  fill([123, 100, 140]);
  ellipse(200, 300, 100, 100);
  fill([212, 232, 123]);
  ellipse(500, 500, 100, 100);
  const ld = normalizeVector(px2, py2, px1, px2);

  distanceX = distanceX + vx * (xc / ld) * deltaTime;
  distanceY = distanceY + vy * (yc / ld) * deltaTime;

  fill([120, 150, 144]);
  ellipse(
      distanceX,
      distanceY,
      50 + sin(frameCount / 10) * 20,
      50 + sin(frameCount / 10) * 20,
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
      distanceX + 10,
      distanceY + 10,
  );
  text('FrameCount: ' + parseFloat(fc), distanceX + 20, distanceY + 20);
  text(
      'Ellapsed Time: ' + (fc / fps).toFixed(3),
      distanceX + 40,
      distanceY + 40,
  );
  timeTraveled = timeTraveled + deltaTime;
  text(
      'Real Time Traveled (sec): ' + (timeTraveled / 1000).toFixed(2),
      distanceX + 50,
      distanceY + 50,
  );
}
