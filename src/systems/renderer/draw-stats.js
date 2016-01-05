"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function(entity, context) { // eslint-disable-line no-unused-vars
		context.fillStyle = "white";
		context.font = "18px helvetica";
		var spriteCount = game.entities.get(0, "spriteCount");
		context.fillText("Sprites: " + spriteCount, 20, 35);
		context.fillText("Press Space to add more", 20, 75);
	});
};
