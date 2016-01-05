"use strict";

//var screenShake = require("../../screen-shake");

//var camera = 10;
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function keepSpritesOnScreen(entity, elapsed) { // eslint-disable-line no-unused-vars
		game.entities.set(0, "spriteCount", game.entities.find("sprite").length);
		var size = game.entities.get(entity, "size");
		var position = game.entities.get(entity, "position");
		var velocity = game.entities.get(entity, "velocity");

		if (position.x < 0) {
			position.x = 0;
			velocity.x = -velocity.x;
		}
		if (position.x + size.width > game.canvas.width) {
			position.x = game.canvas.width - size.width;
			velocity.x = -velocity.x;
		}
		if (position.y < 120) {
			position.y = 120;
			velocity.y = -velocity.y;
		}
		if (position.y + size.height > game.canvas.height) {
			position.y = game.canvas.height - size.height;
			velocity.y = -velocity.y;
		}
	},"sprite");
};
