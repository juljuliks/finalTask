const sendForm = () => {
  document.querySelectorAll('input[type=checkbox]').forEach(el => {
    el.removeAttribute('required')
  })
  const popupThank = document.querySelector('.popup-thank')
  const form1 = document.getElementById('feedback1'),
    form2 = document.getElementById('feedback2'),
    form3 = document.getElementById('feedback3'),
    form4 = document.getElementById('feedback4'),
    form6 = document.getElementById('feedback6');


  const createRequest = (form) => {
    let checkbox;
    document.querySelectorAll('input[type=checkbox]').forEach(el => {
      el.addEventListener('change', () => {
        el.setAttribute('checked', `${el.checked}`)
        checkbox = el.checked
      })
    })
    let formInputs = form.querySelectorAll('input[type=text]');
    formInputs.forEach(el => el.required = true)
    form.addEventListener('submit', (e) => {

      let checkboxCondition = form.querySelector('input[type=checkbox]').getAttribute('checked');
      e.preventDefault();
      if (!checkbox || checkboxCondition === 'false' || checkboxCondition === null) {
        form.querySelector('input[type=checkbox]').nextElementSibling.nextElementSibling.style.color = 'red'
        return
      }

      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      })

      fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200')
          }
          popupThank.style.visibility = 'visible';
          setTimeout(() => {
            popupThank.style.visibility = 'hidden';
          }, 2000)
          formInputs.forEach(input => {
            form.querySelector('input[type=checkbox]').nextElementSibling.nextElementSibling.style.color = 'black'
            input.value = input.defaultValue;
            document.querySelectorAll('input[type=checkbox]').forEach(el => {
              el.checked = false;
              el.setAttribute('checked', `${el.checked}`)
            })
          })
        })
        .catch((error) => {
          console.error(error)
        })
    });
  }

  createRequest(form1);
  createRequest(form2);
  createRequest(form3);
  createRequest(form4);
  createRequest(form6);
}


export default sendForm;
