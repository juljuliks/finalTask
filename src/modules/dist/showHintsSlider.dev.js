"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var showHintsSlider = function showHintsSlider() {
  var formula = document.querySelector('.formula');
  var arrowLeft = document.querySelector('#formula-arrow_left');
  var arrowRight = document.querySelector('#formula-arrow_right');
  var style = document.createElement('style');
  style.innerHTML = "\n    .formulaSliderWrap{\n    overflow:hidden  !important;\n    }        \n    .formulaSlider{\n    align-items: flex-start !important;\n    display:flex !important;\n    transition:transform 0.5s !important;\n    will-cahnge: transform !important;\n    }\n    .formulaSlider-slide{\n    display: flex !important;\n    align-items:center;\n    justify-content: center;\n    min-width:290px !important;\n    }\n    @media (max-width: 1024px) {\n      .formula-slider-wrap {\n          width: 500px;\n          padding: 15%;\n          margin-left: auto;\n          margin-right: auto;\n      }\n  }";
  document.head.appendChild(style);
  document.querySelector('.formula-slider-wrap').classList.add('formulaSliderWrap');
  document.querySelector('.formula-slider').classList.add('formulaSlider');
  document.querySelectorAll('.formula-slider__slide').forEach(function (el) {
    return el.classList.add('formulaSlider-slide');
  });
  var items = document.querySelectorAll('.formulaSlider-slide');
  var slider = document.querySelector('.formula-slider');
  var currentItem = 0;
  var currentPosition = 0;
  items[0].classList.add('active-item');

  var cleaner = function cleaner() {
    items.forEach(function (el) {
      return el.classList.remove('active-item');
    });
  };

  arrowLeft.style.display = 'none';

  var showHintsSliderHandler = function showHintsSliderHandler(e) {
    if (e.target.closest('#formula-arrow_right')) {
      arrowLeft.style.display = 'flex';
      currentPosition = currentPosition - 290;
      currentItem++;
      cleaner();
      items[currentItem].classList.add('active-item');
      slider.style.transform = "translateX(".concat(currentPosition, "px)");
      console.log(currentItem);

      if (currentItem == 5) {
        arrowRight.style.display = 'none';
      }
    } else if (e.target.closest('#formula-arrow_left')) {
      currentPosition = currentPosition + 290;
      currentItem--;
      cleaner();
      items[currentItem].classList.add('active-item');
      slider.style.transform = "translateX(".concat(currentPosition, "px)");

      if (currentItem < 1) {
        arrowLeft.style.display = 'none';
      }
    }
  };

  formula.addEventListener('click', showHintsSliderHandler);
};

var _default = showHintsSlider;
exports["default"] = _default;