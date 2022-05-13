(() => {
  const refs = {
    openMenuBtn: document.querySelector('.modal-menu__open'),
    closeMenuBtn: document.querySelector('modal-menu__close'),
    menu: document.querySelector('.modal-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();