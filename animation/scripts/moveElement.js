
function moveElement(elementID, finalX, finaY, interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;

	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}

	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}

	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);

	if (xpos == finalX && ypos == finaY) {
		return true;
	}

	if (xpos < finalX) {
		var dist = Math.ceil( (finalX - xpos)/5 );
		xpos = xpos + dist;
	}

	if (xpos > finalX) {
		var dist = Math.ceil( (xpos - finalX)/5 );
		xpos = xpos - dist;
	}

	if (ypos < finaY) {
		var dist = Math.ceil( (finaY - ypos)/5 );
		ypos = ypos + dist;
	}

	if (ypos > finaY) {
		var dist = Math.ceil( (ypos - finaY)/5 );
		ypos = ypos - dist;
	}

	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";

	var repeat = "moveElement('"+elementID+"', "+finalX+", "+finaY+", "+interval+")";

	elem.movement = setTimeout(repeat, interval);

}
