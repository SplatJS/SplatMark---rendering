"use strict";


module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars

	ecs.add(function(entity, context) { // eslint-disable-line no-unused-vars
		context.fillStyle = "#242521";
		context.fillRect(0, 0, data.canvas.width, 120);
		context.fillStyle = "#799DA3";
		context.fillRect(0, 120, data.canvas.width, data.canvas.height - 120);

	});

};
