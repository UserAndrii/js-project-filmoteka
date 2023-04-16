const refs = {
  caruusel: document.querySelector('.swiper'),
  libraryBtn: document.querySelector('.btn_library'),
  homeBtn: document.querySelector('.btn-home'),
};

refs.libraryBtn.addEventListener('click', e => {
  refs.caruusel.style.display = 'none';
});

refs.homeBtn.addEventListener('click', e => {
  refs.caruusel.style.display = 'block';
});
