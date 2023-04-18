import { saveLocal, loadLocal } from './localStorage';

const refs = {
  theme: document.querySelectorAll('.change_theme'),
  link: document.querySelector('[data-theme]'),
};

const Theme = {
  dark: 'onDark',
  light: 'onLight',
};

refs.theme.forEach(swither => swither.addEventListener(`click`, changeTheme));

function changeTheme() {
  saveLocal('theme', this.dataset.theme);

  if (this.dataset.theme === Theme.dark) {
    refs.link.disabled = false;
  }
  if (this.dataset.theme === Theme.light) {
    refs.link.disabled = true;
  }
}

let activeTheme = loadLocal('theme');

if (activeTheme === null || activeTheme === Theme.light) {
  refs.link.disabled = true;
} else {
  refs.link.disabled = false;
}
