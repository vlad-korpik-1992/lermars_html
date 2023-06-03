$(document).ready(function() {
    $('.about__box__column__items').on('click', function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
        $('.about__box__item__inner').removeClass('about__box__item__inner--active');
		jQuery("#"+id).addClass('about__box__item__inner--active');	
    });
    $('.services__box').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 1,
		arrows: true,
		dots: false,
		autoplay: false,
		infinite: false
	});
	$('.shortlist__box').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 1,
		arrows: true,
		dots: false,
		autoplay: false,
		infinite: false
	});
});