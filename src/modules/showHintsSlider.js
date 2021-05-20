const showHintsSlider = () => {
  const formula = document.querySelector('.formula'),
        arrowLeft = document.querySelector('#formula-arrow_left'),
        arrowRight = document.querySelector('#formula-arrow_right'),
        style = document.createElement('style');
        
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
    }
    @media (max-width: 1024px) {
      .formula-slider-wrap {
          width: 500px;
          padding: 15%;
          margin-left: auto;
          margin-right: auto;
      }
  }`

  document.head.appendChild(style);
  document.querySelector('.formula-slider-wrap').classList.add('formulaSliderWrap')
  document.querySelector('.formula-slider').classList.add('formulaSlider')
  document.querySelectorAll('.formula-slider__slide').forEach(el => el.classList.add('formulaSlider-slide'))
  let items = document.querySelectorAll('.formulaSlider-slide'),
      slider = document.querySelector('.formula-slider'),
      currentItem = 0,
      currentPosition = 0;
  items[0].classList.add('active-item')
  const cleaner = () => {
    items.forEach(el => el.classList.remove('active-item'))
  }
  arrowLeft.style.display = 'none'
  const showHintsSliderHandler = (e) => {
    if (e.target.closest('#formula-arrow_right')) {
      arrowLeft.style.display = 'flex'
      currentPosition = currentPosition - 290;
      currentItem++
      cleaner()
      items[currentItem].classList.add('active-item')
      slider.style.transform = `translateX(${currentPosition}px)`
      console.log(currentItem);
      if (currentItem == 5) {
        arrowRight.style.display = 'none'
      }
    } else if (e.target.closest('#formula-arrow_left')) {
      currentPosition = currentPosition + 290;
      currentItem--
      cleaner()
      items[currentItem].classList.add('active-item')
      slider.style.transform = `translateX(${currentPosition}px)`
      if (currentItem < 1) {
        arrowLeft.style.display = 'none'
      } 
    }
  }
  formula.addEventListener('click', showHintsSliderHandler)
}

export default showHintsSlider;
