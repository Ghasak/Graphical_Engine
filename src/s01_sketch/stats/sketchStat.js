function screenStats() {
  fill([0, 0, 0]);
  text('FPS: ' + int(getFrameRate()), 900, 20);
  text(
      'Time Delta \n at each frame:' + parseInt(deltaTime, 10),
      width / 2 + 400,
      height / 4 - 150,
  );
}
