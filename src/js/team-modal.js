import * as basicLightbox from 'basiclightbox';

import nataliiaUrl from '../images/team/nataliia.webp';
import andriiUrl from '../images/team/andrii.webp';
import yuriyUrl from '../images/team/yuriy.webp';
import galynaUrl from '../images/team/galyna.webp';
import marynaUrl from '../images/team/maryna.webp';
import yuraUrl from '../images/team/yura.webp';
import nataliaUrl from '../images/team/natalia.webp';
import slavaUrl from '../images/team/slava.webp';
import oleksandrUrl from '../images/team/oleksandr.webp';
import andriyUrl from '../images/team/andriy.webp';
import svgGitUrl from '../images/gitsvg.svg';
import svgLinkdUrl from '../images/linkedin.svg';

const markup = `<div class="team-wrapper">
          <div class="team-card">
            <img src="${nataliiaUrl}" alt="Nataliia" class="team-image" loading="lazy">
            <p class="team-name">Nataliia</p>
            <p class="team-name">Valko</p>
            <p class="team-role">Mentor JS</p>
            <p class="logo__icon-footer">
            <a href="https://github.com/NATALIIAVALKO" target="_blank" class="team-git"><svg width="24" height="24">
              <use href="${svgGitUrl}#icon-github-svgr"></use></svg></a>
            <a href="https://www.linkedin.com/in/nataliia-valko-951501212/" target="_blank" class="team-linkd"><svg  width="24" height="24">
              <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
            </svg></a>
            </p>
          </div>
          <div class="team-card">
            <img src="${andriiUrl}" alt="Andrii" class="team-image" loading="lazy">
            <p class="team-name">Andrii</p>
            <p class="team-name">Gadar</p>
            <p class="team-role">Team Lead</p>
            <p class="logo__icon-footer">
            <a href="https://github.com/UserAndrii" target="_blank" class="team-git"><svg  width="24" height="24">
              <use href="${svgGitUrl}#icon-github-svgr"></use>
            </svg></a>
            <a href="https://www.linkedin.com/in/andrii-hadar/" target="_blank" class="team-linkd"><svg width="24" height="24">
              <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
            </svg></a>
            </p>
          </div>
          <div class="team-card">
            <img src="${yuraUrl}" alt="" class="team-image" loading="lazy">
            <p class="team-name">Yurii</p>
            <p class="team-name">Kahadii</p>
            <p class="team-role">Scrum Master</p>
            <p class="logo__icon-footer">
            <a href="https://github.com/YurionStyle" target="_blank" class="team-git"><svg  width="24" height="24">
              <use href="${svgGitUrl}#icon-github-svgr"></use>
            </svg></a>
            <a href="https://www.linkedin.com/in/yurii-kahadii-79405a272/" target="_blank" class="team-linkd"><svg  width="24" height="24">
              <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
            </svg></a>
            </p>
          </div>
          <div class="team-card">
              <img src="${galynaUrl}" alt="Galyna" class="team-image" loading="lazy">
              <p class="team-name">Galyna</p>
              <p class="team-name">Karpinska</p>
              <p class="team-role">Developer</p>
              <p class="logo__icon-footer">
              <a href="https://github.com/GalynkaK" target="_blank" class="team-git"><svg  width="24" height="24">
                <use href="${svgGitUrl}#icon-github-svgr"></use>
              </svg></a>
              <a href="https://www.linkedin.com/in/galia-karpinskaya-89842b254/" target="_blank" class="team-linkd"><svg  width="24" height="24">
                <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
              </svg></a>
              </p>
          </div>
          <div class="team-card">
              <img src="${marynaUrl}" alt="Matyna" class="team-image" loading="lazy">
              <p class="team-name">Maryna</p>
              <p class="team-name">Khmarska</p>
              <p class="team-role">Developer</p>
              <p class="logo__icon-footer">
              <a href="https://github.com/myhappyday" target="_blank" class="team-git"><svg  width="24" height="24">
                <use href="${svgGitUrl}#icon-github-svgr"></use>
              </svg></a>
              <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D1%85%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F-4b9903253/" target="_blank" class="team-linkd"><svg  width="24" height="24">
                <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
              </svg></a>
              </p>
          </div>
          <div class="team-card">
              <img src="${yuriyUrl}" alt="Yuriy" class="team-image" loading="lazy">
              <p class="team-name">Yurii</p>
              <p class="team-name">Klymenko</p>
              <p class="team-role">Developer</p>
              <p class="logo__icon-footer">
              <a href="https://github.com/Klimch1k" target="_blank" class="team-git"><svg  width="24" height="24">
                <use href="${svgGitUrl}#icon-github-svgr"></use>
              </svg></a>
              <a href="https://www.linkedin.com/" target="_blank" class="team-linkd"><svg width="24" height="24">
                <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
              </svg></a>
              </p>
          </div>
          <div class="team-card">
              <img src="${nataliaUrl}" alt="Natalia" class="team-image" loading="lazy">
              <p class="team-name">Natalia</p>
              <p class="team-name">Kuksa</p>
              <p class="team-role">Developer</p>
              <p class="logo__icon-footer">
              <a href="https://github.com/koksich" target="_blank" class="team-git"><svg width="24" height="24">
                <use href="${svgGitUrl}#icon-github-svgr"></use>
              </svg></a>
              <a href="https://www.linkedin.com/in/nataliia-kuksa-5a9037273/" target="_blank" class="team-linkd"><svg  width="24" height="24">
                <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
              </svg></a>
              </p>
          </div>
          <div class="team-card">
              <img src="${oleksandrUrl}" alt="" class="team-image" loading="lazy">
              <p class="team-name">Oleksandr</p>
              <p class="team-name">Deren</p>
              <p class="team-role">Developer</p>
              <p class="logo__icon-footer">
              <a href="https://github.com/Oderen" target="_blank" class="team-git"><svg  width="24" height="24">
                <use href="${svgGitUrl}#icon-github-svgr"></use>
              </svg></a>
              <a href="https://www.linkedin.com/in/oleksandr-deren-504814272/" target="_blank" class="team-linkd"><svg width="24" height="24">
                <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
              </svg></a>
              </p>
          </div>
          <div class="team-card">
              <img src="${slavaUrl}" alt="Slava" class="team-image" loading="lazy">
              <p class="team-name">Slava</p>
              <p class="team-name">Kholod</p>
              <p class="team-role">Developer</p>
              <p class="logo__icon-footer">
              <a href="https://github.com/SlavaKholod" target="_blank" class="team-git"><svg  width="24" height="24">
                <use href="${svgGitUrl}#icon-github-svgr"></use>
              </svg></a>
              <a href="https://www.linkedin.com/in/slava-kholod/" target="_blank" class="team-linkd"><svg  width="24" height="24">
                <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
              </svg></a>
              </p>
          </div>
          <div class="team-card">
              <img src="${andriyUrl}" alt="Andriy" class="team-image" loading="lazy">
              <p class="team-name">Andriy</p>
              <p class="team-name">Hanzel</p>
              <p class="team-role">Developer</p>
              <p class="logo__icon-footer">
              <a href="https://github.com/andriy-h80" target="_blank" class="team-git"><svg width="24" height="24">
                <use href="${svgGitUrl}#icon-github-svgr"></use>
              </svg></a>
              <a href="https://www.linkedin.com/in/andriy-hanzel/" target="_blank" class="team-linkd"><svg  width="24" height="24">
                <use href="${svgLinkdUrl}#icon-linkedin-svg"></use>
              </svg></a>
              </p>
            </div>
</div>`;

const teamButton = document.querySelector('.js-team-modal');

teamButton.addEventListener('click', openModal);

function openModal(e) {
  const button = document.querySelector('.btn-to-top');
  button.disabled = true;
  const closeModalHandler = e => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
    }

    if (e.code === 'Escape') {
      modal.close();
      button.disabled = false;
    }
  };

  const modal = basicLightbox.create(markup, {
    onShow: () => {
      document.body.classList.add('modal-open');
      document.querySelector('.btn-to-top').style.display = 'none';
    },
    onClose: () => {
      document.removeEventListener('keydown', closeModalHandler);
      document.body.classList.remove('modal-open');
      document.querySelector('.btn-to-top').style.display = 'block';
    },
  });
  modal.show();
  window.addEventListener('keydown', closeModalHandler);
}
