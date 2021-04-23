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

function particleX() {
  line(px1, py1, px2, py2);
  fill([12, 100, 20]);
  fill([123, 100, 140]);
  ellipse(px1, py1, r1, r1);
  fill([0, 200, 0]);
  ellipse(px2, py2, r2, r2);

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
