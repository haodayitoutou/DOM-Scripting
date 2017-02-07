
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}


function inserAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}


function preparePlaceHolder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.png");
	placeholder.setAttribute("alt", "my image gallery");

	var description = document.createElement("p");
	description.setAttribute("id", "description");

	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);

	var gallery = document.getElementById("imagegallery");
	inserAfter(placeholder, gallery);
	inserAfter(description, placeholder);
}


function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");

	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			return showPic(this);
		}
	}
}


function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var place = document.getElementById("placeholder");
	place.setAttribute( "src", source);

	if (!document.getElementById("description")) return false;
	//var text = whichpic.getAttribute("title");
	var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "No Title";
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;

	return false;
}


addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);
