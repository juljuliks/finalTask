"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var portfolioPopup = function portfolioPopup() {
  var popupPortfolio = document.querySelector('.popup-portfolio'),
      popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');
  popupPortfolioSliderWrap.style.position = 'absolute';
  var style = document.createElement('style');
  style.innerHTML = "\n        .popup-portfolio-text{\n                margin-right: 30px !important;\n        }\n        .popup-portfolio-slider{\n            transition:transform 0.5s !important;\n        }\n    ";
  document.head.appendChild(style);
  var popupPortfolioSlider = document.querySelector('.popup-portfolio-slider');
  var portfolioText = document.querySelectorAll('.popup-portfolio-text');
  var arrowLeft = document.querySelector('#popup_portfolio_left');

  var cleaner = function cleaner() {
    document.querySelectorAll('.popup-portfolio-text').forEach(function (el) {
      return el.style.display = 'none';
    });
  };

  var currentPosition = 0,
      currentSlide = 1;
  var current = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__current'),
      total = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__total');
  total.innerText = popupPortfolioSlider.children.length;

  var portfolioPopupHandler = function portfolioPopupHandler(e) {
    if (screen.width > 575) {
      if (e.target.closest('.portfolio-slider__slide-frame')) {
        arrowLeft.style.display = 'none';
        popupPortfolio.style.visibility = 'visible';
        portfolioText[currentSlide - 1].style.display = 'block';
        popupPortfolioSlider.style.transform = "translateY(".concat(currentPosition, "px)");
      } else if (e.target.closest('#popup_portfolio_right')) {
        arrowLeft.style.display = 'flex';
        currentSlide++;
        current.innerText = currentSlide;
        cleaner();
        portfolioText[currentSlide - 1].style.display = 'block';
        currentPosition = currentPosition - 624;

        if (currentSlide === 10) {
          arrowLeft.style.display = 'none';
          current.innerText = 1;
          currentSlide = 1;
          currentPosition = 0;
        }

        popupPortfolioSlider.style.transform = "translateY(".concat(currentPosition, "px)");
      } else if (e.target.closest('#popup_portfolio_left')) {
        currentSlide--;
        current.innerText = currentSlide;
        cleaner();
        portfolioText[currentSlide + 1].style.display = 'block';
        currentPosition = currentPosition + 624;
        popupPortfolioSlider.style.transform = "translateY(".concat(currentPosition, "px)");

        if (currentSlide === 1) {
          currentSlide = 1;
          arrowLeft.style.display = 'none';
        }
      } else if (!e.target.closest('.popup-dialog-portfolio') || e.target.closest('.close') && e.target.closest('.popup-portfolio')) {
        popupPortfolio.style.visibility = 'hidden';
      }
    }
  };

  window.addEventListener('click', portfolioPopupHandler);
};

var _default = portfolioPopup;
exports["default"] = _default;