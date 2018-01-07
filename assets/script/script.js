$(function(f){
    var element = f('#anchor');
    f(window).scroll(function(){
    element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
    });
    
    $(".slider").slick({
        autoplay: true,
        speed: 2000,
        dots: true,
        responsive: [{
            breakpoint: 500,
            settings: {
                dots: true,
                arrows: false,
            }
        }]
    });
    $(".slider2").slick({
		dots: true,
		fade: true,
		autoplay: true,
		responsive: [{
			breakpoint: 500,
			settings: {
				dots: false,
				arrows: false,
			}
		}]
    })

	$(".slider3").slick({
		dots: true,
		fade: true,
		autoplay: true,
		responsive: [{
			breakpoint: 500,
			settings: {
				dots: false,
				arrows: false,
			}
		}]
	})
});