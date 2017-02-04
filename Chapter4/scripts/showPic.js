
function showPic(whichpic)
{
	if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var place = document.getElementById("placeholder");	
	place.setAttribute( "src", source);

	if (!document.getElementById("description")) return false;
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;

	return false;
}

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementByTagName("a");

	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			showPic(this);
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;

	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}