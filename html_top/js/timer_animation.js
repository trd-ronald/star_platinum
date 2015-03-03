/* timer animation

Description: Shows a white page with a loading timer. Functions only
Requirements: None
*/


function onReady(callback) {
	var timeoutLimit = 5000;//5sec
	var rndTime = parseInt(Math.random() * ((timeoutLimit*.3) - (timeoutLimit*.1)) + (timeoutLimit*.1));
	var intervalID = window.setInterval(checkReady, 500);
	var timeIn = 0;
	function checkReady(){
		timeIn+=rndTime;
		if (document.getElementsByTagName('body')[0] !== undefined && (timeIn>=timeoutLimit)) {
			$("#timer").find("span").text("100");
			window.clearInterval(intervalID);
			function waitOneSecond(){
				window.clearInterval(w);
				callback.call(this);
			}
			var w = window.setInterval(waitOneSecond, 1000);
		}else{
			$("#timer").find("span").text(parseInt((timeIn/timeoutLimit)*100));
			//console.log("The random time is "+rndTime+"\n"+parseInt((timeIn/timeoutLimit)*100));
		}
	}
}

function show(id, value) {
	$("#"+id).animate({opacity: (value ? "1":"0")}, "slow", function(){
		document.getElementById(id).style.display = value ? 'block' : 'none';
	});

}
