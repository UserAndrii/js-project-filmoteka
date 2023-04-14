import * as basicLightbox from 'basiclightbox';

import Nataliia from '../images/team/nataliia.jpg';
import Andrii from '../images/team/andrii.jpg';
import Yuriy from '../images/team/yuriy.jpg';
import Galyna from '../images/team/galyna.jpg';
import Maryna from '../images/team/maryna.jpg';
import Yura from '../images/team/andrii.jpg';
import Natalia from '../images/team/andrii.jpg';
import Slava from '../images/team/andrii.jpg';
import Oleksandr from '../images/team/andrii.jpg';
import Andriy from '../images/team/andrii.jpg';
import svgGit from '../images/gitsvg.svg';
import svgLinkd from '../images/linkedin.svg';

const markup = `<div class="team-wrapper"><div class="team-card">
    <img src="${Nataliia}" alt="Nataliia" class="team-image">
    <p class="team-name">Nataliia Valko</p>
    <p class="team-role">Mentor JS-course</p>
    <a href="https://github.com/NATALIIAVALKO" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/nataliia-valko-951501212/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Andrii}" alt="Andrii" class="team-image">
    <p class="team-name">Andrii Gadar</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/UserAndrii" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/andrii-hadar/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Yura}" alt="" class="team-image">
    <p class="team-name">Kagadiy Yuriy</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Galyna}" alt="Galyna" class="team-image">
    <p class="team-name">Galyna Karpinska</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/GalynkaK" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/galia-karpinskaya-89842b254/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Maryna}" alt="Matyna" class="team-image">
    <p class="team-name">Maryna Khmarska</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/myhappyday" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D1%85%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F-4b9903253/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Yuriy}" alt="Yuriy" class="team-image">
    <p class="team-name">Klumenko Yuriy</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Natalia}" alt="" class="team-image">
    <p class="team-name"> </p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Oleksandr}" alt="" class="team-image">
    <p class="team-name"> </p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Slava}" alt="" class="team-image">
    <p class="team-name"> </p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${Andriy}" alt="" class="team-image">
    <p class="team-name"> </p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${svgGit}#github"></use>
    </svg></a>
    <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
      <use href="${svgLinkd}#linkedin"></use>
    </svg></a>
</div>
</div>`;

const teamButton = document.querySelector('.js-team-modal');
const markup2 = `<img src="${Andrii}"/>`;
const wrapper = document.querySelector('.team-wrapper');

teamButton.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();
  // wrapper.style.display = 'block';

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
