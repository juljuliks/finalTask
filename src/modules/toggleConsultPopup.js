const toggleConsultPopup = () => {
    window.addEventListener('click', (e) => {
        if (e.target.matches('.button, .button_wide, .mobile-hide, .tablet-hide')) {
            document.querySelector('.popup-consultation').style.visibility = 'visible';
        } else if (!e.target.closest('.feedback-wrap')) {
            document.querySelector('.popup-consultation').style.visibility = 'hidden';
        }
    })
}

export default toggleConsultPopup;