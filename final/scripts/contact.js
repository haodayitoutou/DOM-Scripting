
function focusLabels() {
	if (!document.getElementsByTagName) return false;

	//get all label elements
	var labels = document.getElementsByTagName("label");

	for (var i=0; i< labels.length; i++) {
		//if the label has a for attribute
		if (!labels[i].getAttribute("for")) continue;

		labels[i].onclick = function() {
			var id = labels[i].getAttribute("for"); //for attribute is id of a form element

			if (!document.getElementById(id)) return false; //make sure the form element exists

			var formEle = document.getElementById(id);
			element.focus();
		}
	}
}


function resetFields(whichform) {
	for (var i=0; i< whichform.elements.length; i++) {
		var element = whichform.elements[i];
		if (element.type == "submit") continue;
		if (!element.defaultValue) continue;

		element.onfocus = function() {
			if (this.value == this.defaultValue) {
				this.value = "";
			}
		}

		element.onblur = function() {
			if (this.value == "") {
				this.value = this.defaultValue;
			}
		}
	}
}


function prepareForms() {
	for (var i=0; i<document.forms.length; i++) {
		var thisform = document.forms[i];
		resetFields(thisform);
	}
}

addLoadEvent(focusLabels);
addLoadEvent(prepareForms);
