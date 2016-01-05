"use strict";

var graphBars = 100;
var position = {
	"x": 380,
	"y": 110
};

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function fpsGraph(entity, context, elapsed) { // eslint-disable-line no-unused-vars
		var timers = game.entities.get(entity, "timers");
		var fpsGraphIndex = game.entities.get(entity, "fps-graph-index");
		if (!fpsGraphIndex) {
			game.entities.set(entity, "fps-graph-index", 0);
		}
		var fpsGraph = game.entities.get(entity, "fps-graph");
		if (!fpsGraph) {
			var array = [];
			for (var i = 0; i < graphBars; i++) {
				array.push(0);
			}
			game.entities.set(entity, "fps-graph", array);
			game.entities.set(entity, "timers", {
				"logFps": {
					"running": true,
					"time": 0,
					"max": 1
				}
			});
		} else {
			var fps = Math.floor(1000 / elapsed);
			//console.log(game.entities.get(entity, "fps-graph"));
			if (!timers.logFps.running) {

				if (fpsGraphIndex < graphBars) {
					fpsGraph[fpsGraphIndex] = fps;
					game.entities.set(entity, "fps-graph-index", fpsGraphIndex + 1);
				} else {
					game.entities.set(entity, "fps-graph-index", 0);
				}
				timers.logFps.running = true;
			}
			for (var j = 0; j < fpsGraph.length; j++) {
				context.fillStyle = "white";
				context.fillRect(position.x + (4 * j), position.y, 2, -(fpsGraph[j] * 0.5));
			}
		}
	}, "camera");
};
