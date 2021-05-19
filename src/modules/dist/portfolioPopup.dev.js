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
  style.innerHTML = "\n        .popup-portfolio-text {\n          margin-right: 30px !important;\n        }\n        .popup-portfolio-text--tablet {\n          background-color: #fff;\n          display: flex;\n          flex-direction: row;\n          justify-content: space-around;\n          margin-right: 30px !important;\n        }\n        .popup-portfolio-slider {\n            transition:transform 0.5s !important;\n        }\n    ";
  document.head.appendChild(style);
  var popupPortfolioSlider = document.querySelector('.popup-portfolio-slider');
  var portfolioText = document.querySelectorAll('.popup-portfolio-text');
  var arrowLeft = document.querySelector('#popup_portfolio_left');
  var arrowRight = document.querySelector('#popup_portfolio_right');
  var slides = document.querySelectorAll('.popup-portfolio-slider__slide');

  var idSetter = function idSetter(selector) {
    var id = 0;
    selector.forEach(function (el) {
      id++;
      el.setAttribute('id', "portfolio-slider__slide-frame--".concat(id));
    });
  };

  idSetter(document.querySelector('.portfolio-slider').querySelectorAll('.portfolio-slider__slide-frame'));
  idSetter(document.querySelector('.portfolio-slider-mobile').querySelectorAll('.portfolio-slider__slide-frame'));

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
  portfolioText.forEach(function (el) {
    return el.style.display = 'none';
  });

  if (screen.width <= 1024 && screen.width >= 768) {
    slides.forEach(function (el) {
      el.style.cssText = 'margin-top: 292px';
    });
    portfolioText.forEach(function (el) {
      return el.classList.add('popup-portfolio-text--tablet');
    });
    document.querySelectorAll('.popup-portfolio-text__title').forEach(function (el) {
      return el.style.marginTop = 'auto';
    });
  } else if (screen.width < 768) {
    slides.forEach(function (el) {
      return el.style.display = 'none';
    });
  }

  var step = screen.width <= 1024 ? 857 : 624;

  var portfolioPopupHandler = function portfolioPopupHandler(e) {
    if (e.target.closest('.portfolio-slider__slide-frame')) {
      var target = e.target.getAttribute('id').replace(/\D/g, '') - 1;
      current.innerText = target + 1;
      arrowLeft.style.display = 'none';
      popupPortfolio.style.visibility = 'visible';

      if (screen.width > 1024) {
        portfolioText[currentSlide - 1].style.display = 'block';
      } else if (screen.width <= 1024 && screen.width >= 768) {
        document.querySelectorAll('.popup-arrow').forEach(function (el) {
          return el.style.marginTop = '100px';
        });
        portfolioText[currentSlide - 1].style.display = 'flex';
      }

      popupPortfolioSlider.style.transform = "translateY(".concat(-step * target, "px)");
      currentSlide = +current.textContent;
      currentPosition = -step * target;

      if (screen.width < 768) {
        slides.forEach(function (el) {
          return el.style.display = 'none';
        });
        slides[target].style.display = 'block';
        portfolioText[currentSlide - 1].style.cssText = 'display: flex; margin-top: 300px';
        popupPortfolioSlider.style.transform = "translateY(".concat(0, "px)");
      }
    } else if (e.target.closest('#popup_portfolio_right')) {
      cleaner();

      if (screen.width >= 768) {
        if (screen.width > 1024) {
          portfolioText[currentSlide - 1].style.display = 'block';
        } else if (screen.width <= 1024 && screen.width >= 768) {
          portfolioText[currentSlide - 1].style.display = 'flex';
        }

        currentSlide++;
        arrowLeft.style.display = 'flex';
        current.innerText++;
        currentPosition = currentPosition - step;
        popupPortfolioSlider.style.transform = "translateY(".concat(currentPosition, "px)");

        if (currentSlide == 10) {
          arrowRight.style.display = 'none';
        }
      } else {
        currentSlide++;
        arrowLeft.style.display = 'flex';

        if (currentSlide >= 10) {
          arrowRight.style.display = 'none';
        }

        current.innerText++;
        slides.forEach(function (el) {
          return el.style.display = 'none';
        });
        slides[+current.innerText - 1].style.display = 'block';
        portfolioText[currentSlide - 1].style.cssText = 'display: flex; margin-top: 300px';
      }
    } else if (e.target.closest('#popup_portfolio_left')) {
      if (screen.width >= 768) {
        cleaner();
        currentSlide--;
        current.innerText = currentSlide;

        if (screen.width > 1024) {
          portfolioText[currentSlide - 1].style.display = 'block';
        } else if (screen.width <= 1024 && screen.width >= 768) {
          document.querySelectorAll('.popup-arrow').forEach(function (el) {
            return el.style.marginTop = '100px';
          });
          portfolioText[currentSlide - 1].style.display = 'flex';
        }

        currentPosition = currentPosition + step;
        popupPortfolioSlider.style.transform = "translateY(".concat(currentPosition, "px)");

        if (currentSlide == 1) {
          arrowLeft.style.display = 'none';
        }
      } else {
        currentSlide--;
        arrowRight.style.display = 'flex';

        if (currentSlide == 1) {
          arrowLeft.style.display = 'none';
        }

        current.innerText--;
        slides.forEach(function (el) {
          return el.style.display = 'none';
        });
        slides[currentSlide - 1].style.display = 'block';
        portfolioText[currentSlide - 1].style.cssText = 'display: flex; margin-top: 300px';
      }
    } else if (!e.target.closest('.popup-dialog-portfolio') || e.target.closest('.close') && e.target.closest('.popup-portfolio')) {
      popupPortfolio.style.visibility = 'hidden';
    }
  };

  window.addEventListener('click', portfolioPopupHandler);
};

var _default = portfolioPopup;
exports["default"] = _default;