"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var admin = function admin() {
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
    document.querySelector('#typeItem').addEventListener('change', renderData);
  };

  var renderData = function renderData() {
    console.log('efweqg');
  };
};

var _default = admin;
exports["default"] = _default;