const repairTypesSlider = () => {
  const sliderBlock = document.getElementById('repair-types'),
    slider = document.querySelector('.repair-types-slider'),
    navItem = document.querySelectorAll('.repair-types-nav__item'),
    sliderItems = Array.from(slider.children),
    listRepair = document.querySelector('.nav-list-repair');

  listRepair.style.transform = `translateX(0px)`

  // console.log(document.querySelector('.repair-types-slider__slide').children[0].offsetHeight);
  let currentPosition = 0;
  let mobileTabsPosition = 0;
  const imgHeight = document.querySelector('.repair-types-slider__slide').children[0].offsetHeight;
  let count = 1;
  const style = document.createElement('style');
  style.innerHTML = `
        .activeType: {
            display: block;
        }
    `
  document.head.appendChild(style)
  document.querySelector('.types-repair1').classList.add('activeType');

  const classRemover = () => {
    navItem.forEach(el => {
      if (el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
  }

  const hideItems = () => {
    sliderItems.forEach(el => {
      el.style.transform = 'translateY(0px)'
      el.style.display = 'none'
      if (el.classList.contains('activeType')) {
        el.classList.remove('activeType')
      }
    })
  }

  const repairSliderHandler = (e) => {
    let total = document.querySelector('.slider-counter-content__total');
    if (e.target.closest('.repair-types-nav__item')) {
      hideItems();
      const repairTypes = e.target.classList[2].split('-')[e.target.classList[2].split('-').length - 1],
        currentSelector = `.types-repair${repairTypes}`,
        currentElem = document.querySelector(currentSelector);
      currentElem.style.display = 'block';
      currentPosition = 0;
      count = 1;
      document.querySelector('.slider-counter-content__current').innerText = '1'

      total.textContent = currentElem.children.length
      currentElem.classList.add('activeType')
      if (e.target.classList.contains('active')) {
        return
      } else {
        classRemover()
        e.target.classList.add('active')
      }
    } else if (e.target.closest('#repair-types-arrow_right')) {
      count = document.querySelector('.slider-counter-content__current');
      let displayCount = (count.innerText == +total.textContent) ? count.innerText = 1 : count.innerText++
      const elem = document.querySelector('.activeType');
      elem.style.display = 'block'
      currentPosition = currentPosition - imgHeight;
      if (currentPosition <= -elem.children.length * imgHeight || currentPosition < -((+total.textContent - 1) *  imgHeight)) {
        currentPosition = 0
      }
      elem.style.transform = `translateY(${currentPosition}px)`
    } else if (e.target.closest('#repair-types-arrow_left')) {
      count = document.querySelector('.slider-counter-content__current');
      let totalCount = +total.textContent
      let displayCount = (count.innerText < totalCount) ? (count.innerText == 1) ? count.innerText = totalCount : (count.innerText > 1) ? count.innerText-- : count.innerText = 1 : count.innerText--
      const elem = document.querySelector('.activeType');
      elem.style.display = 'block'
      currentPosition = currentPosition + imgHeight;
      if (currentPosition > 0) {
        currentPosition = -(elem.children.length - 1) * imgHeight
      }
      elem.style.transform = `translateY(${currentPosition}px)`
    } else if (e.target.closest('#nav-arrow-repair-right_base')) {
      if (screen.width > 575) {
        mobileTabsPosition = mobileTabsPosition - (screen.width / 5);
        if (mobileTabsPosition === -screen.width) {
          mobileTabsPosition = 0
        }
      } else {
        mobileTabsPosition = mobileTabsPosition - (screen.width / 3);
        if (mobileTabsPosition < -890) {
          mobileTabsPosition = 0
        }
      }
      listRepair.style.transform = `translateX(${mobileTabsPosition}px)`
    } else if (e.target.closest('#nav-arrow-repair-left_base')) {
      if (mobileTabsPosition === 0) {
        e.target.readOnly = true
      } else {
        if (screen.width > 575) {
          mobileTabsPosition = mobileTabsPosition + (screen.width / 5);
        } else {
          mobileTabsPosition = mobileTabsPosition + (screen.width / 3);
        }
      }
      listRepair.style.transform = `translateX(${mobileTabsPosition}px)`
    }
  }
  sliderBlock.addEventListener('click', repairSliderHandler)
}

export default repairTypesSlider;
