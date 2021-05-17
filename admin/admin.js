const admin = () => {
  let allData = [];
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
      } else {
        document.location.replace('http://localhost/admin/')
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
  const modalAddItem = document.querySelector('#modal')


  // document.querySelectorAll

  const showModal = (e) => {
    e.preventDefault()
    if (e.target.closest('.btn-addItem')) {
      modalAddItem.querySelector('.modal__header').innerText = 'Добавление новой услуги'
      modalAddItem.querySelectorAll('input').forEach(el => el.value = '')
      modalAddItem.style.display = 'flex'
    } else if (e.target.closest('.button__close')) {
      modalAddItem.style.display = 'none'
    } else if (e.target.closest('.action-change')) {
      let currentCell = e.target.closest('tr');
      modalAddItem.querySelector('.input__type').value = currentCell.querySelector('.table-type').textContent
      modalAddItem.querySelector('.input__name').value = currentCell.querySelector('.table-name').textContent
      modalAddItem.querySelector('.input__units').value = currentCell.querySelector('.table-units').textContent
      modalAddItem.querySelector('.input__cost').value = currentCell.querySelector('.table-cost').textContent

      modalAddItem.style.display = 'flex';
      modalAddItem.querySelector('.modal__header').innerText = 'Редактировать услугу'
    }
  }

  window.addEventListener('click', showModal)
}

manageChanges()
