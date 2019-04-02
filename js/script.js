$(document).ready(function() {

$(window).scroll(function () {
	if ($(this).scrollTop() > 140) {
		$('.top-arrow').fadeIn(200);
	} else {
		$('.top-arrow').stop().fadeOut(200);
	}
});

	
$('.text .c-bttn').click(function(event) {
	var comments_list = $(this).parent().parent().parent().children('.comments-list');
	if (comments_list.is(':visible')) {
		comments_list.stop(true,true).fadeOut({duration:200,queue:false}).slideUp(200);
	}
	else {
		comments_list.fadeIn({duration:200,queue:false}).hide().slideDown(200);
		}
	event.stopPropagation();
});

	
$('.close-cookies').click(function(event) {
	$('.cookies-container').slideUp(200);
	event.stopPropagation(event);
});


$('.close-table-info').click(function() {
	$('.table-info').fadeOut(150);
	return false;
});
	
	
$('.table-info span').click(function() {
	$('.table-info').fadeOut(150);
	return false;
});


$('.top-arrow').click(function () {
	$('body,html').animate({
		scrollTop: $('body').offset().top
}, 500);
return false;
});


$('.menu').click(function(event) {
event.stopPropagation();
});



var divs = $(".tasks > div");
for(var i = 0; i < divs.length; i+=3) {
  divs.slice(i, i+3).wrapAll('<div class="tasks-block"></div>');
}

function tasks() {
$('.tasks-block').each(function(index) {
	$(this).delay(150*index).animate({
		bottom: 0,
		opacity: 1
	}, 300);
});
}

setTimeout(tasks, 150);



$('.answers textarea').on('paste keyup', function() {
	var check_form = false;
	$('.answers div:not(.not-public) textarea').each(function() {
		if ($(this).val().length == 0) {
			check_form = true;
		}
	});
	
	if (check_form) {
		$('.answers button').attr('disabled', 'disabled');
	} else {
		$('.answers button').removeAttr('disabled');
	}
});



$('#menu-bttn').click(function(event) {
	if ($('.menu').is(':visible')) {
		$('.m-line-1').animate({top: '10px'}, 200).rotate({angle:45, animateTo:0, duration: 200});
		$('.m-line-2').animate({top: '18px', opacity: 1}, 200);
		$('.m-line-3').animate({top: '26px'}, 200).rotate({angle:-45, animateTo:0, duration: 200});
		$('.menu').stop(true,true).fadeOut({duration:200,queue:false}).slideUp(200);
	}
	else {
		$('.m-line-1').animate({top: '18px'}, 200).rotate({angle:0, animateTo:45, duration: 200});
		$('.m-line-2').animate({opacity: '0'}, 200);
		$('.m-line-3').animate({top: '18px'}, 200).rotate({angle:0, animateTo:-45, duration: 200});
		$('.menu').fadeIn({duration:200,queue:false}).hide().slideDown(200);
		if ($('.top-blocks').is(':visible')) {
			$('.top-blocks').stop(true,true).slideUp({duration:200,queue:false});
			$('.ul-slide-bttn').css('background-image','url(img/top_down.png)');
		}
		}
	event.stopPropagation();
});


$(window).bind('resize',function() {
	if ($(document).width() >= 1040) {
		$('.menu').addClass('show-menu');
		$('.top-blocks').addClass('show-ul');
	}
	else {
		$('.menu').removeClass('show-menu');
		$('.top-blocks').removeClass('show-ul');
	}
});


$('.ul-slide-bttn').click(function() {
	if ($('.top-blocks').is(':visible')) {
		$('.top-blocks').stop(true,true).slideUp({duration:200,queue:false});
		$('.ul-slide-bttn').css('background-image','url(img/top_down.png)');
	}
	else {
		$('.top-blocks').slideDown({duration:200,queue:false});
		$('.ul-slide-bttn').css('background-image','url(img/top_up.png)');
	}
	
	if ($('.menu').is(':visible')) {
		$('.m-line-1').animate({top: '10px'}, 200).rotate({angle:45, animateTo:0, duration: 200});
		$('.m-line-2').animate({top: '18px', opacity: 1}, 200);
		$('.m-line-3').animate({top: '26px'}, 200).rotate({angle:-45, animateTo:0, duration: 200});
		$('.menu').stop(true,true).fadeOut({duration:200,queue:false}).slideUp(200);
	}
});


$(function() {
	$('.enter').tabs();
	$('.answers-tabs').tabs();
	
	$('.my-profile').accordion({
		collapsible: true,
		animate: 250,
		active: 'none',
		heightStyle: 'content',
		icons: {'header': 'ui-icon-up', 'activeHeader': 'ui-icon-down'}
	});
	
	$('.faq').accordion({
		collapsible: true,
		animate: 200,
		active: 'none',
		heightStyle: 'content',
		icons: {'header': 'ui-icon-up', 'activeHeader': 'ui-icon-down'}
	});
	
});


autosize(document.querySelectorAll('textarea'));


$('input[required], textarea[required]').keyup(function() {
	if ($(this).val() !== '') {
		$(this).removeClass('error');
	}
	else {
		$(this).addClass('error');
	}
});


$('input[type=checked][required]').click(function() {
	if ($(this).prop('checked')==true) {
		$(this).removeClass('error');
	}
});


$('.add-comment input[type=file]').on('change', function() {
	var empty = false;
	if ($(this).val() == '') {
		empty = true;
	}

	if (empty) {
		$(this).parent().parent().children('button').attr('disabled', 'disabled').css({'opacity': '0', 'pointer-events': 'none'});
	} else {
		$(this).parent().parent().children('button').removeAttr('disabled').css({'opacity': '0.5', 'pointer-events': 'auto'});
		$(this).parent().parent().find('textarea').focus();
	}
});


$('.add-comment textarea').on('paste keyup', function() {
	var empty = false;
	if ($(this).val().length == 0 && $(this).parent().children('.add-image').children('input[type=file]').val() == '') {
		empty = true;
	}

	if (empty) {
		$(this).parent().children('button').attr('disabled', 'disabled').css({'opacity': '0', 'pointer-events': 'none'});
	} else {
		$(this).parent().children('button').removeAttr('disabled').css({'opacity': '0.5', 'pointer-events': 'auto'});
	}
});


$('.c-reply').click(function() {
	if ($(this).parent().children('.add-comment').is(':hidden')) {
		$(this).parent().children('.add-comment').fadeIn({duration:150,queue:false}).hide().slideDown(150);
		$(this).parent().children('.add-comment').find('textarea').focus();
	}
});


$(document).click(function() {
	$('.comments-list .add-comment').each(function() {
		if ($(this).is(':visible')) {
			if ($(this).children().children('textarea').val() == '' && $(this).children().find('input[type=file]').val() == '') {
				$(this).fadeOut({duration:200,queue:false}).slideUp(200);
			}
		}
	});
});


$(document).click(function() {
	if ($('.emojis').is(':visible')) {
		$('.emojis').stop(true,true).fadeOut(150);
	}
});

$('.emojis, .add-emoji, .c-reply, .add-comment, .c-edit-bttn').click(function(event) {
	event.stopPropagation();
});


$('.add-emoji').click(function() {
	if ($(this).parent().children('.emojis').is(':visible')) {
		$('.emojis').stop(true,true).fadeOut(150);
	}
	else {
		$('.emojis').not(this).stop(true,true).fadeOut(150);
		$(this).parent().children('.emojis').fadeIn(150);
		$(this).closest('.add-comment').find('textarea').focus();
	}
});


$('.c-edit-bttn').click(function() {
	if ($(this).parent().children('.c-edit-box').is(':visible')) {
		$.when($('.c-edit-box').stop(true,true).fadeOut(150)).done(function() {
			$('.c-edit-content').css('z-index','99');
		});		
	}
	else {
		$('.c-edit-box').not(this).stop(true,true).fadeOut(150);
		$(this).parent().children('.c-edit-box').fadeIn(150);
		$('.c-edit-content').css('z-index','50');
		$(this).parent('.c-edit-content').css('z-index','99');
	}
});

$(document).click(function() {
	if ($('.c-edit-box').is(':visible')) {
		$('.c-edit-box').stop(true,true).fadeOut(150);
	}
});


function comments() {
	if (window.location.hash!=="") {
		$('body,html').stop(true, false).animate({scrollTop: $(window.location.hash + '-block').offset().top - 25}, 250);
		return false;
	}
}

setTimeout(comments, 150);


$('.profile-icon a').click(function() {
	$('body,html').stop(true, false).animate({scrollTop: $('#comments-block').offset().top - 25}, 250);
});



var showChar = 150;
var ellipsestext = "...";
var moretext = "Vairāk";
var lesstext = "Mazāk";
    
$('.c-text span').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {
 
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
 
        var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
        $(this).html(html);
    }
 
});
 
$(".morelink").click(function(){
    if($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});


$('.add-comment textarea').outerHeight(52);



$("[data-fancybox=c-edit]").fancybox({
	afterLoad: function( instance, current ) {
		$(".c-edit textarea").each(function() {
       		this.style.height = (this.scrollHeight)+'px';
   		});
	}
});



});


$(window).bind('load resize',function() {
	if ($(window).width() >= 799) {
		$('.add-comment textarea').attr('placeholder', 'Ieraksti savu komentāru...');
	}
	else {
		$('.add-comment textarea').attr('placeholder', 'Tavs komentārs...');
	}
});