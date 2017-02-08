
function preparePlaceHolder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.gif");
	placeholder.setAttribute("alt", "my image gallery");

	var description = document.createElement("p");
	description.setAttribute("id", "description");

	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);

	var gallery = document.getElementById("imagegallery");
	insertAfter(description, gallery);
	insertAfter(placeholder, description);
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
