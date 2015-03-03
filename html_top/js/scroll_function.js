/* scroll handler 
Not Used
Description: Listens to scroll up or down from mouse wheel and jumps from page to page. Pages are labeled jumpDivX
Requirement: custom_animation.js
Notes: Needs better scroll listener
*/
window.divArr=[];
$(".jumpto").each(function(){
	divArr.push($(this).offset().top);
})
//console.log(divArr);

function findCurrentDiv(){
	//console.log(parseInt($(window).scrollTop()+1)+" / "+$(window).height());
	var divNum =  parseInt((parseInt($(window).scrollTop())+1)/$(window).height());
	//+1 because height is only 814/815; can be more to be sure
	//console.log("current: "+divNum);
	return divNum;
}



function scrollingto(num){
	$(".nav-trigger").css("top", num+"px");
	$('html,body').stop().animate({
		scrollTop: num
	}, 400, function(){
		//when complete
		changetoActive($(".jumptobar").find("li").eq(findCurrentDiv()));
	});
	
	//window.scrollTo(0, num);
}

$(this).bind('mousewheel', function (e) {
	var divNum = findCurrentDiv();
	if (e.originalEvent.wheelDelta < 0) {
		// scroll down
		scrollingto(divArr[parseInt(divNum)+1]);
		
	} else {
		// scroll up
		scrollingto(divArr[parseInt(divNum)-1]);
		
	}
 	return false;
 });

//scroll button not used
$(".scroll-button").click(function(){
	var divNum = findCurrentDiv();
	nextPage(divNum);
});

function changetoActive(elem){
	//console.log(elem);
	elem.css("background-color", "red");
	$(".jumptobar").find("li").not(elem).each(function(){
		console.log("elem: "+ $(this));
		changetoNotActive($(this));
	});
	return false;
}

function changetoNotActive(elem){
	elem.css("background-color", "green");
}

$("label").click(function(){
	//console.log("checkboxed checked: "+$("#nav-trigger").prop("checked"));
	if($("#nav-trigger").prop("checked")){
		$(".jumptobar").css("opacity", "1");
	}else{
		$(".jumptobar").css("opacity", "0");
	}
});