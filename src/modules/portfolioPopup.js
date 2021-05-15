const portfolioPopup = () => {
  const popupPortfolio = document.querySelector('.popup-portfolio'),
        popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');

  popupPortfolioSliderWrap.style.position = 'absolute'

  const style = document.createElement('style');
  style.innerHTML = `
        .popup-portfolio-text{
                margin-right: 30px !important;
        }
        .popup-portfolio-slider{
            transition:transform 0.5s !important;
        }
    `
  document.head.appendChild(style);

  const popupPortfolioSlider = document.querySelector('.popup-portfolio-slider');
  const portfolioText = document.querySelectorAll('.popup-portfolio-text');
  const arrowLeft = document.querySelector('#popup_portfolio_left');

  const cleaner = () => {
    document.querySelectorAll('.popup-portfolio-text').forEach(el => el.style.display = 'none')
  }

  let currentPosition = 0, currentSlide = 1;
  const current = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__current'),
  total = document.querySelector('#popup-portfolio-counter').querySelector('.slider-counter-content__total');
  total.innerText = popupPortfolioSlider.children.length;

  const portfolioPopupHandler = (e) => {
    if (e.target.closest('.portfolio-slider__slide-frame')) {
      arrowLeft.style.display = 'none'
      popupPortfolio.style.visibility = 'visible';
      portfolioText[currentSlide - 1].style.display = 'block'
      popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`
    } else if (e.target.closest('#popup_portfolio_right')) {
      arrowLeft.style.display = 'flex'
      currentSlide++
      current.innerText = currentSlide;
      cleaner()
      portfolioText[currentSlide - 1].style.display = 'block'
      currentPosition = currentPosition - 624;
      if (currentSlide === 10) {
        arrowLeft.style.display = 'none'
        current.innerText = 1
        currentSlide = 1
        currentPosition = 0
      }
      popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`
    } else if (e.target.closest('#popup_portfolio_left')) {
      currentSlide--
      current.innerText = currentSlide;
      cleaner()
      portfolioText[currentSlide + 1].style.display = 'block'
      currentPosition = currentPosition + 624;
      popupPortfolioSlider.style.transform = `translateY(${currentPosition}px)`
      if (currentSlide === 1) {
        currentSlide = 1
        arrowLeft.style.display = 'none'
      }
    }
  }


  window.addEventListener('click', portfolioPopupHandler)

}


export default portfolioPopup;
