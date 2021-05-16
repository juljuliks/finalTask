"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var repairTypesRenderData = function repairTypesRenderData() {
  var allData = [];
  fetch('../../crm-backend/db.json', {
    method: 'GET'
  }).then(function (response) {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }

    return response.json();
  }).then(function (data) {
    start();
    data.forEach(function (el) {
      return allData.push(el);
    });
  })["catch"](function (error) {
    console.error(error);
  });

  var start = function start() {
    document.querySelectorAll('.popup-repair-types-nav__item').forEach(function (el) {
      el.addEventListener('click', startRender);
    });
  };

  var startRender = function startRender(e) {
    document.querySelectorAll('.mobile-row').forEach(function (el) {
      return el.remove();
    });
    var currentBlock = document.querySelector('.popup-repair-types-content-table').querySelector('tbody');
    currentBlock.innerHTML = '';

    for (var key in allData) {
      if (allData[key]['type'] === 'Стена: Демонтажные работы') {
        allData[key]['type'] = 'Стены: Демонтажные работы';
      }

      if (e.target.textContent === allData[key]['type']) {
        document.querySelector('#switch-inner').innerText = allData[key]['type'];
        createTable(allData[key]['name'], allData[key]['cost'], currentBlock);
      }
    }
  };

  var createTable = function createTable(name, price, selector) {
    var unitsM = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'm';
    var unitsPow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '2';
    var block = document.createElement('tr');
    block.innerHTML = "<tr class=\"mobile-row\">\n                        <td class=\"repair-types-name\">".concat(name, "</td>\n                        <td class=\"mobile-col-title tablet-hide desktop-hide\">\u0415\u0434.\u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F</td>\n                        <td class=\"mobile-col-title tablet-hide desktop-hide\">\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.</td>\n                        <td class=\"repair-types-value\">").concat(unitsM, "<sup>").concat(unitsPow, "</sup></td>\n                        <td class=\"repair-types-value\">").concat(price, "\u0440\u0443\u0431.</td>\n                    </tr>");
    selector.appendChild(block);
  };
};

var _default = repairTypesRenderData;
exports["default"] = _default;