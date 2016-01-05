"use strict";

var add = require("../../addSprite");// eslint-disable-line no-unused-vars

//var camera = 10;
module.exports = function(ecs,data) { // eslint-disable-line no-unused-vars
	ecs.add(function addSprite(elapsed) { // eslint-disable-line no-unused-vars
		if(data.input.buttonPressed("action")){
			for (var i = 0; i < 10; i++){
				add(data, "sprite");
			}
		}
	});
};
