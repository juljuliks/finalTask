const toggleMenu = () => {
    console.log(screen.width);
    const menu = document.querySelector('.popup-dialog-menu');
    window.addEventListener('click', (e) => {

        if (e.target.matches('.menu__icon')) {
            menu.style.transform = 'translate3d(0px, 0px, 0px)';
        } else if (e.target.matches('.close-menu') || e.target.matches('.menu-link') || e.target.closest('.main')) {
            if (screen.width < 576) {
                menu.style.transform = 'translate3d(0px, -100vh, 0px)';
            } else {
                menu.style.transform = 'translate3d(645px, 0px, 0px)';
            }
        }
    })
};

export default toggleMenu;