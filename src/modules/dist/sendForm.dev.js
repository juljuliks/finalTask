"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var sendForm = function sendForm() {
  document.querySelectorAll('input[type=checkbox]').forEach(function (el) {
    el.removeAttribute('required');
  });
  var popupThank = document.querySelector('.popup-thank');
  var form1 = document.getElementById('feedback1'),
      form2 = document.getElementById('feedback2'),
      form3 = document.getElementById('feedback3'),
      form4 = document.getElementById('feedback4'),
      form6 = document.getElementById('feedback6');

  var createRequest = function createRequest(form) {
    var checkbox;
    document.querySelectorAll('input[type=checkbox]').forEach(function (el) {
      el.addEventListener('change', function () {
        el.setAttribute('checked', "".concat(el.checked));
        checkbox = el.checked;
      });
    });
    var formInputs = form.querySelectorAll('input[type=text]');
    formInputs.forEach(function (el) {
      return el.required = true;
    });
    form.addEventListener('submit', function (e) {
      var checkboxCondition = form.querySelector('input[type=checkbox]').getAttribute('checked');
      e.preventDefault();

      if (!checkbox || checkboxCondition === 'false' || checkboxCondition === null) {
        form.querySelector('input[type=checkbox]').nextElementSibling.nextElementSibling.style.color = 'red';
        return;
      }

      var formData = new FormData(form);
      var body = {};
      formData.forEach(function (val, key) {
        body[key] = val;
      });
      fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(function (response) {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }

        popupThank.style.visibility = 'visible';
        setTimeout(function () {
          popupThank.style.visibility = 'hidden';
        }, 2000);
        formInputs.forEach(function (input) {
          form.querySelector('input[type=checkbox]').nextElementSibling.nextElementSibling.style.color = 'black';
          input.value = input.defaultValue;
          document.querySelectorAll('input[type=checkbox]').forEach(function (el) {
            el.checked = false;
            el.setAttribute('checked', "".concat(el.checked));
          });
        });
      })["catch"](function (error) {
        console.error(error);
      });
    });
  };

  createRequest(form1);
  createRequest(form2);
  createRequest(form3);
  createRequest(form4);
  createRequest(form6);
};

var _default = sendForm;
exports["default"] = _default;