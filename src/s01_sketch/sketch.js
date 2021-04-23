/*
 *
  ▒█▀▄▀█ █▀▀█ ░▀░ █▀▀▄ 　 ▒█▀▀█ █░░ █▀▀█ ▀▀█▀▀ █▀▀ █▀▀█ █▀▀█ █▀▄▀█
  ▒█▒█▒█ █▄▄█ ▀█▀ █░░█ 　 ▒█▄▄█ █░░ █▄▄█ ░░█░░ █▀▀ █░░█ █▄▄▀ █░▀░█
  ▒█░░▒█ ▀░░▀ ▀▀▀ ▀░░▀ 　 ▒█░░░ ▀▀▀ ▀░░▀ ░░▀░░ ▀░░ ▀▀▀▀ ▀░▀▀ ▀░░░▀
 *
 */
const requiredTime = 30; // 1 sec = 1000 milliseconds.
let travelDistance;
let timeTraveled;
timeTraveled = 0;
const px1 = 100;
const py1 = 100;
const px2 = 500;
const py2 = 600;
const r1 = 50;
const r2 = 50;

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
    accumlativeCycles += 1;
    text('Cycles No. : ' + accumlativeCycles, 500, 700);
    // textSize(10);
  }
}


