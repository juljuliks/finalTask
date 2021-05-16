"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var portfolioSlider = function portfolioSlider() {
  var portfolio = document.getElementById('portfolio'),
      arrowLeft = document.getElementById('portfolio-arrow_left'),
      arrowRight = document.getElementById('portfolio-arrow_right'),
      mobileLeftBtn = document.getElementById('portfolio-arrow-mobile_right'),
      mobileRightBtn = document.getElementById('portfolio-arrow-mobile_left'),
      portfolioSlider = document.querySelector('.portfolio-slider'),
      sliderItems = Array.from(portfolioSlider.children),
      portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile'),
      sliderItemsMobile = Array.from(portfolioSliderMobile.children);
  arrowRight.style.display = 'flex';
  var total = portfolio.querySelector('.slider-counter-content__total');
  total.innerText = sliderItemsMobile.length;
  var current = portfolio.querySelector('.slider-counter-content__current');
  var count = 1;
  var width = sliderItems[0].offsetWidth;
  var widthMobile = 352;
  var currentPosition = 0;
  mobileRightBtn.style.display = 'none';
  mobileLeftBtn.style.zIndex = '20';
  mobileRightBtn.style.zIndex = '20';
  var style = document.createElement('style');
  style.innerHTML = "\n    .portfolio-wrap{\n        position: relative;\n        display: flex;\n        width: 100%;\n        height:100%;\n        transition:transform 0.5s !important;\n    ";
  document.head.appendChild(style);

  var createWrapper = function createWrapper(selector) {
    var wrapSlides = selector.innerHTML;
    var newWrapSlides = "<div class='portfolio-wrap'>".concat(wrapSlides, "</div>");
    selector.innerHTML = newWrapSlides;
  };

  createWrapper(portfolioSlider);
  createWrapper(portfolioSliderMobile);
  sliderItems.forEach(function (el) {
    el.style.minWidth = "".concat(width, "px");
  });
  var portfolioWrap = document.querySelectorAll('.portfolio-wrap')[1];
  var portfolioWrapMobiile = document.querySelectorAll('.portfolio-wrap')[0];

  var portfolioSliderHandler = function portfolioSliderHandler(e) {
    if (e.target.closest('#portfolio-arrow_right')) {
      count++;
      arrowLeft.style.display = 'flex';

      if (screen.width > 1024 && count === 3) {
        arrowRight.style.display = 'none';
        count = 1;
        arrowLeft.style.display = 'flex';
      } else if (count === 4 && screen.width <= 1024) {
        arrowRight.style.display = 'none';
        arrowLeft.style.display = 'flex';
        count = 1;
      }

      currentPosition = currentPosition + width;
      portfolioWrap.style.transform = "translateX(".concat(-currentPosition, "px)");
    } else if (e.target.closest('#portfolio-arrow_left')) {
      count++;

      if (currentPosition <= 352) {
        count = 1;
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'flex';
      }

      currentPosition = currentPosition - width;
      portfolioWrap.style.transform = "translateX(".concat(-currentPosition, "px)");
    } else if (e.target.closest('#portfolio-arrow-mobile_left')) {
      current.innerText--;

      if (current.innerText == '1') {
        mobileRightBtn.style.display = 'none';
      }

      currentPosition = currentPosition - widthMobile;
      portfolioWrapMobiile.style.transform = "translateX(".concat(-currentPosition, "px)");
    } else if (e.target.closest('#portfolio-arrow-mobile_right')) {
      currentPosition = currentPosition + widthMobile;
      mobileRightBtn.style.display = 'flex';
      current.innerText++;

      if (current.innerText > +total.innerText) {
        current.innerText = 1;
        currentPosition = 0;
        mobileRightBtn.style.display = 'none';
      }

      portfolioWrapMobiile.style.transform = "translateX(".concat(-currentPosition, "px)");
    }
  };

  portfolio.addEventListener('click', portfolioSliderHandler);
};

var _default = portfolioSlider;
exports["default"] = _default;