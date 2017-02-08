
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
		thisform.onsubmit = function() {
			return validateForm(this);
		}
	}
}


function isFilled(field) {
	if (field.value.length < 1 || field.value == field.defaultValue) {
		return false;
	} else {
		return true;
	}
}

function isEmail(field) {
	if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
		return false;
	} else {
		return true;
	}
}

function validateForm(whichform) {
	for (var i=0; i < whichform.elements.length; i++) {
		var element = whichform.elements[i];

		if (element.className.indexOf("required") != -1) {
			if (!isFilled(element)) {
				alert("Please fill in the "+element.name+" field.");
				return false;
			}
		}

		if (element.className.indexOf("email") != -1) {
			if (!isEmail(element)) {
				alert("The "+element.name+" field must be a valid email address.");
				return false;
			}
		}
	}
	return true;
}



addLoadEvent(focusLabels);
addLoadEvent(prepareForms);
