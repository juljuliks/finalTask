const faqAccordion = () => {

  const accordeonItems = document.querySelectorAll('div.accordion>ul>li')

  const toggleAccordion = (e) => {
    accordeonItems.forEach(el => {
      el.children[0].classList.remove('msg-active')
    })
    if (e.target.closest('.title_block')) {
      e.target.classList.toggle('msg-active');
    }
  }

  accordeonItems.forEach(el => {
    el.addEventListener('click', toggleAccordion)
  })
}

export default faqAccordion;
