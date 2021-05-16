const portfolioPopup = () => {
  const popupPortfolio = document.querySelector('.popup-portfolio'),
    popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');

  popupPortfolioSliderWrap.style.position = 'absolute'

  const style = document.createElement('style');
  style.innerHTML = `
        .popup-portfolio-text {
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
  const slides = document.querySelectorAll('.popup-portfolio-slider__slide');
  slides.forEach(el => {
    el.style.minHeight = '624px'
  })


  let id = 0;

  const frames = document.querySelector('.portfolio-slider').querySelectorAll('.portfolio-slider__slide-frame');
  frames.forEach(el => {
    id++
    el.setAttribute('id', `portfolio-slider__slide-frame--${id}`)
  })


  const cleaner = () => {
    document.querySelectorAll('.popup-portfolio-text').forEach(el => el.style.display = 'none')
  }

  let currentPosition = 0,
    currentSlide = 1;
  const current = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__current'),
    total = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__total');
  total.innerText = popupPortfolioSlider.children.length;

  if (screen.width <= 1024) {
    document.querySelector('.popup-dialog-portfolio').style.height = '624px'
  }

  const portfolioPopupHandler = (e) => {
    if (screen.width > 575) {
      if (e.target.closest('.portfolio-slider__slide-frame')) {
        let target = e.target.getAttribute('id').replace(/\D/g, '') - 1;
        current.innerText = target + 1;
        arrowLeft.style.display = 'none'
        popupPortfolio.style.visibility = 'visible';
        let displayText = (screen.width > 1024) ? portfolioText[currentSlide - 1].style.display = 'block' : ''
        popupPortfolioSlider.style.transform = `translateY(${-624 * target}px)`
        currentSlide = +current.textContent
        currentPosition = -624 * target;
      } else if (e.target.closest('#popup_portfolio_right')) {
        if (current.textContent >= 10) {
          arrowLeft.style.display = 'none'
          current.innerText = 1
          currentSlide = 1
          currentPosition = 0
          popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`;
        } else {
          currentSlide++
          arrowLeft.style.display = 'flex';
          current.innerText++
          cleaner()
          let displayText = (screen.width > 1024) ? portfolioText[currentSlide - 1].style.display = 'block' : ''
          currentPosition = currentPosition - 624;
          popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`
        }
      } else if (e.target.closest('#popup_portfolio_left')) {
        currentSlide--
        current.innerText = currentSlide;
        cleaner()
        let displayText = (screen.width > 1024) ? portfolioText[currentSlide + 1].style.display = 'block' : ''
        currentPosition = currentPosition + 624;
        popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`
        if (currentSlide === 1) {
          currentSlide = 1
          arrowLeft.style.display = 'none'
        }
      } else if (!e.target.closest('.popup-dialog-portfolio') || e.target.closest('.close') && e.target.closest('.popup-portfolio')) {
        popupPortfolio.style.visibility = 'hidden';
      }
    } 
    // if (screen.width <= 1024) {
    //     arrowLeft.style.display = 'none'
    //     popupPortfolio.style.visibility = 'visible';
    //     // console.log(portfolioText);
    //     portfolioText.forEach(el => el.style.display = 'none')
    // }
  }


  window.addEventListener('click', portfolioPopupHandler)

}


export default portfolioPopup;
