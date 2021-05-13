const toggleConsultPopup = () => {
    window.addEventListener('click', (e) => {
        if (e.target.matches('.button_wide, .mobile-hide, .tablet-hide') && e.target.closest('.director-avatar')) {
            document.querySelector('.popup-consultation').style.visibility = 'visible';
        } else if (!e.target.closest('.feedback-wrap') || e.target.matches('.close-consultation')) {
            document.querySelector('.popup-consultation').style.visibility = 'hidden';
        }
    })
}

export default toggleConsultPopup;