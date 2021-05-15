const portfolioSlider = () => {
  const portfolio = document.getElementById('portfolio'),
    arrowLeft = document.getElementById('portfolio-arrow_left'),
    mobileLeftBtn = document.getElementById('portfolio-arrow-mobile_right'),
    mobileRightBtn = document.getElementById('portfolio-arrow-mobile_left'),
    portfolioSlider = document.querySelector('.portfolio-slider'),
    sliderItems = Array.from(portfolioSlider.children),
    portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile'),
    sliderItemsMobile = Array.from(portfolioSliderMobile.children);

  const total = portfolio.querySelector('.slider-counter-content__total')
  total.innerText = sliderItemsMobile.length
  let current = portfolio.querySelector('.slider-counter-content__current');
  let count = 1;

  const width = sliderItems[0].offsetWidth;
  const widthMobile = 352;

  let currentPosition = 0;

  mobileRightBtn.style.display = 'none'
  mobileLeftBtn.style.zIndex = '20';
  mobileRightBtn.style.zIndex = '20';
  const style = document.createElement('style');
  style.innerHTML = `
    .portfolio-wrap{
        position: relative;
        display: flex;
        width: 100%;
        height:100%;
        transition:transform 0.5s !important;
    `
  document.head.appendChild(style);

  const createWrapper = (selector) => {
    const wrapSlides = selector.innerHTML;
    const newWrapSlides = `<div class='portfolio-wrap'>${wrapSlides}</div>`;
    selector.innerHTML = newWrapSlides;
  }
  createWrapper(portfolioSlider)
  createWrapper(portfolioSliderMobile)

  sliderItems.forEach(el => {
    el.style.minWidth = `${width}px`
  })
  const portfolioWrap = document.querySelectorAll('.portfolio-wrap')[1];
  const portfolioWrapMobiile = document.querySelectorAll('.portfolio-wrap')[0];
  const portfolioSliderHandler = (e) => {
    count++
    if (e.target.closest('#portfolio-arrow_right')) {
      arrowLeft.style.display = 'flex'
      if (screen.width > 1024 && count === 3) {
        currentPosition = 0 - width;
        count = 0;
        arrowLeft.style.display = 'none'
      } else if (count === 4) {
        currentPosition = 0 - width;
        count = 0;
        arrowLeft.style.display = 'none'
      }
      currentPosition = currentPosition + width;
      portfolioWrap.style.transform = `translateX(${-currentPosition}px)`
    } else if (e.target.closest('#portfolio-arrow_left')) {
      if (currentPosition <= 352) {
        currentPosition = currentPosition - width;
        arrowLeft.style.display = 'none'
      } else {
        currentPosition = currentPosition - width;
      }
      portfolioWrap.style.transform = `translateX(${-currentPosition}px)`
    } else if (e.target.closest('#portfolio-arrow-mobile_left')) {
      current.innerText--;
      if (current.innerText == '1') {
        mobileRightBtn.style.display = 'none'
      }
      currentPosition = currentPosition - widthMobile;
      portfolioWrapMobiile.style.transform = `translateX(${-currentPosition}px)`
    } else if (e.target.closest('#portfolio-arrow-mobile_right')) {
      currentPosition = currentPosition + widthMobile;
      mobileRightBtn.style.display = 'flex'
      current.innerText++;
      if (current.innerText == +total.innerText) {
        current.innerText = 1;
        currentPosition = 0
        mobileRightBtn.style.display = 'none'
      }
      portfolioWrapMobiile.style.transform = `translateX(${-currentPosition}px)`
    }
  }


  portfolio.addEventListener('click', portfolioSliderHandler)
}



export default portfolioSlider;
