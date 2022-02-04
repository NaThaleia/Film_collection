import { refs } from '../base/refs';
import onModalEscKeyPress from './onModalEscKeyPress';
import onBackdropClick from './onBackdropClick';
import onModalWatched from './onModalWatched';
import onModalQueue from './onModalQueue';
import onQueue from "./onQueue";
import onWatched from "./onWatched";

export default function onCloseModal() {
  console.log('Закрыть модалку');
  const modalWatched = document.querySelector('.modal-watched');
  const modalQueue = document.querySelector('.modal-queue');
  const modalClose = document.querySelector('.modal-close');

  modalWatched.removeEventListener('click', onModalWatched);
  modalQueue.removeEventListener('click', onModalQueue);
  modalClose.removeEventListener('click', onCloseModal);

  refs.modalSearch.classList.add('is-hidden-modal-form');
  window.removeEventListener('keydown', onModalEscKeyPress);
  refs.modalSearch.removeEventListener('click', onBackdropClick);
  document.body.style.overflow = '';

  const settingsLS = JSON.parse(localStorage.getItem('page'));

  if (settingsLS.fetch === "Watched") {
        // проверка - не нужно ли уменьшить page на 1
        // if (((settingsLS.cardsQtty-1) % 20) === 0) {
    const x = JSON.parse(localStorage.getItem('library-watched')).length;
        console.log("x", x);
        if ((x % 20) === 0) {
            settingsLS.page -= 1;
        }
        onWatched(null, settingsLS.page);
    console.log("рисуем карточки снова - для Watched");
    return
    }

  if (settingsLS.fetch === "Queue") {
    // проверка - не нужно ли уменьшить page на 1
    // if (((settingsLS.cardsQtty - 1) % 20) === 0) {
    const x = JSON.parse(localStorage.getItem('library-queue')).length;
        console.log("x", x);
        if ((x % 20) === 0) {
      settingsLS.page -= 1;
    }
    onQueue(null, settingsLS.page);
    console.log("рисуем карточки снова - для Queue");
    return
  }
  return;
}
