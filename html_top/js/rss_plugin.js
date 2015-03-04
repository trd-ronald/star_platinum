(function($){
	
	$.fn.newFeed = function(){
		var elem = $("<div>");
		var title = $("<p>");
		var content = $("<p>");
		
		elem.attr("class","cd-rss-field-item");
		title.attr("class","cd-rss-field-item-date");
		content.attr("class","cd-rss-field-item-feed");
		
		title.html("2015/03/03");
		content.html("あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ");
		
		elem.append(title);
		elem.append(content);
		//console.log(elem);
		$(".cd-rss-field").append(elem);		
	};




})(jQuery);