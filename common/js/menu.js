/*$(function () {
	$(document).on('click', '#toggle', function () {
    	$('#toggle').toggleClass('hamburger-open');
		$('.hamburger-sub').toggleClass('hamburger-sub-open');

		$('.hamburger-sub-list li').each(function (index) {
			$(this).css('transitionDelay', ((index + 1) * 50) + 'ms');
		});

		if ($('.hamburger-sub').hasClass('hamburger-sub-open')) {
			$('.hamburger-sub').css({'zIndex': '8'});
		} else {
			setTimeout(function () {
				$('.hamburger-sub').css({'zIndex': '1'});
			}, 500);
		}
	});
});*/
(function() {
	var $offCanvas = $('.off-canvas');
	var $offCanvasBackground = $offCanvas.find('.off-canvas__background');
	var $toggle = $('#toggle');
	var subLevelOpenClass = 'off-canvas__menu-sub-level--open';
	
	function toggle(e) {
	  e.preventDefault();
	  $offCanvas.toggleClass('off-canvas--in');
	  $toggle.toggleClass('hamburger--open');
	  
	  var $topItems = $offCanvas.find('.off-canvas__menu-top-level > li');
	  
	  if ($offCanvas.hasClass('off-canvas--in')) {
		$topItems.each(function(index) {
		  $(this).css('transitionDelay', ((index + 1) * 50) + 'ms');
		});
		
		requestAnimationFrame(function() {
		  $topItems.addClass('in');
		});
		
		$topItems.find('> span').on('click.offCanvas', toggleSub);
	  }
	  else {
		$topItems.removeClass('in');
		$topItems.find('> span').off('click.offCanvas');
		
		$offCanvas.one('transitionend', function() {
		  closeAllSubLevels();
		});
	  }
	}
	
	
	$toggle.on('click', toggle);
	$offCanvasBackground.on('click', toggle);
  })();