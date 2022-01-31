import * as basicLightbox from 'basiclightbox';
import renderModalTeam from '../templates/modalTeam.hbs';

let instance;

export default function onTeamModal(e) {
  const text = renderModalTeam();

  instance = basicLightbox.create(text, {
    onShow: instance => {
      window.addEventListener('keydown', onKeyboardClick);
      instance.element().querySelector('.team-modal__close').onclick = instance.close;

      document.body.classList.add('off-scroll-modal');
    },
    onClose: () => {
      window.removeEventListener('keydown', onKeyboardClick);

      document.body.classList.remove('off-scroll-modal');
    },
  });

  instance.show();
}

function onKeyboardClick(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
