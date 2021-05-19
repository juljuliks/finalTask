const reviewsSlider = () => {
  const reviewsBlock = document.querySelector('.reviews');
  let width = document.querySelector('.reviews-slider__slide').offsetWidth;
  let style = document.createElement('style');
  style.innerHTML = `
    .reviewWrap{
        position: relative;
        display: flex;
        width: 100%;
        height:100%;
        transition:transform 0.5s !important;
    }
    .reviewItem{
        min-width: ${width}px !important;
    }`;
  document.head.appendChild(style)
  const reviewWrap = document.querySelector('.reviews-slider').innerHTML;
  document.querySelector('.reviews-slider').innerHTML = `<div class='reviewWrap'>${reviewWrap}</div>`
  document.querySelectorAll('.reviews-slider__slide').forEach(el => el.classList.add('reviewItem'))

  const reviewWrapper = document.querySelector('.reviewWrap');
  const arrowLeft = document.querySelector('#reviews-arrow_left');
  const arrowRight = document.querySelector('#reviews-arrow_right');
  arrowLeft.style.display = 'none';

  let currentPosition = 0;
  const rewiewsBlockHandler = (e) => {
    if (e.target.closest('#reviews-arrow_right')) {
      currentPosition = currentPosition - width;
      arrowLeft.style.display = 'flex';
      if (currentPosition < -(width * 3)) {
        arrowRight.style.display = 'none';
      }
      reviewWrapper.style.transform = `translateX(${currentPosition}px)`
    } else if (e.target.closest('#reviews-arrow_left')) {
      arrowRight.style.display = 'flex';
      if (currentPosition === -width) {
        arrowLeft.style.display = 'none';
      }
      currentPosition = currentPosition + width;
      reviewWrapper.style.transform = `translateX(${currentPosition}px)`
    }
  }
  reviewsBlock.addEventListener('click', rewiewsBlockHandler)
}




export default reviewsSlider;
