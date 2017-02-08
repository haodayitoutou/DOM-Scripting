
function stripeTables() {
	if (!document.getElementsByTagName) return false;

	var tables = document.getElementsByTagName("table");
	for (var i=0; i<tables.length; i++) {
		var odd = false;

		var rows = tables[i].getElementsByTagName("tr");
		for (var j=0; j<rows.length; j++) {
			if (odd) {
				rows[j].className = "odd";
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}


function hightlightRows() {
	if (!document.getElementsByTagName) return false;

	var rows = document.getElementsByTagName("tr");
	for (var i=0; i < rows.length; i++) {
		rows[i].onmouseover = function() {
			this.style.fontWeight = "bold";
		}

		rows[i].onmouseout = function() {
			this.style.fontWeight = "normal";
		}
	}
}


function displayAbbreviations () {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
    return false;
  }

  //get all abbreviations
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;

  //information from abbr element
  var defs = new Array();
  for (var i =0; i < abbreviations.length; i++) {
    var definition = abbreviations[i].getAttribute("title");
    var key = abbreviations[i].lastChild.nodeValue;

    defs[key] = definition;
  }

  //create the markup
  var dlist = document.createElement("dl");
  for (key in defs) {
    var definition = defs[key];

    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);

    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);

    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }


  //create a headline
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);

  document.body.appendChild(header);
  document.body.appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(hightlightRows);
addLoadEvent(displayAbbreviations);
