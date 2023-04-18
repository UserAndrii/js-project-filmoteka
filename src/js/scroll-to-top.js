import throttle from "lodash.throttle"

const btnToTop = document.querySelector('.btn-to-top');

window.addEventListener('scroll', throttle(onScroll, 250));
if (btnToTop) {
  btnToTop.addEventListener('click', onToTopBtn);
}

 function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    btnToTop.classList.add('btn-to-top--visible');
  }
  if (scrolled <= coords && btnToTop) {
    btnToTop.classList.remove('btn-to-top--visible');
  }
}
 function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

onScroll();
onToTopBtn();
