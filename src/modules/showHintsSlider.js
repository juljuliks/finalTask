const showHintsSlider = () => {
  const formula = document.querySelector('.formula');
  const arrowLeft = document.querySelector('#formula-arrow_left');
  const style = document.createElement('style');
  style.innerHTML = `
    .formulaSliderWrap{
    overflow:hidden  !important;
    }        
    .formulaSlider{
    align-items: flex-start !important;
    display:flex !important;
    transition:transform 0.5s !important;
    will-cahnge: transform !important;
    }
    .formulaSlider-slide{
    display: flex !important;
    align-items:center;
    justify-content: center;
    min-width:290px !important;
    }`

  document.head.appendChild(style);

  document.querySelector('.formula-slider-wrap').classList.add('formulaSliderWrap')
  document.querySelector('.formula-slider').classList.add('formulaSlider')
  document.querySelectorAll('.formula-slider__slide').forEach(el => el.classList.add('formulaSlider-slide'))
  let items = document.querySelectorAll('.formulaSlider-slide');
  let slider = document.querySelector('.formula-slider');
  let currentItem = 0;
  let currentPosition = 0;
  items[0].classList.add('active-item')
  const cleaner = () => {
    items.forEach(el => el.classList.remove('active-item'))
  }
  arrowLeft.style.display = 'none'
  const showHintsSliderHandler = (e) => {
    if (e.target.closest('#formula-arrow_right')) {
      if (currentItem > 4) {
        arrowLeft.style.display = 'none'
        cleaner()
        currentItem = 0
        items[currentItem].classList.add('active-item')
        currentPosition = 0
        slider.style.transform = `translateX(${currentPosition}px)`
      } else {
        arrowLeft.style.display = 'flex'
        currentPosition = currentPosition - 290;
        currentItem++
        cleaner()
        items[currentItem].classList.add('active-item')
        slider.style.transform = `translateX(${currentPosition}px)`
      }
    } else if (e.target.closest('#formula-arrow_left')) {
      if (currentItem < 1) {
        arrowLeft.style.display = 'none'
      } else {
        currentItem--
        cleaner()
        items[currentItem].classList.add('active-item')
        currentPosition = currentPosition + 290;
        slider.style.transform = `translateX(${currentPosition}px)`
      }
    }
  }
  formula.addEventListener('click', showHintsSliderHandler)
}

export default showHintsSlider;
