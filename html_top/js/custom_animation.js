/* custom animation handler 

Description: All animation
Requirement: timer_animation.js, custom_animation.css
*/


/* Global Variables */
window.obj = {
	opacity: "1", 
	top : 0
};
window.speed = "normal";//duration(how many second)[slow-0.6, normal-0.4, fast-0.2, can use numbers ex(5000-0.5)]
window.easing = "swing"; 
window.animationArray = [];
window.isAnimating = false;
window.numberOfAnimation=100;//need to be not zero because of condition
window.animationCounter=0;
window.tempImage;

$(function(){

	onReady(function () {
		show('loading', false);//timer_animation.js
		show('page', true);//timer_animation.js
		//startup
		var wa = window.setInterval(waitAnotherSecond, 1000);
		function waitAnotherSecond(){
			window.clearInterval(wa);
			animateHeader();
			numberOfAnimation = $(".group-all").not(".a0-0,.a0-1,.a0-2,.a0-3").length;
			//console.log("Number of Animations: "+numberOfAnimation);
			$(".group-all").not(".a0-0,.a0-1,.a0-2,.a0-3").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
				var tempthis = $(this);
				if (isInView) {
					// element is now visible in the viewport
					if (visiblePartY == 'top') {
						// top part of element is visible
					} else if (visiblePartY == 'bottom') {
						// bottom part of element is visible
					} else {
						// whole part of element is visible
						animationArray.push(tempthis);
						tempthis.unbind('inview');
					}
				} else {
					// element has gone out of viewport
				}
			});

		}
	});

	function resetAnimation(resetting, func){
		console.log("resetting animation: "+resetting);
		resetting.each(function(){
			//$(this).addClass("group-all");
			//these depends on your initial animation
			$(this).css("opacity","0");
			$(this).css("position","relative");
			$(this).css("top","30px");
		})
		eval(func);
	}

	function animateHeader(){
		$(".group-all.a0-0").animate(obj, speed, easing, function(){
			$(".group-all.a0-1").animate(obj, speed, easing, function(){
				/*$(".cd-main-nav").css("position","static");
				$(".cd-main-nav").find("a").css("color","#8e7d7f");*/
				$(".group-all.a0-2").animate(obj, speed, easing, function(){
					$(".group-all.a0-3").animate(obj, speed, easing);
				});
			});
		});
	}

	$(".cd-employee-container-photo .cd-circle").not(".cd-black-shadow").mouseover(function(){
		tempImage = $(this).css("background-image");
		$(this).css("background-image", "url(img/fullImage/rollover-change.jpg)");
	}).mouseout(function(){
		$(this).css("background-image", tempImage);
	});


	$(".cd-circle").not(".cd-black-shadow").mouseover(function(){
		$(this).find(".cd-black-shadow").css("opacity", "0.2");
	}).mouseout(function(){
		$(this).find(".cd-black-shadow").css("opacity", "0");
	});
});

var animationInterval = setInterval(function () {
	if(!isAnimating && animationArray.length>0){
		//console.log("if");
		isAnimating = true;
		animationArray[0].animate(obj, speed, easing, function(){
			animationArray.shift();
			isAnimating = false;
			animationCounter++;
		});
	
	}
	//console.log(animationCounter+">"+numberOfAnimation);
	if(animationCounter>=numberOfAnimation){
		window.clearInterval(animationInterval)
	}
}, 100);
