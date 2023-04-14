const refs = {
  heroWrapper: document.querySelector('.hero__wrapper'),
  btnWatched: document.querySelector('.hero__btn-watched'),
  btnLibrary: document.querySelector('.btn_library'),
  btnMyLib: document.querySelector('.hero__btn-mylib'),
  btnHome: document.querySelector('.btn-home'),
};

// console.log('heroWrapper: ', refs.heroWrapper);
// console.log('Watched: ', refs.btnWatched);
// console.log('btn_library: ', refs.btnLibrary);

refs.btnLibrary.addEventListener('click', (e) => {
    refs.btnMyLib.style.display = 'block'
    refs.heroWrapper.style.justifyContent = 'space-between';
});

refs.btnHome.addEventListener('click', e => {
    refs.btnMyLib.style.display = 'none';
    refs.heroWrapper.style.justifyContent = 'flex-end';
});