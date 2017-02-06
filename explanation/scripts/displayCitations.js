function displayCitations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
    return false; }

  //get all blockquotes
  var quotes = document.getElementsByTagName("blockquote");
  if (quotes.length < 1) return false;

  var cites = new Array();
  for (var i = 0; i<quotes.length; i++) {
    if (!quotes[i].getAttribute("cite")) {continue;}

    var url = quotes[i].getAttribute("cite");

    //blockquote element must contain block level elements (e.g. <p>) to contain
    //  the text being quoted

    //place the link at the end of the last child element node
    var quoteChildren = quotes[i].getElementsByTagName("*");
    if (quoteChildren.length < 1) continue;

    var elem = quoteChildren[ quoteChildren.length - 1];

    var link = document.createElement("a");
    var link_text = document.createTextNode("source");

    link.appendChild(link_text);
    link.setAttribute("href", url);

    var superscript = document.createElement("sup");
    superscript.appendChild(link);

    elem.appendChild(superscript);
  }

}

addLoadEvent(displayCitations);
