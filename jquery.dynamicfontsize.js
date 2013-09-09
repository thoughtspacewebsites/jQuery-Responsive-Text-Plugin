(function($) {

    $.fn.dynamicFontSize = function( options ) {



	var settings = $.extend({
		breakPoint      : '768',
		bottomStop      : '300',
		topStop         : '6000'
	}, options);


	var bodyFontSize = parseFloat($(this).css("font-size"));
	var h1FontSize = parseFloat($(this).children("h1").css("font-size")) / bodyFontSize;
	var h2FontSize = parseFloat($(this).children("h2").css("font-size")) / bodyFontSize;
	var h3FontSize = parseFloat($(this).children("h3").css("font-size")) / bodyFontSize;
	var h4FontSize = parseFloat($(this).children("h4").css("font-size")) / bodyFontSize;
	var h5FontSize = parseFloat($(this).children("h5").css("font-size")) / bodyFontSize;
	var h6FontSize = parseFloat($(this).children("h6").css("font-size")) / bodyFontSize;
	var pFontSize = parseFloat($(this).children("p").css("font-size")) / bodyFontSize;
	var liFontSize = parseFloat($(this).children("li").css("font-size")) / bodyFontSize;
	var addressFontSize = parseFloat($(this).children("address").css("font-size")) / bodyFontSize;

	var h1LineHeight = parseFloat($(this).children("h1").css("line-height")) / bodyFontSize - (h1FontSize/1.5);
	var h2LineHeight = parseFloat($(this).children("h2").css("line-height")) / bodyFontSize - (h2FontSize/1.5);
	var h3LineHeight = parseFloat($(this).children("h3").css("line-height")) / bodyFontSize - (h3FontSize/1.5);
	var h4LineHeight = parseFloat($(this).children("h4").css("line-height")) / bodyFontSize - (h4FontSize/1.5);
	var h5LineHeight = parseFloat($(this).children("h5").css("line-height")) / bodyFontSize - (h5FontSize/1.5);
	var h6LineHeight = parseFloat($(this).children("h6").css("line-height")) / bodyFontSize - (h6FontSize/1.5);
	var pLineHeight = parseFloat($(this).children("p").css("line-height")) / bodyFontSize;
	var liLineHeight = parseFloat($(this).children("li").css("line-height")) / bodyFontSize;
	var addressLineHeight = parseFloat($(this).children("address").css("line-height")) / bodyFontSize;

	$("h1").css({"font-size":h1FontSize+"em", "line-height":h1LineHeight+"em"});
        $("h2").css({"font-size":h2FontSize+"em", "line-height":h2LineHeight+"em"});
        $("h3").css({"font-size":h3FontSize+"em", "line-height":h3LineHeight+"em"});
        $("h4").css({"font-size":h4FontSize+"em", "line-height":h4LineHeight+"em"});
        $("h5").css({"font-size":h5FontSize+"em", "line-height":h5LineHeight+"em"});
        $("h6").css({"font-size":h6FontSize+"em", "line-height":h6LineHeight+"em"});
	$("p").css({"font-size":pFontSize+"em", "line-height":pLineHeight+"em"});
	$("li").css({"font-size":liFontSize+"em", "line-height":liLineHeight+"em"});
	$("address").css({"font-size":addressFontSize+"em", "line-height":addressLineHeight+"em"});
	$("li li, address li, li address, li p, p li").css({"font-size":"1em"});




	/////////////////TIME TO MAKE IT DYNAMIC!!!/////////////////

	


	function sizeFont(){

		var windowWidth = $(window).width();
		if(windowWidth > settings.breakPoint){
			if(windowWidth < settings.topStop){
				var ratio = windowWidth / 75;
				$("body").css({"font-size":ratio});
			}
			else{
				var ratio = settings.topStop / 75;
				$("body").css({"font-size":ratio});
			}
		}
		else if(windowWidth <= settings.breakPoint && windowWidth > settings.bottomStop){
			var ratio = windowWidth / 50;
			$("body").css({"font-size":ratio});
		}
	
	}

	sizeFont();
    
	$(window).resize(function(){
		sizeFont();
	});


	
	}

}(jQuery));
