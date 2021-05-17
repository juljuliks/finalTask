const auth = () => {
  const warningsMessages = document.querySelectorAll('.text-warning');
  warningsMessages.forEach(el => el.style.display = 'none')
  let loginData = {};
  const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
  fetch('./login.json', {
      method: 'GET'
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200')
      }
      return response.json();
    })
    .then((data) => {
      if (getCookie('loginSuccess')) {
        document.location.replace('/admin/table.html')
      }
      start(data)
    })
    .catch((error) => {
      console.error(error)
    })

  const authentication = (e) => {
    e.preventDefault();
    const login = document.getElementById('name')
    const password = document.getElementById('type')
    if (login.value === loginData.login || password.value === loginData.password) {
      saveCookie();
      login.value = '';
      password.value = '';
      document.location.replace('/admin/table.html')
    } else {
      warningsMessages.forEach(el => el.style.display = 'block')
      login.value = '';
      password.value = '';
    }
  }

  const start = (data) => {
    loginData = data[0];
    document.querySelector('form').addEventListener('submit', authentication)
  }

  const saveCookie = () => {
    document.cookie = 'loginSuccess=true';
  }
}

auth()
