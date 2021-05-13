"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var showHints = function showHints() {
  var formulaItems = document.querySelectorAll('.formula-item__icon-inner-text');
  var style = document.createElement('style');
  style.innerHTML = "\n    .formula-item-popup-rotate {\n        transform: translateY(5px);\n        padding-top: 35px;\n        top: 155px;\n    }\n    .formula-item-popup-rotate:before {\n        transform: rotateZ(180deg)\n    }";
  document.head.appendChild(style);

  var showHint = function showHint(e) {
    if (e.target.closest('.formula-item')) {
      if (e.target.getBoundingClientRect().top < 150 && e.target.getBoundingClientRect().bottom < 600) {
        e.target.parentNode.firstElementChild.classList.add('formula-item-popup-rotate');
      }

      e.target.parentNode.parentNode.classList.add('active-item');
      e.target.parentNode.parentNode.parentNode.style.zIndex = '1';
    }
  };

  var hideHint = function hideHint(e) {
    if (e.target.closest('.formula-item')) {
      e.target.parentNode.firstElementChild.classList.remove('formula-item-popup-rotate');
      e.target.parentNode.parentNode.classList.remove('active-item');
      e.target.parentNode.parentNode.parentNode.style.zIndex = '0';
    }
  };

  formulaItems.forEach(function (el) {
    el.addEventListener('mouseenter', showHint);
  });
  formulaItems.forEach(function (el) {
    el.addEventListener('mouseleave', hideHint);
  });
};

var _default = showHints;
exports["default"] = _default;