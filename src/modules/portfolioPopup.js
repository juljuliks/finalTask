const portfolioPopup = () => {
  const popupPortfolio = document.querySelector('.popup-portfolio'),
    popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');

  popupPortfolioSliderWrap.style.position = 'absolute'

  const style = document.createElement('style');
  style.innerHTML = `
        .popup-portfolio-text {
          margin-right: 30px !important;
        }
        .popup-portfolio-text--tablet {
          background-color: #fff;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin-right: 30px !important;
        }
        .popup-portfolio-slider {
            transition:transform 0.5s !important;
        }
    `
  document.head.appendChild(style);

  const popupPortfolioSlider = document.querySelector('.popup-portfolio-slider');
  const portfolioText = document.querySelectorAll('.popup-portfolio-text');
  const arrowLeft = document.querySelector('#popup_portfolio_left');
  const arrowRight = document.querySelector('#popup_portfolio_right');
  const slides = document.querySelectorAll('.popup-portfolio-slider__slide');

  const idSetter = (selector) => {
    let id = 0;
    selector.forEach(el => {
      id++
      el.setAttribute('id', `portfolio-slider__slide-frame--${id}`)
    })
  }

  idSetter(document.querySelector('.portfolio-slider').querySelectorAll('.portfolio-slider__slide-frame'));
  idSetter(document.querySelector('.portfolio-slider-mobile').querySelectorAll('.portfolio-slider__slide-frame'))

  const cleaner = () => {
    document.querySelectorAll('.popup-portfolio-text').forEach(el => el.style.display = 'none')
  }

  let currentPosition = 0,
    currentSlide = 1;
  const current = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__current'),
    total = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__total');
  total.innerText = popupPortfolioSlider.children.length;

  portfolioText.forEach(el => el.style.display = 'none')
  if (screen.width <= 1024 && screen.width >= 768) {
    slides.forEach(el => {
      el.style.cssText = 'margin-top: 292px'
    })
    portfolioText.forEach(el => el.classList.add('popup-portfolio-text--tablet'))
    document.querySelectorAll('.popup-portfolio-text__title').forEach(el => el.style.marginTop = 'auto')
  } else if (screen.width < 768) {
    slides.forEach(el => el.style.display = 'none')
  }

  let step = (screen.width <= 1024) ? 857 : 624;

  const portfolioPopupHandler = (e) => {
    if (e.target.closest('.portfolio-slider__slide-frame')) {
      let target = e.target.getAttribute('id').replace(/\D/g, '') - 1;
      current.innerText = target + 1;
      arrowLeft.style.display = 'none'
      popupPortfolio.style.visibility = 'visible';
      if (screen.width > 1024) {
        portfolioText[currentSlide - 1].style.display = 'block'
      } else if (screen.width <= 1024 && screen.width >= 768) {
        document.querySelectorAll('.popup-arrow').forEach(el => el.style.marginTop = '100px')
        portfolioText[currentSlide - 1].style.display = 'flex'
      }
      popupPortfolioSlider.style.transform = `translateY(${-step * target}px)`
      currentSlide = +current.textContent
      currentPosition = -step * target;
      if (screen.width < 768) {
        slides.forEach(el => el.style.display = 'none')
        slides[target].style.display = 'block'
        portfolioText[currentSlide - 1].style.cssText = 'display: flex; margin-top: 300px'
        popupPortfolioSlider.style.transform = `translateY(${0}px)`
      }
    } else if (e.target.closest('#popup_portfolio_right')) {
      cleaner()
      if (screen.width >= 768) {
        if (screen.width > 1024) {
          portfolioText[currentSlide - 1].style.display = 'block'
        } else if (screen.width <= 1024 && screen.width >= 768) {
          portfolioText[currentSlide - 1].style.display = 'flex'
        }
        if (current.textContent >= 10) {
          // arrowLeft.style.display = 'none'
          current.innerText = 1
          currentSlide = 1
          currentPosition = 0
          popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`;
        } else {
          currentSlide++
          arrowLeft.style.display = 'flex';
          current.innerText++
          currentPosition = currentPosition - step;
          popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`
        }
      } else {
        currentSlide++
        arrowLeft.style.display = 'flex'
        if (currentSlide >= 10) {
          // HERE
          arrowRight.style.display = 'none'
        }
        current.innerText++
        slides.forEach(el => el.style.display = 'none')
        slides[+current.innerText - 1].style.display = 'block'
        portfolioText[currentSlide - 1].style.cssText = 'display: flex; margin-top: 300px'
      }
    } else if (e.target.closest('#popup_portfolio_left')) {
        slides.forEach(el => el.style.display = 'none')
      if (screen.width >= 768) {
        cleaner()
        currentSlide--
        current.innerText = currentSlide;
        if (screen.width > 1024) {
          portfolioText[currentSlide - 1].style.display = 'block'
        } else if (screen.width <= 1024 && screen.width >= 768) {
          document.querySelectorAll('.popup-arrow').forEach(el => el.style.marginTop = '100px')
          portfolioText[currentSlide - 1].style.display = 'flex'
        }
        currentPosition = currentPosition + step;
        popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`
        if (currentSlide === 1) {
          currentSlide = 1
          arrowLeft.style.display = 'none'
        }
      } else {
        currentSlide--
        arrowRight.style.display = 'block'
        current.innerText--
        slides.forEach(el => el.style.display = 'none')
        slides[currentSlide].style.display = 'block'
        portfolioText.forEach(el => el.style.display = 'none')
        portfolioText[currentSlide].style.cssText = 'display: flex; margin-top: 300px'
      }

    } else if (!e.target.closest('.popup-dialog-portfolio') || e.target.closest('.close') && e.target.closest('.popup-portfolio')) {
      popupPortfolio.style.visibility = 'hidden';
    }
  }


  window.addEventListener('click', portfolioPopupHandler)

}


export default portfolioPopup;
