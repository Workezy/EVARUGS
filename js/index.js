var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 900,
    centeredSlides: true,
    slideToClickedSlide: true,
    spaceBetween: 70,
    direction: getDirection(),
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }