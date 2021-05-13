"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var toggleConsultPopup = function toggleConsultPopup() {
  window.addEventListener('click', function (e) {
    if (e.target.matches('.button_wide, .mobile-hide, .tablet-hide') && e.target.closest('.director-avatar')) {
      document.querySelector('.popup-consultation').style.visibility = 'visible';
    } else if (!e.target.closest('.feedback-wrap') || e.target.matches('.close-consultation')) {
      document.querySelector('.popup-consultation').style.visibility = 'hidden';
    }
  });
};

var _default = toggleConsultPopup;
exports["default"] = _default;