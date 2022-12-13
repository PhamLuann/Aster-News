$('.slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: false,
    prevArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        }
    ]
});