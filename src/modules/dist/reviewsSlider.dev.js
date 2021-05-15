"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var reviewsSlider = function reviewsSlider() {
  var reviewsBlock = document.querySelector('.reviews');
  var width = document.querySelector('.reviews-slider__slide').offsetWidth;
  var style = document.createElement('style');
  style.innerHTML = "\n    .reviewWrap{\n        position: relative;\n        display: flex;\n        width: 100%;\n        height:100%;\n        transition:transform 0.5s !important;\n    }\n    .reviewItem{\n        min-width: ".concat(width, "px !important;\n    }");
  document.head.appendChild(style);
  var reviewWrap = document.querySelector('.reviews-slider').innerHTML;
  document.querySelector('.reviews-slider').innerHTML = "<div class='reviewWrap'>".concat(reviewWrap, "</div>");
  document.querySelectorAll('.reviews-slider__slide').forEach(function (el) {
    return el.classList.add('reviewItem');
  });
  var reviewWrapper = document.querySelector('.reviewWrap');
  var arrowLeft = document.querySelector('#reviews-arrow_left');
  arrowLeft.style.display = 'none';
  var currentPosition = 0;

  var rewiewsBlockHandler = function rewiewsBlockHandler(e) {
    if (e.target.closest('#reviews-arrow_right')) {
      currentPosition = currentPosition - width;
      arrowLeft.style.display = 'flex';

      if (currentPosition < -(width * 4)) {
        currentPosition = 0;
        arrowLeft.style.display = 'none';
      }

      reviewWrapper.style.transform = "translateX(".concat(currentPosition, "px)");
    } else if (e.target.closest('#reviews-arrow_left')) {
      if (currentPosition === -width) {
        arrowLeft.style.display = 'none';
      }

      currentPosition = currentPosition + width;
      reviewWrapper.style.transform = "translateX(".concat(currentPosition, "px)");
    }
  };

  reviewsBlock.addEventListener('click', rewiewsBlockHandler);
};

var _default = reviewsSlider;
exports["default"] = _default;