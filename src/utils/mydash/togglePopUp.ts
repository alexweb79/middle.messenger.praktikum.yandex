const togglePopUp = () => {
  const buttons = document.querySelectorAll('button[data-pop-up]');
  if (buttons) {
    buttons.forEach((button) => {
      const buttonAttr = button.getAttribute('data-pop-up');
      const popUp: Element | null = document.querySelector(`#${buttonAttr}`);
      if (popUp !== null) {
        const togglePopUpClass = () => {
          popUp.classList.toggle('is-active');
        };
        button.addEventListener('click', (e: Event) => {
          e.stopPropagation();
          togglePopUpClass();
        });
        document.addEventListener('click', (e: MouseEvent) => {
          const target = e.target as HTMLButtonElement;
          const itsPopUp = target === popUp || popUp.contains(target);
          const itsButton = target === button;
          const popUpIsActive = popUp.classList.contains('is-active');

          if (!itsPopUp && !itsButton && popUpIsActive) {
            togglePopUpClass();
          }
        });
      }
    });
  }
};

export default togglePopUp;
