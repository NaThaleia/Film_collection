import { refs, myCard, modalRefs } from '../base/refs';
import { buttonsCheck } from '../modal/buttonsCheck';

import onModalEscKeyPress from './onModalEscKeyPress';
import onBackdropClick from './onBackdropClick';
import onCloseModal from './onCloseModal';

import onModalBtn from './onModalWatched'; // можно переименовать
// import onModalQueue from "./onModalQueue"; // уже не используем

export default function onOpenModal(obj) {
  myCard.data = obj;
  console.log('Открываем модалку');

  // modalRefs.modalSearch = document.querySelector('.backdrop-modal-form');
  modalRefs.modalWatched = document.querySelector('.modal-watched');
  modalRefs.modalQueue = document.querySelector('.modal-queue');
  modalRefs.modalClose = document.querySelector('.modal-close');

  modalRefs.modalSearch.addEventListener('click', onBackdropClick);
  modalRefs.modalSearch.classList.remove('is-hidden-modal-form');
  window.addEventListener('keydown', onModalEscKeyPress);
  document.body.style.overflow = 'hidden';

  buttonsCheck(myCard.data.id, modalRefs.modalWatched, 'library-watched', 'watched');
  buttonsCheck(myCard.data.id, modalRefs.modalQueue, 'library-queue', 'queue');

  modalRefs.modalWatched.addEventListener('click', onModalBtn);
  modalRefs.modalQueue.addEventListener('click', onModalBtn);
  modalRefs.modalClose.addEventListener('click', onCloseModal);

  return;
}
