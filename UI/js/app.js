
function toggleSignup(){
	document.getElementById("login-toggle").style.backgroundColor="#fff";
	document.getElementById("login-toggle").style.color="#222";
	document.getElementById("signup-toggle").style.backgroundColor="#5A67D8";
	document.getElementById("signup-toggle").style.color="#fff";
	document.getElementById("login-form").style.display="none";
	document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
	document.getElementById("login-toggle").style.backgroundColor="#5A67D8";
	document.getElementById("login-toggle").style.color="#fff";
	document.getElementById("signup-toggle").style.backgroundColor="#fff";
	document.getElementById("signup-toggle").style.color="#222";
	document.getElementById("signup-form").style.display="none";
	document.getElementById("login-form").style.display="block";
}

function submitSignIn(){

	// Stop default submission redirect
	event.preventDefault(); event.stopPropagation();

	var selectUserType = document.getElementById('input-user-type-login');
	var optionSelected = selectUserType.options[selectUserType.selectedIndex].value;

	redirectUserSession(optionSelected);
}

function submitSignUp(){
	
	// Stop default submission redirect
	event.preventDefault(); event.stopPropagation();
	
	var selectUserType = document.getElementById('input-user-type');
	var optionSelected = selectUserType.options[selectUserType.selectedIndex].value;

	redirectUserSession(optionSelected);
}

function redirectUserSession(userType) {
	
	var location = null;

	switch (userType) {
		case "admin":
			location = './admin/users.html';
			break;
		case "staff":
			location = './staff/bank-accounts.html';
			break;
		case "user":
			location = './user/dashboard.html';
			break;
	
		default:
			location = false;
			break;
	}

	// Simulate an HTTP redirect
	window.location.replace(location);
}

/**
 * Delete an account from bank accounts table.
 * 
 * @link https://www.sitepoint.com/javascript-event-delegation-is-easier-than-you-think
 */

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}
  
function deleteAccountRow(e) {

	// confirm that the target element is a table cell by checking its tag name
	var target = getEventTarget(e);
	if(target.tagName.toLowerCase() === 'a' && target.className.includes("delete")) {
		console.log("Event Target:", target); // alert(target);

		var row = target.parentNode.parentNode;
		row.parentNode.removeChild(row);
	}
}

document.getElementById("table-accounts").addEventListener("click", function (event) { 
	deleteAccountRow(event); 
});

/**
 * Smooth scrolling.
 * 
 * @link https://css-tricks.com/snippets/jquery/smooth-scrolling
 */
var btnScrollTop = document.getElementById("scroll-top");

var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

btnScrollTop.addEventListener("click", function(event) {
	window.scrollTo(0, 0); // Scroll to top of the page (currently not working)
});

window.addEventListener("scroll", function (event) {  

	console.log(scrollPosition);

	// if (scrollPosition > 300) {
	// 	btnScrollTop.classList.add("show");
	// } else {
	// 	btnScrollTop.classList.remove("show");
	// }
});
