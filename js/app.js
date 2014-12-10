// @codekit-prepend "../bower_components/foundation/js/foundation/foundation.js";
// @codekit-prepend "../bower_components/foundation/js/foundation/foundation.tooltip.js";
// @codekit-prepend "../bower_components/foundation/js/foundation/foundation.alert.js";
// @codekit-prepend "../bower_components/jquery-knob/js/jquery.knob.js";
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(document).foundation();

$(function() {
	var smallestDimension = ($(window).width() < $(window).height())? $(window).width():$(window).height();
	var totalProgressKnobDimension = (smallestDimension / 2 > 200) ? smallestDimension / 2 : 200;
	var subProgressKnobDimension = (totalProgressKnobDimension / 2 > 50) ? totalProgressKnobDimension / 2 : 50;
    
    if (!jQuery.browser.mobile) {
    	$(window).scroll(function() {
    		//console.log($(window).scrollTop() + ' ' + $('.parallax-background').css('opacity'));
            
        	    // Get scroll position
        	    var s = $(window).scrollTop();
        	    if (s <= 0) {
        	    	$('.parallax-background').css('opacity',1);
        	    }else{
        	    // scroll value and opacity
        		    opacityVal = (100.0/ s);
        		    // opacity value 0% to 100%
        		    $('.parallax-background').css('opacity', opacityVal);
        	    }
    	});
    }

	$(".toMain").click(function (){
        //$(this).animate(function(){
            $('html, body').animate({
                scrollTop: $("#main").offset().top +5
            }, 500);
            return false;
        //});
    });

	var globalDraw = function(){
		// $(this.i).val(this.cv + '%');
    	// $(this.i).val('Elgin Park Clubs');

                // "tron" case
        if(this.$.data('skin') == 'tron') {

            var a = this.angle(this.cv)  // Angle
                , sa = this.startAngle          // Previous start angle
                , sat = this.startAngle         // Start angle
                , ea                            // Previous end angle
                , eat = sat + a                 // End angle
                , r = true;

            this.g.lineWidth = this.lineWidth;

            this.o.cursor
                && (sat = eat - 0.3)
                && (eat = eat + 0.3);

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.value);
                this.o.cursor
                    && (sa = ea - 0.3)
                    && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.previousColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }

            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();

            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();

            return false;
        }
	};

    $("#totalProgress-knob").knob({
    	width:Math.round(totalProgressKnobDimension),
    	height:Math.round(totalProgressKnobDimension),
        draw : globalDraw,
        'format' : function (value) {
	    	return value + '%';
	  	}
    });

    $(".small-knob").knob({
    	width:Math.round(subProgressKnobDimension),
    	height:Math.round(subProgressKnobDimension),
        draw : globalDraw,
        'format' : function (value) {
	    	return value + '%';
	  	}
    });

    if (!jQuery.browser.mobile) {
        $('#totalProgress-knob').parent().hover( function() {
        	$({ value: $('#totalProgress-knob').val().replace('%','') }).animate(
                { value: 100 }, 
                    {   duration: 500,
                        easing: 'swing',
                        progress: function() {
                          $('#totalProgress-knob').val(Math.round(this.value)).trigger('change');
                    	}
             		});
        },function(){
        	$({ value: $('#totalProgress-knob').val().replace('%','') }).animate(
                { value: $('#totalProgress-knob').data('value') }, 
                    {   duration: 500,
                        easing: 'swing',
                        progress: function() {
                          $('#totalProgress-knob').val(Math.round(this.value)).trigger('change');
                    }
             });
        });
    }

    $("#submit-email").click(function(){submitEmail();});
    $("#email-field").keypress(function(e) {
        // Enter pressed?
        if(e.which == 10 || e.which == 13) {
            submitEmail();
        }
    });

    /*$(document).on('close.fndtn.alert-box', function(event) {
        var source = event.target || event.srcElement;
        console.dir('An alert box has been closed!'+source.prop('id'));
        dumpObject(event);
    });*/
    
    //var emailFormOriginal = $("#email-form").html();
    //console.log(emailFormOriginal);
    $("#email-form-container").on('close.fndtn.alert-box',$('#close-email-alert'), function(){
        $("#email-form").css({opacity:0,display: "block"}).animate({opacity: 1},350);
    });

    var submitEmail = function(){
       /* $("#email-field").off();
        $("#submit-email").off();*/
        var emailAddr = $("#email-field").val();
        //console.log(emailAddr);
        if (validateEmail(emailAddr)) {
            $.post("//wrssnewcomers.com/utilities/emailingList.php",{email: emailAddr},function(data,status){
                if (data==true) {
                    var alertBox = '<div data-alert class="alert-box success">Thank you!<br />You will be notified when the beta becomes available.<a href="#" class="close" id="close-email-alert">&times;</a></div>'
                    $("#email-error").animate({opacity: 0},350,function(){$(this).html('').css({opacity: 1})});
                    $("#email-form-container").animate({opacity: 0}, 350, function(){$("#email-form").css({display: "none"});$(this).append(alertBox).animate({opacity: 1},350,function(){$("#email-field").val('');}).foundation()});
                }else{
                    var alertBox = '<div data-alert class="alert-box warning">An unknown error occured.<a href="#" class="close" id="close-email-alert">&times;</a></div>'
                    $("#email-error").animate({opacity: 0},350,function(){$(this).html('').css({opacity: 1})});
                    $("#email-form-container").animate({opacity: 0}, 350, function(){$("#email-form").css({display: "none"});$(this).append(alertBox).animate({opacity: 1},350,function(){$("#email-field").val('');}).foundation()});
                }
            });
        }else{
            //alert("Please Enter a Valid Email Address");
            var alertBox = '<div data-alert class="alert-box alert">Please enter a valid email address<a href="#" class="close" >&times;</a></div>'
            $("#email-error").html(alertBox).foundation();
        }
        return false;
    }

    var validateEmail = function(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 

    var isMediaQuery = function(size){
        switch(size){
            /*case 'xsmall':
                return matchMedia(Foundation.media_queries.xsmall).matches &&
                !matchMedia(Foundation.media_queries.medium).matches;
            break;*/
            case 'small':
                return matchMedia(Foundation.media_queries.small).matches &&
                !matchMedia(Foundation.media_queries.medium).matches;
            break;
            case 'medium':
                return matchMedia(Foundation.media_queries.medium).matches &&
                !matchMedia(Foundation.media_queries.large).matches;
            break;
            case 'large':
                return matchMedia(Foundation.media_queries.large).matches &&
                !matchMedia(Foundation.media_queries.xlarge).matches;
            break;
            case 'xlarge':
                return matchMedia(Foundation.media_queries.xlarge).matches &&
                !matchMedia(Foundation.media_queries.xxlarge).matches;
            break;
            case 'xxlarge':
                return matchMedia(Foundation.media_queries.xxlarge).matches;
            break;
        }
    }
});
