"use strict";

var random = require("./random");

var sprites = [
	"kickbot",
	"fluffykins",
	"carrot",
	"cartboy",
	"gingerboss",
	"stanley"
];

module.exports = function(game) {
	var newSprite = game.instantiatePrefab(random.from(sprites));
	game.entities.set(newSprite, "velocity", {
		"x": random.inRange(0.5, 1),
		"y": 0.5
	});
};
