"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function drawStats(entity) { // eslint-disable-line no-unused-vars
		game.renderer.fillStyle = "white";
		game.renderer.font = "18px helvetica";
		var spriteCount = game.entities.find("sprite").length;
		game.renderer.fillText("Sprites: " + spriteCount, 20, 35);
		game.renderer.fillText("Click or press Space to add more", 20, 75);
	});
};
