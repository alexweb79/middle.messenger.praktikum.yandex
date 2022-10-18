const togglePopUp = () => {
  const buttons = document.querySelectorAll('button[data-pop-up]');
  if (buttons) {
    buttons.forEach(button => {
      const buttonAttr = button.getAttribute('data-pop-up');
      const popUp = document.querySelector('#' + buttonAttr);
      const togglePopUp = () => {
        popUp.classList.toggle('is-active');
      }

      button.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePopUp();
      })

      document.addEventListener("click", function (e) {
        const target = e.target;
        const itsPopUp = target === popUp || popUp.contains(target);
        const itsButton = target === button;
        const popUpIsActive = popUp.classList.contains("is-active");

        if (!itsPopUp && !itsButton && popUpIsActive) {
          togglePopUp();
        }
      });
    })
  }
};

export default togglePopUp;
