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

function submitSignUp(){
	var selectUserType = document.getElementById('input-user-type');
	var optionSelected = selectUserType.options[selectUserType.selectedIndex].value;

	switch (optionSelected) {
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

	return location;
}
