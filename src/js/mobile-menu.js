(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-btn'),
    closeMenuBtn: document.querySelector('.close-menu-btn'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();