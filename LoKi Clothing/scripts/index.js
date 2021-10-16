

//*****************************************************************************
//SECTION FOR "Just In!" SUITS AND FULL PANEL CAROUSEL
//translation amount in %
var moveBy = 0;
var parent = document.getElementById("index-flex-suits");

function getMaxTransitions(){
	//num elements per row
	var selectSuit = document.getElementsByClassName('index-flex-suits-items')[0];
	var suitItems = selectSuit.computedStyleMap();
	width = Math.floor(suitItems.get('width').value);
	console.log(width);
	if(width == 16){
		numElementsPerRow = 6;
	}
	else{
		numElementsPerRow = 3

	}
	//number of instances of .index-flex-suit-items
	var numClass = parent.getElementsByClassName("index-flex-suits-items").length;
	//manipulation to find max number of transitions
	var maxTransitions = numClass/numElementsPerRow;
	return maxTransitions;

};

function myCarouselRight(){
	if(moveBy < (100 * getMaxTransitions() - 100)){
		moveBy += 100;
		parent.style.transform = `translateX(-${moveBy}%)`;

	}

};

function myCarouselLeft(){
	if(moveBy > 0){
		moveBy -= 100;
		parent.style.transform = `translateX(-${moveBy}%)`;

	}
	
};
//simple fix for when the user wants to resize from fully translated mobile view to pc view
window.addEventListener("resize", function adjustCarousel(){
	moveBy = 0;
	parent.style.transform = `translateX(-${moveBy}%)`;
});
//****************************************************************************
//SECTION FOR "New Women's Outfits" SUITS AND HALF PANEL CAROUSEL (move by 50%)

var womensMoveBy = 0;
var womensParent = document.getElementById("index-flex-womens");
//same concept applies for previous function 
function getMaxTransitionsWomens(){
	var screenWidth = window.innerWidth;
	return document.getElementsByClassName("index-flex-womens-items").length - 2;
};
function womensCarouselRight (){
	if(womensMoveBy < (50 * getMaxTransitionsWomens())){
		womensMoveBy += 50;
		womensParent.style.transform = `translateX(-${womensMoveBy}%)`;

	}
};
function womensCarouselLeft (){
	if(womensMoveBy > 0){
		womensMoveBy -= 50;
		womensParent.style.transform = `translateX(-${womensMoveBy}%)`;

	}
};
