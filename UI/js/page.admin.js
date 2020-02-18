/**
 * When select value is changed, toggle visiblity for admin permissions input.
 */

document.getElementById('input-user-type').addEventListener('change', function() {

    var inputUserAdminStatus = document.getElementById('input-user-admin-status');

    if (this.value === "staff") {
        inputUserAdminStatus.style.visibility = "visible";
    } else if (this.value === "client") {
        inputUserAdminStatus.style.visibility = "hidden";
    } else {
        console.log(this.value);
    }
});