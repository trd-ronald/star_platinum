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
divArr.push($(document).height());
console.log(divArr);

function currentDiv(st){
	for(var x=0; x<divArr.length; x++){
		if((divArr[x]<st) && (st<divArr[x+1])){
			console.log("div"+x+"\tscroll pos: "+divArr[x]);
			return x;
			break;
		}
	}
}

function findCurrentDiv(){
	//console.log(parseInt($(window).scrollTop()+1)+" / "+$(window).height());
	var divNum =  parseInt((parseInt($(window).scrollTop())+1)/$(window).height());
	//+1 because height is only 814/815; can be more to be sure
	//console.log("current: "+divNum);
	return divNum;
}



function scrollingto(num){
	console.log("scrolling to: "+num);
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
window.jumpFlag = false;
window.lastScrollTop = 0;
$(window).scroll(function(e){
	console.log("window listener\n"+e);
	var st = $(this).scrollTop();
	var divNum = findCurrentDiv();
	if (st > lastScrollTop){
		// downscroll code
		if(scrollTimeOutflag && !jumpFlag){
			//console.log("down: "+st);
			scrollingto(divArr[currentDiv(st)+1]);
			scrollTimeOutflag = false;
			setTimeout(function(){ scrollTimeOutflag = true; }, 500);
		}
	} else {
		// upscroll code
		if(scrollTimeOutflag && !jumpFlag){
			//console.log("up: "+st);
			scrollingto(divArr[currentDiv(st)]);
			scrollTimeOutflag = false;
			setTimeout(function(){ scrollTimeOutflag = true; }, 500);
		}
	}
	lastScrollTop = st;
});

/* Jump Bar*/

function jumpto(num){
	jumpFlag=true;
	scrollingto(num);
	setTimeout(function(){ jumpFlag = false; }, 500);
}

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
			$(".navigation").css("z-index", "0");
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
			$(".navigation").css("z-index", "10");
			clearInterval(timner);
		}, 100);

	}
});