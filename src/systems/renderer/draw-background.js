"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function drawBackground(entity, context) { // eslint-disable-line no-unused-vars
		game.renderer.fillStyle = "#242521";
		game.renderer.fillRect(0, 0, game.canvas.width, 120);
		game.renderer.fillStyle = "#799DA3";
		game.renderer.fillRect(0, 120, game.canvas.width, game.canvas.height - 120);
	});
};
