"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var togglePrivacyPopup = function togglePrivacyPopup() {
  var privacyPopup = document.querySelector('.popup-privacy');
  window.addEventListener('click', function (e) {
    if (e.target.matches('.link-privacy')) {
      privacyPopup.style.visibility = 'visible';
    } else if (!e.target.closest('.popup-dialog-privacy') || e.target.closest('.close')) {
      privacyPopup.style.visibility = 'hidden';
    }
  });
};

var _default = togglePrivacyPopup;
exports["default"] = _default;