$(document).ready(function(){
	/* burger menu */
	$("#header-burger").click(function(){

		if ($(this).data('open') == 'open'){
			$(this).children('img').attr('src','img/burger.png');
			$(this).data('open', 'closed')
			togglePointer(function(){$("#nav-mobile").slideToggle()})
		}
		else {
			$(this).children('img').attr('src','img/burger-open.png');
			$(this).data('open', 'open')
			$("#nav-mobile").slideToggle(togglePointer);
			
		}

		function togglePointer(callback){
			$burger =  $("#header-burger");
			if ($burger.data('open') == 'open'){
				$('#pointer').show();
				$('#pointer').animate({top: "-=10"},300);
			}
			else {
				$('#pointer').animate({top: "+=10"},200,function(){
					$('#pointer').hide();
					callback();
				});
				
			}
		}
	});

	$(window).scroll(function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;

	})

	/* ajaxy links */
	var last_position = 0;

	$('.content').slideUp(0);
	$('a.ajaxy').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		var $article_container = $(this).parents('.portfolio-container');
		var $about_container = $('#about');

		var scroll_to = $article_container.height()/2;

		last_position = $article_container.position().top;
		$.get($(this).attr('href'), function(data){
			
			$article_container.find('.content').html(data);
			
			$article_container.find('.content').data('populated','yup');
			$article_container.find('.ajaxy').addClass('active');

			$("html, body").animate({ scrollTop: scroll_to + "px" }, 500);
			$about_container.slideUp(500);
			$('.portfolio-container').not($article_container).slideUp(500);
			$article_container.find('.content').slideDown(500);
			
			$("#i-carousel").owlCarousel({
				singleItem:true,
				responsive:true
			});
			$('a.close-link').click(_scroll_up_and_close);
		});

	})
	 
	$('div.close-button').click(_close);

	function _scroll_up_and_close(e){
		e.preventDefault();
		e.stopPropagation();
		var $article_container = $(this).parents('.portfolio-container');
		
		$("html, body").animate({ scrollTop: $article_container.position().top + "px" }, 1000, function(){
			$("html, body").animate({ scrollTop: last_position + "px" }, 500);
			$('#about').slideDown(500);
			$article_container.find('.content').slideUp(500);
			$('.portfolio-container').not($article_container).slideDown(500);
			$article_container.find('.ajaxy').removeClass('active');
		});
	}

	function _close(e){
		e.preventDefault();
		e.stopPropagation();
		var $article_container = $(this).parents('.portfolio-container');
		
		$("html, body").animate({ scrollTop: last_position + "px" }, 500);
		$('#about').slideDown(500);
		$article_container.find('.content').slideUp(500);
		$('.portfolio-container').not($article_container).slideDown(500);
		$article_container.find('.ajaxy').removeClass('active');
	}

 	/* Screen size dependent images */
 	if($(window).width() >= 768){
 		$('a.responsive-image').each(function(){
 			$(this).attr('style','background-image:' +  $(this).data('large'));
 		})
 	}
 	else {
 		$('a.responsive-image').each(function(){
 			$(this).attr('style', 'background-image:' +  $(this).data('default'));
 		})
 	}
});