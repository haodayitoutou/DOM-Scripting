function displayAccesskeys() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
    return false; }

  //get all links
  var links = document.getElementsByTagName("a");
  if (links.length < 1) return false;

  var list = document.createElement("ul");
  for (var i=0; i < links.length; i++) {
    link = links[i];
    if (!link.getAttribute("accesskey")) continue;

    key = link.getAttribute("accesskey");
    link_text = link.lastChild.nodeValue;

    var str = key + ": " + link_text;
    item = document.createElement("li");
    item_text = document.createTextNode(str);
    item.appendChild(item_text);

    list.appendChild(item);
  }

  var header = document.createElement("h3");
  var header_text = document.createTextNode("Access keys");
  header.appendChild(header_text);

  document.body.appendChild(header);
  document.body.appendChild(list);

}

addLoadEvent(displayAccesskeys);
