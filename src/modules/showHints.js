const showHints = () => {
    const formulaItems = document.querySelectorAll('.formula-item__icon-inner-text');

    let style = document.createElement('style');
    style.innerHTML = `
    .formula-item-popup-rotate {
        transform: translateY(5px);
        padding-top: 35px;
        top: 155px;
    }
    .formula-item-popup-rotate:before {
        transform: rotateZ(180deg)
    }`
    document.head.appendChild(style);
    const showHint = (e) => {
        if (e.target.closest('.formula-item')) {
            if (e.target.getBoundingClientRect().top < 150 || e.target.getBoundingClientRect().bottom < 600) {
                e.target.parentNode.firstElementChild.classList.add('formula-item-popup-rotate')
            }
            e.target.parentNode.parentNode.classList.add('active-item')
            e.target.parentNode.parentNode.parentNode.style.zIndex = '1';
        }
    }

    const hideHint = (e) => {
        if (e.target.closest('.formula-item')) {
            e.target.parentNode.firstElementChild.classList.remove('formula-item-popup-rotate')
            e.target.parentNode.parentNode.classList.remove('active-item')
            e.target.parentNode.parentNode.parentNode.style.zIndex = '0';
        } 
    }

    formulaItems.forEach(el => {
        el.addEventListener('mouseenter', showHint)
    })

    formulaItems.forEach(el => {
        el.addEventListener('mouseleave', hideHint)
    })
}

export default showHints;