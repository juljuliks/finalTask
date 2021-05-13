const toggleNumber = () => {
    const arrowBtn = document.querySelector('.header-contacts__arrow').querySelector('img'),
          phoneAccord = document.querySelector('.header-contacts__phone-number-accord'),
          phoneNumber = document.querySelector('.header-contacts__phone-number-accord a');
          
    arrowBtn.addEventListener('click', () => {
        let currentOpacity = getComputedStyle(phoneNumber).opacity;
        if (currentOpacity === '0') {
            phoneNumber.style.display = 'block';
            phoneAccord.style.position = 'static';
            phoneNumber.style.opacity = '1';
            arrowBtn.style.transform = 'rotateZ(180deg)';
        } else {
            phoneAccord.style.position = 'relative';
            phoneNumber.style.opacity = '0';
            phoneNumber.style.display = 'none';
            arrowBtn.style.transform = 'rotateZ(0deg)';
        }
    })
}

export default toggleNumber;