import * as basicLightbox from 'basiclightbox';

// import photo from team

// const markup = `<div class="team-wrapper">
// <div class="team-card">
//     <img src="${Valko}" alt="Nataliia" class="team-image">
//     <p class="team-name">Nataliia Valko</p>
//     <p class="team-role">Mentor JS-course</p>
//     <a href="https://github.com/NATALIIAVALKO" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/nataliia-valko-951501212/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${Gadar}" alt="Andrii" class="team-image">
//     <p class="team-name">Andrii Gadar </p>
//     <p class="team-role">Team Lead</p>
//     <a href="https://github.com/UserAndrii" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${}" alt="" class="team-image">
//     <p class="team-name"> </p>
//     <p class="team-role">Scrum Master</p>
//     <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${Karpinska}" alt="" class="team-image">
//     <p class="team-name">Galyna Karpinska</p>
//     <p class="team-role">Developer</p>
//     <a href="https://github.com/GalynkaK" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/galia-karpinskaya-89842b254/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${}" alt="" class="team-image">
//     <p class="team-name"> </p>
//     <p class="team-role">Developer</p>
//     <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${}" alt="" class="team-image">
//     <p class="team-name"> </p>
//     <p class="team-role">Developer</p>
//     <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${}" alt="" class="team-image">
//     <p class="team-name"> </p>
//     <p class="team-role">Developer</p>
//     <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${}" alt="" class="team-image">
//     <p class="team-name"> </p>
//     <p class="team-role">Developer</p>
//     <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${}" alt="" class="team-image">
//     <p class="team-name"> </p>
//     <p class="team-role">Developer</p>
//     <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// <div class="team-card">
//     <img src="${}" alt="" class="team-image">
//     <p class="team-name"> </p>
//     <p class="team-role">Developer</p>
//     <a href="https://github.com/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgGit}#github"></use>
//     </svg></a>
//     <a href="https://www.linkedin.com/in/" target="_blank" class="team-linkd"><svg class="logo__icon" width="24" height="24">
//       <use href="${svgLinkd}#linkedin"></use>
//     </svg></a>
// </div>
// </div>`;

const teamButton = document.querySelector('.js-team-modal');

teamButton.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
