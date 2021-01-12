$(document).ready(function () {
  $("#carousel1").owlCarousel({
    center: true,
    loop: true,
    items: 5,
    margin: 40,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      375: {
        items: 1.15
      },
      425: {
        items: 1.3
      },
      475: {
        items: 1.4
      },
      540: {
        items: 1.6
      },
      600: {
        items: 1.8
      },
      650: {
        items: 2
      },
      700: {
        items: 2.2
      },
      767: {
        items: 2.2
      },
      820: {
        items: 2.5
      },
      992: {
        items: 2.7
      },
      1024: {
        items: 3
      },
      1200: {
        items: 3.8
      },
      1440: {
        items: 4.5
      }
    },
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
  });




  $('#customers_carousel1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    margin: 0,
    asNavFor: '#customers_carousel2',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
          centerMode: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  });
  $('#customers_carousel2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#customers_carousel1',
    dots: false,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  });

  var headerBtn = $(".header__nav-btn");
  var navItems = $(".header__nav-itmes");
  var headerSpanBtn = $(".header__nav-btn_span");
  headerBtn.click(function () {
    $(this).toggleClass('btn-active');
    headerSpanBtn.toggleClass('close');
    navItems.toggleClass("header-active");


  });
  //закрытие
});
