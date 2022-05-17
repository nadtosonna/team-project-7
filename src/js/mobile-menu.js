(() => {
  const refs = {
    openMenuBtn: document.querySelector('.modal-menu__open'),
    closeMenuBtn: document.querySelectorAll('.modal-menu__close-js'),
    menu: document.querySelector('.modal-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.forEach(btn => btn.addEventListener('click', toggleModal))

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
