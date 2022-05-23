$(document).ready(function () {
  $('.slider-for').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-nav',
    mobileFirst: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          // slidesToShow: 7,
          // centerMode: false,
          arrows: true,
        },
      },
    ],
  });

  $('.slider-nav').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    mobileFirst: true,
    asNavFor: '.slider-for',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 7,
          slidesToScroll: 7,
          centerMode: false,
          // arrows: false,
        },
      },
    ],
  });
});
