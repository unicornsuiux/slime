document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".main-swiper", {
      loop: true, // Enables infinite loop
      // autoplay: {
      //   delay: 3000, // Auto-slide every 3 seconds
      //   disableOnInteraction: false, // Keeps autoplay enabled after interactions
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "slide", // Can be 'fade', 'cube', 'coverflow', 'flip'
      slidesPerView: 1, // Number of slides visible at a time
      spaceBetween: 10, // Space between slides
    });
});
  
document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});

$('.partner-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true, // Enable autoplay
  autoplayTimeout: 3000, // Set autoplay speed (3 seconds)
  autoplayHoverPause: true, // Pause on hover
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
