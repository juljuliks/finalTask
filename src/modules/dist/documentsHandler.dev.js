"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var documentsHandler = function documentsHandler() {
  var transparencyBlock = document.querySelector('.transparency'),
      transparancyPopup = document.querySelector('.popup-transparency'),
      popupTransparencySlider = document.querySelector('.popup-transparency-slider'),
      trasparensyItems = document.querySelectorAll('.transparency-item');
  var total = document.querySelector('#transparency-popup-counter').querySelector('.slider-counter-content__total');
  var current = document.querySelector('#transparency-popup-counter').querySelector('.slider-counter-content__current');
  var arrowRight = document.querySelector('#transparency_right');
  var arrowLeft = document.querySelector('#transparency_left');
  var count = 1;
  current.innerText = count;
  var currentPosition = 0;
  total.innerText = trasparensyItems.length;
  var styleWidth = document.querySelector('.popup-transparency-slider__slide').offsetWidth;
  var style = document.createElement('style');
  style.innerHTML = "\n    .popupTransparencyWrap {\n        position: relative;\n        display: flex;\n        width: 100%;\n        height:100%;\n        transition:transform 0.5s !important;\n    }\n    .popupTransparencyWrap .popup-transparency-slider__slide{\n        min-width: ".concat(styleWidth, "px;\n    }\n");
  document.head.appendChild(style);

  if (screen.width <= 1024) {
    var transparencyStyle = document.createElement('style');
    transparencyStyle.innerHTML = "\n      .transparency-slider{\n          display: -webkit-box !important;\n          display: -ms-flexbox !important;\n          display: flex !important;\n          flex-wrap: nowrap !important;\n          transition:transform 0.5s !important;\n      }\n      .transparency-slider .transparency-item{\n          min-width: 744px !important;\n      }\n      .transparency-slider-wrap{\n          overflow: hidden !important;\n      }";
    document.head.appendChild(transparencyStyle);
  }

  if (screen.width < 768) {
    var _transparencyStyle = document.createElement('style');

    _transparencyStyle.innerHTML = "\n    .transparency-slider{\n        display: -webkit-box !important;\n        display: -ms-flexbox !important;\n        display: flex !important;\n        flex-wrap: nowrap !important;\n        transition:transform 0.5s !important;\n    }\n    .transparency-slider .transparency-item{\n        min-width: 290px !important;\n    }\n    .transparency-slider-wrap{\n        overflow: hidden !important;\n    }";
    document.head.appendChild(_transparencyStyle);
  }

  var currentInner = popupTransparencySlider.innerHTML;
  popupTransparencySlider.innerHTML = "<div class='popupTransparencyWrap'>".concat(currentInner, "</div>");
  var transparencySlider = document.querySelector('.transparency-slider');
  var transparancyWrap = document.querySelector('.popupTransparencyWrap');
  var arrowLeftTablet = document.querySelector('#transparency-arrow_left');
  arrowLeftTablet.style.display = 'none';
  var currentWidth = +getComputedStyle(document.querySelector('.transparency-item')).minWidth.replace(/\D/g, '');

  var transparencyBlockHandler = function transparencyBlockHandler(e) {
    if (e.target.closest('.transparency-item__img')) {
      arrowRight.style.display = 'flex';
      arrowLeft.style.display = 'none';
      transparancyPopup.style.visibility = 'visible';
    } else if (!e.target.closest('.popup-dialog-transparency') || e.target.closest('.close') && e.target.closest('.popup-transparency')) {
      transparancyPopup.style.visibility = 'hidden';
    } else if (e.target.closest('#transparency_right')) {
      count++;
      arrowLeft.style.display = 'flex';
      current.innerText = count;
      currentPosition = currentPosition - styleWidth;

      if (count > 3) {
        count = 1;
        current.innerText = count;
        currentPosition = 0;
        arrowLeft.style.display = 'none';
      }

      transparancyWrap.style.transform = "translateX(".concat(currentPosition, "px)");
    } else if (e.target.closest('#transparency_left')) {
      count--;
      current.innerText = count;
      currentPosition = currentPosition + styleWidth;

      if (current.innerText == 1) {
        arrowLeft.style.display = 'none';
      }

      transparancyWrap.style.transform = "translateX(".concat(currentPosition, "px)");
    }

    if (e.target.closest('#transparency-arrow_right')) {
      arrowLeftTablet.style.display = 'flex';
      currentPosition = currentPosition - currentWidth;

      if (currentPosition < -(currentWidth * 2)) {
        currentPosition = 0;
        arrowLeftTablet.style.display = 'none';
      }

      transparencySlider.style.transform = "translateX(".concat(currentPosition, "px)");
    } else if (e.target.closest('#transparency-arrow_left')) {
      if (currentPosition == -currentWidth) {
        arrowLeftTablet.style.display = 'none';
      }

      currentPosition = currentPosition + currentWidth;
      transparencySlider.style.transform = "translateX(".concat(currentPosition, "px)");
    }
  };

  window.addEventListener('click', transparencyBlockHandler);
};

var _default = documentsHandler;
exports["default"] = _default;