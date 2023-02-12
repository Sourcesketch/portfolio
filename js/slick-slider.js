$(document).ready(function () {
  $(".fvd-wrapper").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0px",
    //adaptiveHeight: true
  });
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    useTransform: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-single",
    // dots: true,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    infinite: true,
  });
});
