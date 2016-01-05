"use strict";

var graphBars = 100;
var position = {
	"x": 380,
	"y": 110
};
module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars

	ecs.addEach(function(entity, context, elapsed) { // eslint-disable-line no-unused-vars
		var timers = data.entities.get(entity, "timers");
		var fpsGraphIndex = data.entities.get(entity, "fps-graph-index");
		if(!fpsGraphIndex){
			data.entities.set(entity, "fps-graph-index", 0);
		}
		var fpsGraph = data.entities.get(entity, "fps-graph");
		if(!fpsGraph){
			var array = [];
			for (var i = 0; i < graphBars; i++){
				array.push(0);
			}
			data.entities.set(entity, "fps-graph", array);
			data.entities.set(entity, "timers",{
				"logFps":{
					"running": true,
					"time": 0,
					"max": 1
				}
			});
		}else{
			var fps = Math.floor(1000 / elapsed);
			//console.log(data.entities.get(entity, "fps-graph"));
			if(!timers.logFps.running){

				if (fpsGraphIndex < graphBars) {
					fpsGraph[fpsGraphIndex] = fps;
					data.entities.set(entity, "fps-graph-index", fpsGraphIndex + 1);
				}else{
					data.entities.set(entity, "fps-graph-index", 0);
				}
				timers.logFps.running = true;
			}
			for (var j = 0; j < fpsGraph.length; j++){
				context.fillStyle = "white";
				context.fillRect(position.x + (4 * j), position.y, 2, -(fpsGraph[j] * 0.5));
			}
		}
	}, "camera");
};
