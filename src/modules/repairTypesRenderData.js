const repairTypesRenderData = () => {
  let allData = [];
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
      start()
      data.forEach(el => allData.push(el))
    })
    .catch((error) => {
      console.error(error)
    })


  const start = () => {
    // document.querySelectorAll('.popup-repair-types-content-table__list').forEach(el => el.innerHTML = '')
    document.querySelectorAll('.popup-repair-types-nav__item').forEach(el => {
      el.addEventListener('click', startRender)
    })
  }

  const startRender = (e) => {
    let currentBlock = document.querySelector('.popup-repair-types-content-table').querySelector('tbody')
    currentBlock.innerHTML = '';
    for (const key in allData) {
      if (allData[key]['type'] === 'Стена: Демонтажные работы') {
        allData[key]['type'] = 'Стены: Демонтажные работы'
      }
      if (e.target.textContent === allData[key]['type']) {
        document.querySelector('#switch-inner').innerText = allData[key]['type']
        createTable(allData[key]['name'], allData[key]['cost'], currentBlock)
      }
    }
  }

  const createTable = (name, price, selector, unitsM = 'm', unitsPow = '2') => {
    let block = document.createElement('tr');
    block.innerHTML = `<tr class="mobile-row">
                        <td class="repair-types-name">${name}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">${unitsM}<sup>${unitsPow}</sup></td>
                        <td class="repair-types-value">${price}руб.</td>
                    </tr>`
    selector.appendChild(block)
  }

}




export default repairTypesRenderData;
