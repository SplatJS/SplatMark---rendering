"use strict";

var position = {
  "x": 380,
  "y": 110
};

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  ecs.addEach(function renderFpsGraph(entity, context, elapsed) { // eslint-disable-line no-unused-vars
    var timers = game.entities.get(entity, "timers");
    var fps = game.entities.get(entity, "fps");
    while (fps.bars.length < fps.totalBars) {
      fps.bars.push(0);
    }

    if (!timers.logFps.running) {
      if (fps.index < fps.bars.length) {
        var currfps = Math.floor(1000 / elapsed);
        fps.bars[fps.index] = currfps;
        fps.index++;
      } else {
        fps.index = 0;
      }
      timers.logFps.running = true;
    }
    for (var j = 0; j < fps.bars.length; j++) {
      context.fillStyle = "white";
      context.fillRect(position.x + (4 * j), position.y, 2, -(fps.bars[j] * 0.5));
    }
  }, "camera");
};
