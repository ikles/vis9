$(function() {

	$('.slider-arrow').on('click', function() {
		console.log(glide.current());
	});

	$('.slider').glide({
		arrows: true,
		autoplay: false
	});

	$('.all_tags').click(function (b) {
		b.preventDefault();
		$('.tags').css('height','auto');
		$(this).hide();
		$('.hide_tags').show();	
	});

	$('.hide_tags').click(function (b) {
		b.preventDefault();
		$('.tags').css('height','50px');
		$(this).hide();
		$('.all_tags').show();
	})

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	/*******************Форма*************************/

	$(".left_form form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".left_form form").trigger("reset");
		});
		return false;
	});
	

	// его .left_top_mnu_wrap
	// под него .main_content

		

});