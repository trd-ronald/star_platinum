(function($){
	
	$.fn.alert = function(){
		var elem = $("<div>");
		$("body").append(elem);
				elem.attr("id","dfgdfg");
		elem.css({
			position: "absolute",
			top: 20
		});
		elem.html("Hello world");
	};




})(jQuery);