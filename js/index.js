let swiper = new Swiper(".swiper", {
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
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}

let popupBg = document.querySelector(".popup_request_bg");
let popup = document.querySelector(".popup_request");
let orderBtn = document.querySelector(".buy_btn");

orderBtn.addEventListener("click", () => {
  popupBg.classList.add("active");
  popup.classList.add("active");
});
popupBg.addEventListener("click", (e) => {
  if (e.target.dataset.toggle === "popup_bg") {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  } else {
    return;
  }
});
