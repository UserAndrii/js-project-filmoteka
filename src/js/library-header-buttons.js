const refs = {
    heroWrapper: document.querySelector('.hero__wrapper'),
    btnWatched: document.querySelector('.hero__btn-watched'),
    btnLibrary: document.querySelector('.btn_library')
};

// console.log('heroWrapper: ', refs.heroWrapper);
// console.log('Watched: ', refs.btnWatched);
// console.log('btn_library: ', refs.btnLibrary);

refs.btnLibrary.addEventListener('click', (e) => {
    refs.heroWrapper.style.justifyContent = 'space-between';
});