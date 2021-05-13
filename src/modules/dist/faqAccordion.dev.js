"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var faqAccordion = function faqAccordion() {
  var accordeonItems = document.querySelectorAll('div.accordion>ul>li');

  var toggleAccordion = function toggleAccordion(e) {
    accordeonItems.forEach(function (el) {
      el.children[0].classList.remove('msg-active');
    });

    if (e.target.closest('.title_block')) {
      e.target.classList.toggle('msg-active');
    }
  };

  accordeonItems.forEach(function (el) {
    el.addEventListener('click', toggleAccordion);
  });
};

var _default = faqAccordion;
exports["default"] = _default;