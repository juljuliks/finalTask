"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var portfolioSlider = function portfolioSlider() {
  var portfolio = document.getElementById('portfolio');
  var arrowLeft = document.getElementById('portfolio-arrow_left'),
      mobileLeftBtn = document.getElementById('portfolio-arrow-mobile_right'),
      mobileRightBtn = document.getElementById('portfolio-arrow-mobile_left'),
      portfolioSlider = document.querySelector('.portfolio-slider'),
      sliderItems = Array.from(portfolioSlider.children),
      portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile'),
      sliderItemsMobile = Array.from(portfolioSliderMobile.children);
  var width = sliderItems[0].offsetWidth;
  var widthMobile = sliderItemsMobile[0].offsetWidth;
  var currentPosition = 0;
  var currentPositionMobile = 0;
  var count = 0;
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
    count++;

    if (e.target.closest('#portfolio-arrow_right')) {
      arrowLeft.style.display = 'flex';

      if (screen.width > 1024 && count === 3) {
        currentPosition = 0 - width;
        count = 0;
        arrowLeft.style.display = 'none';
      } else if (count === 4) {
        currentPosition = 0 - width;
        count = 0;
        arrowLeft.style.display = 'none';
      }

      currentPosition = currentPosition + width;
      portfolioWrap.style.transform = "translateX(".concat(-currentPosition, "px)");
    } else if (e.target.closest('#portfolio-arrow_left')) {
      if (currentPosition <= 352) {
        currentPosition = currentPosition - width;
        arrowLeft.style.display = 'none';
      } else {
        currentPosition = currentPosition - width;
      }

      portfolioWrap.style.transform = "translateX(".concat(-currentPosition, "px)");
    } else if (e.target.closest('#portfolio-arrow-mobile_left')) {
      currentPosition = currentPosition - widthMobile; //   currentPositionMobile = currentPositionMobile + widthMobile;

      portfolioWrapMobiile.style.transform = "translateX(".concat(-currentPosition, "px)");
    } else if (e.target.closest('#portfolio-arrow-mobile_right')) {
      currentPosition = currentPosition + widthMobile; //   currentPositionMobile = currentPositionMobile - widthMobile;

      portfolioWrapMobiile.style.transform = "translateX(".concat(-currentPosition, "px)");
    }
  };

  portfolio.addEventListener('click', portfolioSliderHandler);
};

var _default = portfolioSlider;
exports["default"] = _default;