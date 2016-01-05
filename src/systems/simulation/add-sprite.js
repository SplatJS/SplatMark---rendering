"use strict";

var add = require("../../addSprite");// eslint-disable-line no-unused-vars

//var camera = 10;
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.add(function addSprite(elapsed) { // eslint-disable-line no-unused-vars
		if (game.input.button("action") || game.input.mouse.isPressed(0)) {
			add(game, "sprite");
		}
	});
};
