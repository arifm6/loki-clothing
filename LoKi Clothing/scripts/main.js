/*
The reason for below code is because I want to be able to hover the anchor including the padding but I only want the text to be underlined. text-decoration: 
none looks ugly and css selectors would either underline the bottom of the navbar (not the text) or cause the padding to not be an anchor BELOW IS OLD VERSION:

*/
const links = document.querySelectorAll(".nav-hover-target");
const linkText = document.querySelectorAll(".nav-hover");
/*
function mouseOverLink(index) {
  links[index].style.borderBottom = "2px solid #E8DCA2";
}

function mouseOutLink(index) {
  links[index].style.borderBottom = "2px solid transparent";
}
*/
/*
//********************************************************************
THIS IS NEW VERSION INSPIRED BY ABOXOFSOX THE LIZARD KING! from discord
*/
//************************************************************************
links.forEach((box, index) => {
	box.addEventListener("mouseover", () => {
		linkText[index].style.borderBottom = "2px solid #E8DCA2";
	});
	box.addEventListener("mouseout", () => {
		linkText[index].style.borderBottom = "2px solid transparent";
	});

});
//*************************************************************
//from w3schools with heavy modifications:
//***************************************************************************
var prevScrollpos = window.pageYOffset;
var changeNavOnScroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("nav-header").style.top = "0";
	} 
	else {
		document.getElementById("nav-header").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
};
window.addEventListener("scroll", changeNavOnScroll )
/*window.onscroll = moveNav() {
};*/
//****************************************************************************


/*SECTION FOR SIDE PANEL*/ 

function closeMobileSidepanel(){
	document.getElementById("mobile-sidepanel").style.width = "0";
	document.querySelectorAll("body > *:not(#mobile-sidepanel)").forEach(element => {
		element.style.filter = "blur(0px)";
		element.style.pointerEvents = "auto";

	});
	document.body.style.overflow ="scroll";


}

function openMobileSidepanel(){
	document.getElementById("mobile-sidepanel").style.width = "50vw";
	document.querySelectorAll("body > *:not(#mobile-sidepanel)").forEach(element => {
		element.style.filter = "blur(5px)";
		element.style.pointerEvents = "none";
	});
	document.body.style.overflow ="hidden";


}
