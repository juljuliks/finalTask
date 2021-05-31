const faqAccordion = () => {
  const accordeonItems = document.querySelectorAll("div.accordion>ul>li");

  const classRemover = () => {
    accordeonItems.forEach((el) => {
      if (el.children[0].classList.contains("msg-active")) {
        el.children[0].classList.remove("msg-active");
      }
    });
  };

  const toggleAccordion = (e) => {
    if (e.target.closest(".title_block")) {
      if (e.target.classList.contains("msg-active")) {
        e.target.classList.remove("msg-active");
      } else {
        classRemover();
        e.target.classList.add("msg-active");
      }
    }
  };

  accordeonItems.forEach((el) => {
    el.addEventListener("click", toggleAccordion);
  });

};

export default faqAccordion;
