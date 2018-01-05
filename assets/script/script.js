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
            infinite: false,
            // slidesToShow: 2,
            // slidesToScroll: 2
        } 
    }]
});
});