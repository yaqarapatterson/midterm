/******************

subscribe.js
comp 20 midterm
maya scandinaro 
03/10/20 

******************/

function validateForm() {
	var name = document.getElementsByName("name")[0].value;
	var email = document.getElementsByName("email")[0].value;
	var checked= document.querySelectorAll('input[name=interest]:checked').length;

	if (name == "") {
		alert("[SUBSCRIBE] Name invalid. Please input name.");
		document.getElementsByName("name")[0].focus();
		return false;
	} else if (email == "" || !(email.indexOf('@') > -1) || 
	   !(email.indexOf('.') > -1) || !(email.length > 2)) {
		alert("[SUBSCRIBE] Email invalid. Must include '@' and '.' characters.");
		document.getElementsByName("email")[0].focus();
		return false;
	} else if (checked < 2) {
		alert("[SUBSCRIBE] Please select at least two activities that interest you.");
		return false;
	} else {
		alert("Thank you for subscribing, " + name + 
			  "!\nYou're signed up to receive emails at [" + email + "].");
		return true;
	}
}

function validateDonation() {
	var name = document.getElementsByName("donateName")[0].value;
	var amt = document.getElementsByName("amt")[0].value;

	if (name == "") {
		alert("[DONATION] Name invalid. Please input name.");
		document.getElementsByName("donateName")[0].focus();
		return false;
	} else if (isNaN(amt) || amt == ""){
		alert("[DONATION] Amount invalid. Please input numbers only.");
		document.getElementsByName("amt")[0].focus();
		return false;
	} else {
		alert("Thank you for donating $" + amt + ", " + name +
			  "!");
		return true;
	}
}

$(function() {
	$("#tooltip").tooltip();
});



