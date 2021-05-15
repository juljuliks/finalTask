const documentsHandler = () => {
  const transparencyBlock = document.querySelector('.transparency'),
    transparancyPopup = document.querySelector('.popup-transparency'),
    popupTransparencySlider = document.querySelector('.popup-transparency-slider'),
    trasparensyItems = document.querySelectorAll('.transparency-item');

  const total = document.querySelector('#transparency-popup-counter').querySelector('.slider-counter-content__total');
  const current = document.querySelector('#transparency-popup-counter').querySelector('.slider-counter-content__current');
  const arrowRight = document.querySelector('#transparency_right')
  const arrowLeft = document.querySelector('#transparency_left')

  let count = 1;
  current.innerText = count;
  let currentPosition = 0;
  total.innerText = trasparensyItems.length

  const style = document.createElement('style');
  style.innerHTML = `
    .popupTransparencyWrap {
        position: relative;
        display: flex;
        width: 100%;
        height:100%;
        transition:transform 0.5s !important;
    }
    .popupTransparencyWrap .popup-transparency-slider__slide{
        min-width:432px;
    }
`
  document.head.appendChild(style)


  if (screen.width <= 1024) {
    const transparencyStyle = document.createElement('style');
    style.innerHTML = `
      .transparency-slider{
          display: -webkit-box !important;
          display: -ms-flexbox !important;
          display: flex !important;
          flex-wrap: nowrap !important;
          transition:transform 0.5s !important;
      }
      .transparency-slider .transparency-item{
          min-width: 744px !important;
      }
      .transparency-slider-wrap{
          overflow: hidden !important;
      }`
    document.head.appendChild(transparencyStyle)
  } 
  if (screen.width < 768) {
    const transparencyStyle = document.createElement('style');
    style.innerHTML = `
    .transparency-slider{
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        transition:transform 0.5s !important;
    }
    .transparency-slider .transparency-item{
        min-width: 290px !important;
    }
    .transparency-slider-wrap{
        overflow: hidden !important;
    }`
    document.head.appendChild(transparencyStyle)
  } 


  const currentInner = popupTransparencySlider.innerHTML;
  popupTransparencySlider.innerHTML = `<div class='popupTransparencyWrap'>${currentInner}</div>`;

  const transparencySlider = document.querySelector('.transparency-slider');
  const transparancyWrap = document.querySelector('.popupTransparencyWrap');
  const arrowRightTablet = document.querySelector('#transparency-arrow_right');
  const arrowLeftTablet = document.querySelector('#transparency-arrow_left');
  const imgWidth = transparancyWrap.querySelector('img').offsetWidth
  arrowLeftTablet.style.display = 'none';

  let currentWidth = +getComputedStyle(document.querySelector('.transparency-item')).minWidth.replace(/\D/g, '');



  const transparencyBlockHandler = (e) => {
    if (e.target.closest('.transparency-item__img')) {
      arrowRight.style.display = 'flex'
      arrowLeft.style.display = 'none'
      transparancyWrap.style.transform = 'translateX(${currentPosition}px)'
      transparancyPopup.style.visibility = 'visible'
    } else if (!e.target.closest('.popup-dialog-transparency') || e.target.closest('.close') && e.target.closest('.popup-transparency')) {
      transparancyPopup.style.visibility = 'hidden'
    } else if (e.target.closest('#transparency_right')) {
      count++
      arrowLeft.style.display = 'flex'
      current.innerText = count;
      currentPosition = currentPosition - imgWidth;
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
      currentPosition = currentPosition + imgWidth;
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
      console.log(currentPosition);
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
