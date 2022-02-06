import { refs, modalRefs } from '../base/refs';
import onModalEscKeyPress from './onModalEscKeyPress';
import onBackdropClick from './onBackdropClick';
import onModalWatched from './onModalWatched';
// import onModalQueue from './onModalQueue';
import onQueue from './onQueue';
import onWatched from './onWatched';

export default function onCloseModal() {
  console.log('Закрыть модалку');
  // const modalWatched = document.querySelector('.modal-watched');
  // const modalQueue = document.querySelector('.modal-queue');
  // const modalClose = document.querySelector('.modal-close');

  modalRefs.modalWatched.removeEventListener('click', onModalWatched);
  modalRefs.modalQueue.removeEventListener('click', onModalWatched);
  modalRefs.modalClose.removeEventListener('click', onCloseModal);

  modalRefs.modalSearch.classList.add('is-hidden-modal-form');
  window.removeEventListener('keydown', onModalEscKeyPress);
  modalRefs.modalSearch.removeEventListener('click', onBackdropClick);
  document.body.style.overflow = '';

  /* начало */
  const PAGE_SIZE = 20;
  let currentPage = JSON.parse(localStorage.getItem('page'));
  let totalPage = 1;
  let arr = [];

  if (currentPage.fetch === 'Watched') {
    arr = JSON.parse(localStorage.getItem('library-watched'));
    totalPage = Math.ceil(arr.length / PAGE_SIZE);
    if (currentPage.page > totalPage) {
      currentPage.page = totalPage;
    }
    onWatched(currentPage.page, currentPage.page);
  }

  if (currentPage.fetch === 'Queue') {
    arr = JSON.parse(localStorage.getItem('library-queue'));
    totalPage = Math.ceil(arr.length / PAGE_SIZE);
    if (currentPage.page > totalPage) {
      currentPage.page = totalPage;
    }
    onQueue(currentPage.page, currentPage.page);
  }
}
