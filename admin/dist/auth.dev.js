"use strict";

var auth = function auth() {
  var warningsMessages = document.querySelectorAll('.text-warning');
  warningsMessages.forEach(function (el) {
    return el.style.display = 'none';
  });
  var loginData = {};

  var getCookie = function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  fetch('./login.json', {
    method: 'GET'
  }).then(function (response) {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }

    return response.json();
  }).then(function (data) {
    if (getCookie('loginSuccess')) {
      document.location.replace('/admin/table.html');
    }

    start(data);
  })["catch"](function (error) {
    console.error(error);
  });

  var authentication = function authentication(e) {
    e.preventDefault();
    var login = document.getElementById('name');
    var password = document.getElementById('type');

    if (login.value === loginData.login || password.value === loginData.password) {
      saveCookie();
      login.value = '';
      password.value = '';
      document.location.replace('/admin/table.html');
    } else {
      warningsMessages.forEach(function (el) {
        return el.style.display = 'block';
      });
      login.value = '';
      password.value = '';
    }
  };

  var start = function start(data) {
    loginData = data[0];
    document.querySelector('form').addEventListener('submit', authentication);
  };

  var saveCookie = function saveCookie() {
    document.cookie = 'loginSuccess=true';
  };
};

auth();