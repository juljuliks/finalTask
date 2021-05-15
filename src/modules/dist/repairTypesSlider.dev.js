"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var repairTypesSlider = function repairTypesSlider() {
  var sliderBlock = document.getElementById('repair-types'),
      slider = document.querySelector('.repair-types-slider'),
      navItem = document.querySelectorAll('.repair-types-nav__item'),
      sliderItems = Array.from(slider.children),
      listRepair = document.querySelector('.nav-list-repair');
  listRepair.style.transform = "translateX(0px)";
  var currentPosition = 0;
  var mobileTabsPosition = 0;
  var imgHeight = 546;
  var count = 1;
  var style = document.createElement('style');
  style.innerHTML = "\n        .activeType: {\n            display: block;\n        }\n    ";
  document.head.appendChild(style);
  document.querySelector('.types-repair1').classList.add('activeType');

  var classRemover = function classRemover() {
    navItem.forEach(function (el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
  };

  var hideItems = function hideItems() {
    sliderItems.forEach(function (el) {
      el.style.transform = 'translateY(0px)';
      el.style.display = 'none';

      if (el.classList.contains('activeType')) {
        el.classList.remove('activeType');
      }
    });
  };

  var repairSliderHandler = function repairSliderHandler(e) {
    var total = document.querySelector('.slider-counter-content__total');

    if (e.target.closest('.repair-types-nav__item')) {
      hideItems();
      var repairTypes = e.target.classList[2].split('-')[e.target.classList[2].split('-').length - 1],
          currentSelector = ".types-repair".concat(repairTypes),
          currentElem = document.querySelector(currentSelector);
      currentElem.style.display = 'block';
      currentPosition = 0;
      count = 1;
      document.querySelector('.slider-counter-content__current').innerText = '1';
      total.textContent = currentElem.children.length;
      currentElem.classList.add('activeType');

      if (e.target.classList.contains('active')) {
        return;
      } else {
        classRemover();
        e.target.classList.add('active');
      }
    } else if (e.target.closest('#repair-types-arrow_right')) {
      count = document.querySelector('.slider-counter-content__current');
      var displayCount = count.innerText == +total.textContent ? count.innerText = 1 : count.innerText++;
      var elem = document.querySelector('.activeType');
      elem.style.display = 'block';
      currentPosition = currentPosition - imgHeight;

      if (currentPosition <= -elem.children.length * imgHeight) {
        currentPosition = 0;
      }

      elem.style.transform = "translateY(".concat(currentPosition, "px)");
    } else if (e.target.closest('#repair-types-arrow_left')) {
      count = document.querySelector('.slider-counter-content__current');
      var totalCount = +total.textContent; // let displayCount = (count.innerText == totalCount) ? count.innerText-- : count.innerText = (count.innerText < totalCount) ? count.innerText = 1 : count.innerText = (count.innerText == 1) ? count.innerText = --totalCount : count.innerText = ''

      var _displayCount = count.innerText < totalCount ? count.innerText == 1 ? count.innerText = totalCount : count.innerText > 1 ? count.innerText-- : count.innerText = 1 : count.innerText--;

      var _elem = document.querySelector('.activeType');

      _elem.style.display = 'block';
      currentPosition = currentPosition + imgHeight;

      if (currentPosition > 0) {
        currentPosition = -(_elem.children.length - 1) * imgHeight;
      }

      _elem.style.transform = "translateY(".concat(currentPosition, "px)");
    } else if (e.target.closest('#nav-arrow-repair-right_base')) {
      if (screen.width > 575) {
        mobileTabsPosition = mobileTabsPosition - screen.width / 5;

        if (mobileTabsPosition === -screen.width) {
          mobileTabsPosition = 0;
        }
      } else {
        mobileTabsPosition = mobileTabsPosition - screen.width / 3;

        if (mobileTabsPosition < -890) {
          mobileTabsPosition = 0;
        }
      }

      listRepair.style.transform = "translateX(".concat(mobileTabsPosition, "px)");
    } else if (e.target.closest('#nav-arrow-repair-left_base')) {
      if (mobileTabsPosition === 0) {
        e.target.readOnly = true;
      } else {
        if (screen.width > 575) {
          mobileTabsPosition = mobileTabsPosition + screen.width / 5;
        } else {
          mobileTabsPosition = mobileTabsPosition + screen.width / 3;
        }
      }

      listRepair.style.transform = "translateX(".concat(mobileTabsPosition, "px)");
    }
  };

  sliderBlock.addEventListener('click', repairSliderHandler);
};

var _default = repairTypesSlider;
exports["default"] = _default;