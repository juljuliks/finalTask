"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var togglePricePopup = function togglePricePopup() {
  var popupRepairTypes = document.querySelector('.popup-repair-types');

  var showPricePopup = function showPricePopup(e) {
    if (e.target.closest('.link-list-menu') || e.target.closest('.link-list-repair')) {
      popupRepairTypes.style.visibility = 'visible';
    } else if (!e.target.closest('.popup-dialog-repair-types') || e.target.closest('.close')) {
      popupRepairTypes.style.visibility = 'hidden';
    }
  };

  window.addEventListener('click', showPricePopup);
};

var _default = togglePricePopup;
exports["default"] = _default;