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
