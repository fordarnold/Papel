


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

// document.getElementById("table-accounts").addEventListener("click", function (event) { 
// 	deleteAccountRow(event); 
// });


