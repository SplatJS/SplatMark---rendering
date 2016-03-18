"use strict";

//var screenShake = require("../../screen-shake");

//var camera = 10;
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  game.entities.registerSearch("keep-sprites-on-screen", ["size", "position", "velocity"]);
  ecs.addEach(function keepSpritesOnScreen(entity, elapsed) { // eslint-disable-line no-unused-vars
    var size = game.entities.get(entity, "size");
    var position = game.entities.get(entity, "position");
    var velocity = game.entities.get(entity, "velocity");

    if (position.x < 0) {
      position.x = 0;
      velocity.x *= -1;
    }
    if (position.x + size.width > game.canvas.width) {
      position.x = game.canvas.width - size.width;
      velocity.x *= -1;
    }
    if (position.y < 120) {
      position.y = 120;
      velocity.y *= -1;
    }
    if (position.y + size.height > game.canvas.height) {
      position.y = game.canvas.height - size.height;
      velocity.y *= -1;
    }
  }, "keep-sprites-on-screen");
};
