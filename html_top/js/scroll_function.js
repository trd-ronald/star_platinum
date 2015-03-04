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

var scrollTimeOutflag = true;
$(this).bind('mousewheel', function (e) {
	var divNum = findCurrentDiv();
	if (e.originalEvent.wheelDelta < 0) {
		// scroll down
		if(scrollTimeOutflag){
			scrollingto(divArr[parseInt(divNum)+1]);
			scrollTimeOutflag = false;
			setTimeout(function(){ scrollTimeOutflag = true; }, 500);
		}
	} else {
		// scroll up
		if(scrollTimeOutflag){
			scrollingto(divArr[parseInt(divNum)-1]);
			scrollTimeOutflag = false;
			setTimeout(function(){ scrollTimeOutflag = true; }, 500);
		}
		
	}
 	return false;
 });

//scroll button not used
$(".scroll-button").click(function(){
	var divNum = findCurrentDiv();
	nextPage(divNum);
});



/* Jump Bar*/
//change active class jumpbar
function changetoActive(elem){
	//console.log(elem);
	elem.css("background-color", "red");
	$(".jumptobar").find("li").not(elem).each(function(){
		//console.log("elem: "+ $(this));
		changetoNotActive($(this));
	});
	return false;
}

function changetoNotActive(elem){
	elem.css("background-color", "green");
}
/*
window.tempOpacity = {
	"orange": $(".cd-o-top").css("opacity"),
	"black": $(".cd-b-top").css("opacity"),
	"white": $(".cd-white-mask").css("opacity"),
};
*/

//appear disappear jumpbar
$("label").click(function(){
	//console.log("checkboxed checked: "+$("#nav-trigger").prop("checked"));
	if($("#nav-trigger").prop("checked")){
		/*
		$(".cd-o-top").css("opacity", tempOpacity.orange);
		$(".cd-o-bottom").css("opacity", tempOpacity.orange);
		$(".cd-o-left").css("opacity", tempOpacity.orange);
		$(".cd-o-right").css("opacity", tempOpacity.orange);
		$(".cd-b-top").css("opacity", tempOpacity.black);
		$(".cd-b-bottom").css("opacity", tempOpacity.black);
		$(".cd-b-left").css("opacity", tempOpacity.black);
		$(".cd-b-right").css("opacity", tempOpacity.black);
		$(".cd-white-mask").css("opacity", tempOpacity.white);
		*/
		var timner = setInterval(function () {
			$(".theborders").css("opacity", "1");
			$(".jumptobar").css("opacity", "1");
			clearInterval(timner);
		}, 100);
	}else{
		
		/*
		$(".cd-o-top").css("opacity", "0");
		$(".cd-o-bottom").css("opacity", "0");
		$(".cd-o-left").css("opacity", "0");
		$(".cd-o-right").css("opacity", "0");
		$(".cd-b-top").css("opacity", "0");
		$(".cd-b-bottom").css("opacity", "0");
		$(".cd-b-left").css("opacity", "0");
		$(".cd-b-right").css("opacity", "0");
		$(".cd-white-mask").css("opacity", "0");
		*/
		var timner = setInterval(function () {
			$(".theborders").css("opacity", "0");
			$(".jumptobar").css("opacity", "0");
			clearInterval(timner);
		}, 100);

	}
});