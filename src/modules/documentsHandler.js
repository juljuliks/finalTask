const documentsHandler = () => {
  const transparancyPopup = document.querySelector('.popup-transparency'),
    popupTransparencySlider = document.querySelector('.popup-transparency-slider'),
    trasparensyItems = document.querySelectorAll('.transparency-item'),
    total = document.querySelector('#transparency-popup-counter').querySelector('.slider-counter-content__total'),
    current = document.querySelector('#transparency-popup-counter').querySelector('.slider-counter-content__current'),
    arrowRight = document.querySelector('#transparency_right'),
    arrowLeft = document.querySelector('#transparency_left');

  let count = 1;
  current.innerText = count;
  let currentPosition = 0;
  total.innerText = trasparensyItems.length

  let styleWidth = document.querySelector('.popup-transparency-slider__slide').offsetWidth;
  const style = document.createElement('style');

  let width;
  if (screen.width <= 1024 && screen.width >= 768) width = 744;
  else if (screen.width < 768) width = 290;

  style.innerHTML = `
    .popupTransparencyWrap {
        position: relative;
        display: flex;
        width: 100%;
        height:100%;
        transition:transform 0.5s !important;
    }
    .popupTransparencyWrap .popup-transparency-slider__slide{
        min-width: ${styleWidth}px;
    }
    .transparency-slider{
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      flex-wrap: nowrap !important;
      transition:transform 0.5s !important;
  }
  .transparency-slider .transparency-item{
      min-width: ${width}px !important;
  }
  .transparency-slider-wrap{
      overflow: hidden !important;
  }
`
  document.head.appendChild(style)

  const currentInner = popupTransparencySlider.innerHTML;
  popupTransparencySlider.innerHTML = `<div class='popupTransparencyWrap'>${currentInner}</div>`;

  const transparencySlider = document.querySelector('.transparency-slider'),
  transparancyWrap = document.querySelector('.popupTransparencyWrap'),
  arrowLeftTablet = document.querySelector('#transparency-arrow_left');
  arrowLeftTablet.style.display = 'none';

  let currentWidth = +getComputedStyle(document.querySelector('.transparency-item')).minWidth.replace(/\D/g, '');

  const transparencyBlockHandler = (e) => {
    if (e.target.closest('.transparency-item__img')) {
      arrowRight.style.display = 'flex'
      arrowLeft.style.display = 'none'
      transparancyPopup.style.visibility = 'visible'
    } else if (!e.target.closest('.popup-dialog-transparency') || e.target.closest('.close') && e.target.closest('.popup-transparency')) {
      transparancyPopup.style.visibility = 'hidden'
    } else if (e.target.closest('#transparency_right')) {
      count++
      arrowLeft.style.display = 'flex'
      current.innerText = count;
      currentPosition = currentPosition - styleWidth;
      if (count > 3) {
        count = 1
        current.innerText = count;
        currentPosition = 0
        arrowLeft.style.display = 'none'
      }
      transparancyWrap.style.transform = `translateX(${currentPosition}px)`
    } else if (e.target.closest('#transparency_left')) {
      count--
      current.innerText = count;
      currentPosition = currentPosition + styleWidth;
      if (current.innerText == 1) {
        arrowLeft.style.display = 'none'
      }
      transparancyWrap.style.transform = `translateX(${currentPosition}px)`
    }
    if (e.target.closest('#transparency-arrow_right')) {
      arrowLeftTablet.style.display = 'flex'
      currentPosition = currentPosition - currentWidth;
      if (currentPosition < -(currentWidth * 2)) {
        currentPosition = 0;
        arrowLeftTablet.style.display = 'none'
      }
      transparencySlider.style.transform = `translateX(${currentPosition}px)`
    } else if (e.target.closest('#transparency-arrow_left')) {
      if (currentPosition == -currentWidth) {
        arrowLeftTablet.style.display = 'none'
      }
      currentPosition = currentPosition + currentWidth;
      transparencySlider.style.transform = `translateX(${currentPosition}px)`
    }
  }

  window.addEventListener('click', transparencyBlockHandler)
}

export default documentsHandler;
