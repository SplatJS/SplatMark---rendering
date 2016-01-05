"use strict";

//var screenShake = require("../../screen-shake");

//var camera = 10;
module.exports = function(ecs,data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function keepSpritesOnScreen(entity, elapsed) { // eslint-disable-line no-unused-vars
		data.entities.set(0, "spriteCount", data.entities.find("sprite").length);
		var size = data.entities.get(entity, "size");
		var position = data.entities.get(entity, "position");
		var velocity = data.entities.get(entity, "velocity");



		if (position.x < 0) {
			position.x = 0;
			velocity.x = -velocity.x;
		}
		if (position.x + size.width > data.canvas.width) {
			position.x = data.canvas.width - size.width;
			velocity.x = -velocity.x;
		}
		if (position.y < 120) {
			position.y = 120;
			velocity.y = -velocity.y;

		}
		if (position.y + size.height > data.canvas.height) {
			position.y = data.canvas.height - size.height;
			velocity.y = -velocity.y;

		}
	},"sprite");
};
