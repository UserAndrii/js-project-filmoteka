import { gsap } from 'gsap/all';

const logoIcon = document.querySelector('.logo__icon');

gsap.to(logoIcon, {
  rotationY: 180,
  duration: 2,
  repeat: -1,
  ease: 'power2.inOut',
  onComplete: function () {
    gsap.to(logoIcon, { rotationY: 0, duration: 1, delay: 1 }); // Зміна обертання назад на 0 градусів після затримки в 1 секунду
  },
});
