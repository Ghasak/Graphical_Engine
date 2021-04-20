/*
 *
 *
 */
const requiredTime = 1000;
let travelDistance;
const px1 = 300;
const py1 = 200;
const px2 = 500;
const py2 = 200;

travelDistance = Math.sqrt((px2 - px1) ** 2 + (py2 - py1) ** 2);

const vx = (travelDistance / requiredTime) * 1000;
const vy = (travelDistance / requiredTime) * 1000;

function setup() {
  /** It will used for setup your objects
   *
   */

  createCanvas(1000, 800);
  console.log('Its working');
}

function draw() {
  /* Drawing function where you can get all the objects moving
   *
   */
  background(220);
  screenStats();
}

function screenStats() {
  text('travel distance ' + int(getFrameRate()), 900, 20);
  text(
      'Time Detla : ' + parseInt(deltaTime, 10),
      width / 2 + 400,
      height / 4 - 150,
  );
}
