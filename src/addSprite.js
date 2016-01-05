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
module.exports = function(data) {
	var newSprite = data.instantiatePrefab(random.from(sprites));
	data.entities.set(newSprite, "velocity", {
		"x": random.inRange(0.5, 1),
		"y": 0.5
	});
};
