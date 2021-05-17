const admin = () => {
  let allData = []

  const setStorage = () => {
    let storageData = []
    for (const key in allData) {
      storageData.push(allData[key]);
    }
    localStorage.setItem('allData', JSON.stringify(storageData))
  }

  let selectList = document.querySelector('#typeItem');
  const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
  fetch('../../crm-backend/db.json', {
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
        start(data)
        setStorage()
      } else {
        document.location.replace('/admin/')
      }
    })
    .catch((error) => {
      console.error(error)
    })

  const start = (arr) => {
    document.querySelectorAll('.table__row').forEach(el => el.remove());
    arr.forEach(el => allData.push(el))
    renderAll()
    createList()
    renderList()
    selectList.addEventListener('change', renderData)
  }

  const renderAll = () => {
    document.querySelectorAll('.table__row').forEach(el => el.remove());
    let currentSelector = document.querySelector('#tbody')
    for (const key in allData) {
      createTable(allData[key]['id'], allData[key]['name'], allData[key]['cost'], allData[key]['type'], currentSelector)
    }
  }

  const createList = () => {
    let result = [];
    allData.forEach(el => {
      result.push(el['type'])
    })
    let filteredArr = new Set(result)
    return filteredArr;
  }

  const renderList = () => {
    selectList.innerHTML = '';
    let emptyOption = document.createElement('option');
    selectList.appendChild(emptyOption);
    emptyOption.text = `Все`;
    let arr = createList();
    arr.forEach(item => {
      let listItem = document.createElement('option');
      listItem.text = item;
      selectList.appendChild(listItem);
    })
  }

  const renderData = (e) => {
    let currentSelector = document.querySelector('#tbody')
    currentSelector.innerHTML = ''
    for (const key in allData) {
      if (allData[key]['type'] === e.target.value) {
        createTable(allData[key]['id'], allData[key]['name'], allData[key]['cost'], allData[key]['type'], currentSelector)
      }
    }
    if (e.target.value === 'Все') {
      renderAll()
    }
  }

  const createTable = (id, name, price, type, selector, unitsM = 'm', unitsPow = '2') => {
    let block = document.createElement('tr');
    block.innerHTML = `<tr class="table__row">
                        <td class="table__id table__cell">${id}</td>
                      <td class="table-type table__cell">${name}</td>
                      <td class="table-name table__cell">${type}</td>
                      <td class="table-units table__cell">${unitsM}${unitsPow}</td>
                      <td class="table-cost table__cell">${price}</td>
                      <td>
                        <div class="table__actions table__cell">
                          <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                          </button>
                          <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    `
    selector.appendChild(block)
  }
}

admin();

const manageChanges = () => {
  const addItemBtn = document.querySelector('.btn-addItem')
  const modal = document.querySelector('#modal')

  const deleteItem = (id) => {
    fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const addItem = () => {
    let form = document.querySelector('form');
    let body = {
      'type': form.querySelector('.input__name').value,
      'name': form.querySelector('.input__type').value,
      'units': form.querySelector('.input__units').value,
      'cost': +form.querySelector('.input__cost').value
    };
    fetch('http://localhost:3000/api/items', {
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
        console.log(body);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const getChangingItem = (id) => {
    fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const changeItem = (id) => {
    let form = document.querySelector('form');
    let body = {
      'type': form.querySelector('.input__name').value,
      'name': form.querySelector('.input__type').value,
      'units': form.querySelector('.input__units').value,
      'cost': +form.querySelector('.input__cost').value
    };
    fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const changesHandler = (e) => {
    e.preventDefault()
    if (e.target.closest('.btn-addItem')) {
      modal.querySelector('.modal__header').innerText = 'Добавление новой услуги'
      modal.querySelectorAll('input').forEach(el => el.value = '')
      modal.style.display = 'flex';
      document.querySelector('.button-ui_firm').setAttribute('id', 'addItem');
    } else if (e.target.closest('.button__close')) {
      modal.style.display = 'none'
    } else if (e.target.closest('.action-change')) {
      let currentCell = e.target.closest('tr');
      modal.querySelector('.input__type').value = currentCell.querySelector('.table-type').textContent
      modal.querySelector('.input__name').value = currentCell.querySelector('.table-name').textContent
      modal.querySelector('.input__units').value = currentCell.querySelector('.table-units').textContent
      modal.querySelector('.input__cost').value = currentCell.querySelector('.table-cost').textContent
      modal.style.display = 'flex';
      modal.querySelector('.modal__header').innerText = 'Редактировать услугу'
      let id = e.target.closest('tr').querySelector('.table__cell').textContent;
      getChangingItem(id)
      document.querySelector('.button-ui_firm').setAttribute('id', 'change');
      document.querySelector('#change').removeAttribute('data-id');
      document.querySelector('.button-ui_firm').dataset.id = `${id}`
    } else if (e.target.closest('#addItem')) {
      addItem()
    } else if (e.target.closest('.action-remove')) {
      let id = e.target.closest('tr').querySelector('.table__cell').textContent;
      deleteItem(id)
    } else if (e.target.closest('#change')) {
      let id = document.querySelector('#change').getAttribute('data-id')
      changeItem(id)
    }
  }
  window.addEventListener('click', changesHandler)
}

manageChanges()
