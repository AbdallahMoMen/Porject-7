$(document).ready(function () {
  // ========== Header Colors On Scroll ==========

  $(window).on("scroll", function () {
    let currectScroll = $(this).scrollTop();
    if (currectScroll > 0) {
      $("header .container, .dropdown-nav").css("background-color", "#fff");
      $("header .logo a, header .nav-btns i, nav li a").css("color", "#000");
    } else {
      $("header .container, .dropdown-nav").css(
        "background-color",
        "transparent"
      );
      $("header .logo a, header .nav-btns i, nav li a").css("color", "#fff");
    }
  });

  // ========== Header Colors On Scroll ==========

  // ========== DropDown Navbar ==========

  $(".nav-open-btn, .nav-close-btn").on("click", function () {
    $(this).fadeToggle(400).delay(100);
    $(this).siblings().fadeToggle(400);
    $(".dropdown-nav").slideToggle(500);
  });

  // ========== DropDown Navbar ==========

  // ========== Active Section Navbar ==========

  $("header li").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  // ========== Active Section Navbar ==========

  // ========== Go Up Button ==========

  $("button.goup").on("click", function () {
    $(window).scrollTop(0);
  });

  // ========== Go Up Button ==========
});

const homeSwiper = new Swiper(".home .swiper", {
  loop: true,
  speed: 500,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

const comingSwiper = new Swiper(".coming .movies-container", {
  speed: 500,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
