/*
 *
  ▒█▀▄▀█ █▀▀█ ░▀░ █▀▀▄ 　 ▒█▀▀█ █░░ █▀▀█ ▀▀█▀▀ █▀▀ █▀▀█ █▀▀█ █▀▄▀█
  ▒█▒█▒█ █▄▄█ ▀█▀ █░░█ 　 ▒█▄▄█ █░░ █▄▄█ ░░█░░ █▀▀ █░░█ █▄▄▀ █░▀░█
  ▒█░░▒█ ▀░░▀ ▀▀▀ ▀░░▀ 　 ▒█░░░ ▀▀▀ ▀░░▀ ░░▀░░ ▀░░ ▀▀▀▀ ▀░▀▀ ▀░░░▀
 *
 */
const requiredTime = 10000; // 1 sec = 1000 millisec.
let travelDistance;
const px1 = 200;
const py1 = 300;
const px2 = 500;
const py2 = 500;

let distanceX = 200;
let distanceY = 300;

const xc = px2 - px1;
const yc = py2 - py1;

travelDistance = Math.sqrt((px2 - px1) ** 2 + (py2 - py1) ** 2);

let vx = (travelDistance / requiredTime) * 1000; // 1000 millisecond
let vy = (travelDistance / requiredTime) * 1000;
let calculateTime;
calculateTime = 0;
const fps = 60;

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

function particleX() {
  fill([123, 100, 140]);
  ellipse(200, 300, 100, 100);
  fill([212, 232, 123]);
  ellipse(500, 500, 100, 100);
  const ld = normalizeVector(px2, py2, px1, px2);

  distanceX = distanceX + (vx * (xc / ld) * deltaTime) / 1000;
  distanceY = distanceY + (vy * (yc / ld) * deltaTime) / 1000;

  fill([120, 150, 144]);
  ellipse(
      distanceX,
      distanceY,
      50 + Math.sin(parseFloat(frameCount / 10) * 30),
      50 + Math.sin(parseFloat(frameCount / 10) * 30),
  );
  console.log(50 + Math.sin(parseFloat(frameCount / 10) * 300));
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
}
