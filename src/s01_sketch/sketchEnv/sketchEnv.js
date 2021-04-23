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
