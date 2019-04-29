 $(document).ready(function(){
   $('.nav-mobile').on('click', function(e) {
    e.preventDefault() // отменаят стандартное повередие элемента к примеру a,button
  $('.nav-mobile-open').toggleClass('nav-mobile-hidden');
 })
  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: true,
	    autoplaySpeed: 400,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
    
}) 
});
 