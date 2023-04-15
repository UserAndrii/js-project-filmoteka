import { saveLocal, loadLocal, removeLocal } from './localStorage';

const themeSwither = document.querySelectorAll(`.change_theme`);
const changeThemeCssLink = document.querySelector(`[title= "theme"]`);
const Theme = {
  dark: 'onDark',
  light: 'onLight',
};

themeSwither.forEach(swither => swither.addEventListener(`click`, changeTheme));

function changeTheme() {
  saveLocal('theme', this.dataset.theme);

  if (this.dataset.theme === Theme.dark) {
    changeThemeCssLink.disabled = false;
  }
  if (this.dataset.theme === Theme.light) {
    changeThemeCssLink.disabled = true;
  }
}

let activeTheme = loadLocal('theme');

if (activeTheme === null || activeTheme === Theme.light) {
  changeThemeCssLink.disabled = true;
} else {
  changeThemeCssLink.disabled = false;
}
