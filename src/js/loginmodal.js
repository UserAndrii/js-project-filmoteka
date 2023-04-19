const modal = document.querySelector('.box'),
  overlay = document.querySelector('.login-overlay'),
  modalBtn = document.querySelector('.login-btn-modal'),
  yesBtn = document.querySelector('.modal__button--yes');
closeBtn = document.querySelector('.modal__button--no');

// ---- ---- Open Modal ---- ---- //
modalBtn.addEventListener('click', () => {
  modal.classList.add('active');
});
// ---- ---- Close Modal ---- ---- //
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
// yesBtn.addEventListener('click', () => {
//   modal.classList.remove('active');
// });
// ---- ---- Close Modal Overlay---- ---- //
overlay.addEventListener('click', () => {
  modal.classList.remove('active');
});

const body = document.querySelector('body');

modalBtn.addEventListener('click', () => {
  modal.classList.add('active');
  body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  body.classList.remove('no-scroll');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  body.classList.remove('no-scroll');
});
