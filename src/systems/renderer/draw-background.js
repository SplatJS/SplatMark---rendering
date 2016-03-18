"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  ecs.add(function drawBackground(entity, context) { // eslint-disable-line no-unused-vars
    context.fillStyle = "#242521";
    context.fillRect(0, 0, game.canvas.width, 120);
    context.fillStyle = "#799DA3";
    context.fillRect(0, 120, game.canvas.width, game.canvas.height - 120);
  });
};
