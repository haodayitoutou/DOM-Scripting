
function prepareSlideshow() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;

	if (!document.getElementById("linklist")) return false;

	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");

	var preview = document.createElement("img");
	preview.setAttribute("src", "topics.png");
	preview.setAttribute("alt", "building blocks of web design");
	preview.setAttribute("id", "preview");

	slideshow.appendChild(preview);

	var list = document.getElementById("linklist");
	insertAfter(slideshow, list);

	var links = list.getElementsByTagName("a");

	//attach animation behavior to the mouseover event
	links[0].onmouseover = function() {
		moveElement("preview", -190, 0, 10);
	}
	links[1].onmouseover = function() {
		moveElement("preview", -380, 0, 10);
	}
	links[2].onmouseover = function() {
		moveElement("preview", -570, 0, 10)
	}
}

addLoadEvent(prepareSlideshow);
