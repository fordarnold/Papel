/**
 * Smooth scrolling.
 * 
 * @link https://css-tricks.com/snippets/jquery/smooth-scrolling
 */
var btnScrollTop = document.getElementById("scroll-top");
console.log("btnScrollTop", btnScrollTop);

var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

btnScrollTop.addEventListener("click", function(event) {
	window.scrollTo(0, 0); // Scroll to top of the page (currently not working)
});

window.addEventListener("scroll", function (event) {  

	var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

	if (scrollPosition > 300) {
		btnScrollTop.classList.add("show");
	} else {
		btnScrollTop.classList.remove("show");
	}
});