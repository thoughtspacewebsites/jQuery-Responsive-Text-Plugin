(function($) {

    $.fn.responsiveText = function( options ) {



	var settings = $.extend({
		breakPoint      : '768',
		bottomStop      : '500',
		topStop         : '6000',
		resizeTime	: '50'
	}, options);


	var bodyFontSize = parseFloat($("body").css("font-size"));

	$("h1, h2, h3, h4, h5, h6, p, address, li").not(".responsive-text-fill").each(function(){
		var fontSize = $(this).css("font-size");
		var lineHeight = $(this).css("line-height");
		$(this).css({"font-size":fontSize, "line-height":lineHeight});
	}
	);

	$(".responsive-text").each(function(){
		var windowWidth = $(window).width();
		var fontSize = $(this).css("font-size");
                var emFontSize = parseFloat($(this).css("font-size")) / bodyFontSize;
		var lineHeight = parseFloat($(this).css("line-height")) / bodyFontSize - (emFontSize/1.2);
		$(this).css({"font-size":emFontSize+"em"});
	});

	var firstWindowWidth = $(window).width();
        if(firstWindowWidth < settings.bottomStop){
                var newBodyFontSize = settings.bottomStop / 50;
                $("body").css({"font-size":newBodyFontSize});
        }


	function responsiveTextSingle(){
		var windowWidth = $(window).width();
		if(windowWidth > settings.breakPoint){
			if(windowWidth < settings.topStop){
				if(windowWidth > settings.bottomStop){
					var newBodyFontSize = windowWidth / 75;
					$("body").css({"font-size":newBodyFontSize});
				}
				else{
					var newBodyFontSize = settings.bottomStop / 75;
                                	$("body").css({"font-size":newBodyFontSize});
				}
			}
			else{
				var newBodyFontSize = settings.topStop / 75;
                                $("body").css({"font-size":newBodyFontSize});
			}
		}
		else if(windowWidth <= settings.breakPoint){
			if(windowWidth > settings.bottomStop){
				var newBodyFontSize = windowWidth / 50;
                        	$("body").css({"font-size":newBodyFontSize});
			}
			else{
				var newBodyFontSize = settings.bottomStop / 50;
                                $("body").css({"font-size":newBodyFontSize});
			}
		}
		var bodyFontSize = parseFloat($("body").css("font-size"));
		$(".responsive-text").each(function(){
                        var fontSize = parseFloat($(this).css("font-size"));
                        $(this).css({"line-height":fontSize*1.5+"px"});
                });
	}
	responsiveTextSingle();

	$(".responsive-text-fill").each(function(){
		$(this).css({"white-space":"nowrap", "text-align":"center"});
	});

	function responsiveTextFill(){
	$(".responsive-text-fill").each(function(){
		var content = $(this).text();
		$(this).empty();
		$(this).append("<span>"+content+"</span>");
		var fontSize = 3;
        	var ourText = $('span:visible:first', this);
        	var maxWidth = $(this).width();
        	var textWidth;
        	do {
        	    ourText.css('font-size', fontSize);
        	    textWidth = ourText.width();
        	    fontSize = fontSize + 1;
        	} while (textWidth < maxWidth);
		var lineHeight = $(this).children("span").css("line-height");
		$(this).children("span").css({"line-height":fontSize+"px"});
	}
	);
	}


	var rT;
	var rTF;
	responsiveTextFill();
	$(window).resize(function(){
		clearTimeout(rT);
		clearTimeout(rTF);
		rT = setTimeout(responsiveTextSingle, settings.resizeTime);
		rTF = setTimeout(responsiveTextFill, settings.resizeTime);
	}
	);




	
	}

}(jQuery));
