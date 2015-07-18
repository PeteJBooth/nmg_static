$(document).ready(function(){
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
});