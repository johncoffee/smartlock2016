$(document).ready(function() {
	//content screen width modifier

	var hWidth = $('header').width();
	var wWidth = $(window).width()
	var cWidth = wWidth - hWidth

	$('.content').css('width', cWidth)

	//indicator function

	var peopleButton = $('.main-func a:first-child')
	var locationsButton = $('.main-func a:last-child')
	var menuButtons = [peopleButton, locationsButton]

/*
	function indicatorToggle() {
		if ( $.inArray(this, menuButtons) !== -1) {
			$('.indicator').removeClass('active')
			$(this + ' .indicator').toggleClass('active')
		} else {

		}
	}

	$('header a').click(function() {
		console.log(menuButtons[1])

		indicatorToggle()
	})
*/
	//indicator toggling
	$('.home-button').click(function() {

		$('.indicator').removeClass('active');
		$('.home-button .indicator').toggleClass('active')

	});

//people button and task indicator
	$('.people-button').click(function() {

		$('.indicator').removeClass('active');
		$('.people-button .indicator').toggleClass('active')

	});

	$('.task.people').click(function() {

		$('.indicator').removeClass('active');
		$('.people-button .indicator').toggleClass('active')

	});

	$('.building-button').click(function() {

		$('.indicator').removeClass('active');
		$('.building-button .indicator').toggleClass('active')

	});

//locations button and indicator
	$('.task.building').click(function() {

		$('.indicator').removeClass('active');
		$('.building-button .indicator').toggleClass('active')

	});

	$('.settings-button').click(function() {

		$('.indicator').removeClass('active');
		$('.settings-button .indicator').toggleClass('active')

	});


	//log-in overlay solution

	$('.log-in-button').click(function() {
		event.preventDefault();
		$('.login-overlay').fadeOut()
	});

	$('.top-bar a:first').click(function() {

		$('.login-overlay').fadeIn()

	});

	//logout button hover message

	$('.top-bar img').mouseover(function() {
		$('.top-bar p').addClass('visible')
	});

	$('.top-bar img').mouseleave(function() {
		$('.top-bar p').removeClass('visible')
	});

})