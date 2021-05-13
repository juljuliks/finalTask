const togglePrivacyPopup = () => {
    const privacyPopup = document.querySelector('.popup-privacy');
    window.addEventListener('click', (e) => {
        if (e.target.matches('.link-privacy')) {
            privacyPopup.style.visibility = 'visible';
        } else if (!e.target.closest('.popup-dialog-privacy')) {
            privacyPopup.style.visibility = 'hidden';
        }
    })
}

export default togglePrivacyPopup;
