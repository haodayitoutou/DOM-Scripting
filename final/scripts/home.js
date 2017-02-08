
function moveElement(elementID, finalX, finalY, interval) {
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

	if (xpos == finalX && ypos == finalY) {
		return true;
	}

	if (xpos < finalX) {
		var dist = Math.ceil( (finalX - xpos)/10 );
		xpos = xpos + dist;
	}

	if (xpos > finalX) {
		var dist = Math.ceil( (xpos - finalX)/10 );
		xpos = xpos - dist;
	}

	if (ypos < finalY) {
		var dist = Math.ceil( (finalY - ypos)/10 );
		ypos = ypos + dist;
	}

	if (ypos > finalY) {
		var dist = Math.ceil( (ypos - finalY)/10 );
		ypos = ypos - dist;
	}

	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";

	var repeat = "moveElement('"+elementID+"', "+finalX+", "+finalY+", "+interval+")";

	elem.movement = setTimeout(repeat, interval);

}


function prepareSlideshow() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("intro")) return false;

  var intro = document.getElementById("intro");
  var slideshow = document.createElement("div");
  slideshow.setAttribute("id", "slideshow");

	var frame = document.createElement("img");
	frame.setAttribute("src", "images/frame.gif");
	frame.setAttribute("alt", "");
	frame.setAttribute("id", "frame");
	slideshow.appendChild(frame);

  var preview = document.createElement("img");
  preview.setAttribute("src", "images/slideshow.gif");
  preview.setAttribute("alt", "a glimpse of what awaits you");
  preview.setAttribute("id", "preview");

  slideshow.appendChild(preview);
  insertAfter(slideshow, intro);

  var links = document.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    links[i].onmouseover = function() {
      var destination = this.getAttribute("href");

      if (destination.indexOf("index.html") !=-1 ) {
        moveElement("preview", 0, 0, 5);
      }
      if (destination.indexOf("about.html") !=-1 ) {
        moveElement("preview", -150, 0, 5);
      }
      if (destination.indexOf("photos.html") !=-1 ) {
        moveElement("preview", -300, 0, 5);
      }
      if (destination.indexOf("live.html") !=-1 ) {
        moveElement("preview", -450, 0, 5);
      }
      if (destination.indexOf("contact.html") !=-1 ) {
        moveElement("preview", -600, 0, 5);
      }
    }
  }

}


addLoadEvent(prepareSlideshow);
