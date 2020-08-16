var nav = document.getElementById("navUL");
var navBtn = document.getElementById("navBtn");
var scrollBtn = document.getElementById("scrollBtn");
var scrollbarW = (window.innerWidth - document.body.clientWidth);
var scrollbarWString = scrollbarW.toString();


function mobileMenu() {
  if (nav.style.display === "flex") {
    document.body.style.overflow = "initial";
    nav.style.display = "none";
    nav.style.height = "0";
    navBtn.style.marginRight = "0";
    scrollBtn.style.zIndex = "initial";
  } else {
    document.body.style.overflow ="hidden";
    nav.style.display = "flex";
    nav.style.height = "100%";
    navBtn.style.marginRight = scrollbarWString + "px";
    scrollBtn.style.zIndex = "-1";
  }
}

function mobileMenuAnimate(x) {
  x.classList.toggle("mobile-animate");
}

window.onscroll = function() {
  navScroll();
};

function navScroll() {
  if (window.pageYOffset >= window.innerHeight && window.pageYOffset >= 600) {

    navBtn.classList.add("sticky");
    navBtn.style.backgroundColor = "rgba(34, 34, 34, .8)";
    scrollBtn.style.display = "flex";
  } else {
    navBtn.classList.remove("sticky");
    navBtn.style.backgroundColor = "transparent";
    scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




  $(document).ready(function() {

    $('.locations-slider').slick({
      dots: true,
      draggable: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      focusOnSelect: true,
      centerPadding: "4em",
      swipeToSlide: true,
      appendArrows: $(".locations-slider"),
      prevArrow: '<a href="#" class="location-arrows slick-prev">&lt;</button>',
      nextArrow: '<a href="#" class="location-arrows slick-next">&gt;</button>',
      appendDots: $(".locations-section"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: "3em"
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0"
          }
        }
      ]
    });

  });