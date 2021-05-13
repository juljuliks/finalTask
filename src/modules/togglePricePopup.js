const togglePricePopup = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');

    const showPricePopup = (e) => {
        if (e.target.closest('.link-list-menu') || e.target.closest('.link-list-repair')) {
            popupRepairTypes.style.visibility = 'visible';
        } else if (e.target.closest('.close') || !e.target.closest('.popup-dialog-repair-types')) {
            popupRepairTypes.style.visibility = 'hidden';
        }
    }

    window.addEventListener('click', showPricePopup);
}

export default togglePricePopup;
