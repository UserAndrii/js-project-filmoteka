import * as basicLightbox from 'basiclightbox';

const Nataliia from '../images/team/nataliia.jpg';
const Andrii from '../images/team/andrii.jpg';
const Yuriy from '../images/team/yuriy.jpg';
const Galyna from '../images/team/galyna.jpg';
const Maryna from '../images/team/maryna.jpg';
const Yura from '../images/team/yura.jpg';
const Natalia from '../images/team/natalia.jpg';
const Slava from '../images/team/slava.jpg';
const Oleksandr from '../images/team/oleksandr.jpg';
const Andriy from '../images/team/andriy.jpg';

const svgGit from '../images/gitsvg.svg';
const svgLinkd from '../images/linkedin.svg';


const markup =
  `<div class="intro">
    <div class="video">
      <video class="video__media" src="" autoplay muted loop></video>
    </div>
    <div class="intro__content team-wrapper">
        <div class="team-card">
            <img src="${Nataliia}" alt="Nataliia" class="team-image">
            <p class="team-name">Nataliia</p>
            <p class="team-name">Valko</p>
            <p class="team-role">Mentor JS</p>
            <p class="logo__icon-footer">
            <a href="https://github.com/NATALIIAVALKO" target="_blank" class="team-git"><svg width="24" height="24">
              <use href="${svgGit}#icon-github-svgr"></use></svg></a>
            <a href="https://www.linkedin.com/in/nataliia-valko-951501212/" target="_blank" class="team-linkd"><svg  width="24" height="24">
              <use href="${svgLinkd}#icon-linkedin-svg"></use>
            </svg></a>
            </p>
        </div>
        <div class="team-card">
          <img src="${Andrii}" alt="Andrii" class="team-image">
          <p class="team-name">Andrii</p>
          <p class="team-name">Gadar</p>
          <p class="team-role">Team Lead</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/UserAndrii" target="_blank" class="team-git"><svg  width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/andrii-hadar/" target="_blank" class="team-linkd"><svg width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Yura}" alt="" class="team-image">
          <p class="team-name">Yurii</p>
          <p class="team-name">Kahadii</p>
          <p class="team-role">Scrum Master</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/" target="_blank" class="team-git"><svg  width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/yurii-kahadii-79405a272/" target="_blank" class="team-linkd"><svg  width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Galyna}" alt="Galyna" class="team-image">
          <p class="team-name">Galyna</p>
          <p class="team-name">Karpinska</p>
          <p class="team-role">Developer</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/GalynkaK" target="_blank" class="team-git"><svg  width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/galia-karpinskaya-89842b254/" target="_blank" class="team-linkd"><svg  width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Maryna}" alt="Matyna" class="team-image">
          <p class="team-name">Maryna</p>
          <p class="team-name">Khmarska</p>
          <p class="team-role">Developer</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/myhappyday" target="_blank" class="team-git"><svg  width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D1%85%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F-4b9903253/" target="_blank" class="team-linkd"><svg  width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Yuriy}" alt="Yuriy" class="team-image">
          <p class="team-name">Yurii</p>
          <p class="team-name">Klymenko</p>
          <p class="team-role">Developer</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/" target="_blank" class="team-git"><svg  width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Natalia}" alt="Natalia" class="team-image">
          <p class="team-name">Natalia</p>
          <p class="team-name">Kuksa</p>
          <p class="team-role">Developer</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/" target="_blank" class="team-git"><svg width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg  width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Oleksandr}" alt="" class="team-image">
          <p class="team-name">Oleksandr</p>
          <p class="team-name">Deren</p>
          <p class="team-role">Developer</p>
          <p class="logo__icon-footer">
          <a href="hhttps://github.com/Oderen?tab=repositories" target="_blank" class="team-git"><svg  width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Slava}" alt="Slava" class="team-image">
          <p class="team-name">Slava</p>
          <p class="team-name">Kholod</p>
          <p class="team-role">Developer</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/" target="_blank" class="team-git"><svg  width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="linkedin.com/in/slava-kholod-dev" target="_blank" class="team-linkd"><svg  width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
      <div class="team-card">
          <img src="${Andriy}" alt="Andriy" class="team-image">
          <p class="team-name">Andriy</p>
          <p class="team-name">Hanzel</p>
          <p class="team-role">Developer</p>
          <p class="logo__icon-footer">
          <a href="https://github.com/andriy-h80" target="_blank" class="team-git"><svg width="24" height="24">
            <use href="${svgGit}#icon-github-svgr"></use>
          </svg></a>
          <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg  width="24" height="24">
            <use href="${svgLinkd}#icon-linkedin-svg"></use>
          </svg></a>
          </p>
      </div>
  </div>
</div>`;

const teamButton = document.querySelector('.js-team-modal');
const body = document.body;
const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

let originalOverflow = '';
let originalMarginRight = '';

teamButton.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  originalOverflow = body.style.overflow || '';
  originalMarginRight = body.style.marginRight || '';

  body.style.overflow = 'hidden';
  body.style.marginRight = `${scrollBarWidth}px`;

  const button = document.querySelector('.btn-to-top');
  button.disabled = true;

  modal.show();

  window.addEventListener('keydown', closeModalHandler);
}

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    modal.close();
    window.removeEventListener('keydown', closeModalHandler);

    body.style.overflow = originalOverflow;
    body.style.marginRight = originalMarginRight;

    const button = document.querySelector('.btn-to-top');
    button.disabled = false;
  }
}

