window.mobilecheck = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

window.isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
window.isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
window.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
window.isChrome = !!window.chrome && !isOpera;              // Chrome 1+
window.isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6


$(function(){
        $(".cd-fixed-bg").css({
            "height"              : $(window).height()+"px",
            "width"               : $(window).width()+"px",
            "background-size "    : $(window).height()+"px,"+$(window).width()+"px"
        });

        if(document.addEventListener){
            //alert("you got IE9 or greater");
        }else{
            $(".cd-fixed-bg").each(function(){
                var url = $(this).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1');
                
                $(this).css({
                    "background-image"  : "none",
                    "filter"    : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+url+"',sizingMethod='scale')"
                });
            });
        }

        if( parseInt( $(window).height() )<750 ){
            $(".tac").css({
                "margin-top":"0px"
            });
            $(".p-center").css({
                "padding-bottom":"15px"
            });
            $(".cd-rss-field-item").css({
                //"line-height":"0",
                "margin-bottom":"5px",
                "height":"18px"
            });
            $(".cd-rss-field-date").css({"height" :"18px"});
            $(".cd-rss-field-feed").css({"height" :"18px"});
            $(".site-wrap").find("p").css({
                "font-size" :"10px",
                "line-height":"1.3"
            });
            $(".cd-event-block").find("img").each(function(){
                //console.log(" before height: "+ $(this).css("height"));
                var h = parseInt($(this).css("height"));
                var w = parseInt($(this).css("width"));
                $(this).css({
                    "height"    :h*.75+"px",
                    "width"     :w*.75+"px"
                });
                //console.log("after height: "+ $(this).css("height"));
            });
        }

        $(".cd-rss-field").css({
            "margin-top"            : ($(window).height()*.52)+"px"
        });

        $(".cd-about-us").css({
            "margin-top"            : ($(window).height()*.50)+"px"
        });


        $(".cd-black-holder").each(function(){
            var thisHeight = $(this).height();
            var topspacing = ($(window).height()-thisHeight)/2;
            $(this).css({
                "top"             : topspacing+"px"
            });
            $(this).siblings(".cd-about-us-extra").css({
                "top"               : ((isFirefox)?(topspacing):(thisHeight))+"px",
                "padding-top"       : "20px", 
            });
        });

	window.divArr=[];
	$(".jumpto").each(function(){
		divArr.push($(this).offset().top);
	})
	//divArr.push($(document).height());
	//console.log(divArr);
    $('.venobox').venobox(); 


    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: '400px',        // default: ''
        frameheight: '300px',       // default: ''
        border: '10px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');
    
    $(".nav-item").click(function(){
    	var thisnav = $(this).find(".nav-item-sub");
    	//console.log($(this).find(".nav-item-sub").css("display"));
    	if(thisnav.css("display")=="none"){
    		thisnav.css("display", "block");
    	}else{
    		thisnav.css("display", "none");
    	}
    });
    
});//end function

