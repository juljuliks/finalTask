"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var faqAccordion = function faqAccordion() {
  var accordeonItems = document.querySelectorAll('div.accordion>ul>li');

  var classRemover = function classRemover() {
    accordeonItems.forEach(function (el) {
      if (el.children[0].classList.contains('msg-active')) {
        el.children[0].classList.remove('msg-active');
      }
    });
  };

  var toggleAccordion = function toggleAccordion(e) {
    if (e.target.closest('.title_block')) {
      if (e.target.classList.contains('msg-active')) {
        e.target.classList.remove('msg-active');
      } else {
        classRemover();
        e.target.classList.add('msg-active');
      }
    }
  };

  accordeonItems.forEach(function (el) {
    el.addEventListener('click', toggleAccordion);
  });
};

var _default = faqAccordion;
exports["default"] = _default;