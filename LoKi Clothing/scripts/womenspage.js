//section of code to make the first black section switch to the left side of the row when screen size is greater than 768px
//this is due to being written after the banner image in the html version but using javascript we make it inserted before for larger screens
function myFunction(x){
	if(x.matches){//x will be media query size
		var div = document.getElementById("black-section-left");
		var firstImg = document.getElementsByClassName("banner-img")[0];
		div.parentNode.insertBefore(div, firstImg);

	}
}

var x = window.matchMedia("(min-width:768px)");
myFunction(x); //call above function with media input
x.addEventListener('change', myFunction);//function to wait for changes in website to trigger... function above has to be executed which is what this does
