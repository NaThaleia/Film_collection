import { refs } from "../base/refs";
import { watchedCheck, queueCheck } from "../modal/buttonsCheck";

import onModalEscKeyPress from '../listeners/onModalEscKeyPress';
import onModalWatched from "./onModalWatched";
import onBackdropClick from "./onBackdropClick";
import onModalQueue from "./onModalQueue";
import onCloseModal from '../listeners/onCloseModal';

export default function onOpenModal(myCard) {
    console.log('Открываем модалку');
    
    const modalRefs = {
        modalWatched: document.querySelector('.modal-watched'),
        modalQueue: document.querySelector('.modal-queue'),
        modalClose: document.querySelector('.modal-close')
    }
    refs.modalSearch.addEventListener('click', (evt) => onBackdropClick(evt, modalRefs));
    refs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', (evt) => onModalEscKeyPress(evt, modalRefs));
    document.body.style.overflow = "hidden";

    watchedCheck(myCard.id, modalRefs);
    queueCheck(myCard.id, modalRefs);
    
    modalRefs.modalWatched.addEventListener('click', () => onModalWatched(myCard, modalRefs));
    modalRefs.modalQueue.addEventListener('click', () => onModalQueue(myCard, modalRefs));
    modalRefs.modalClose.addEventListener('click', () => onCloseModal(modalRefs));
   
    return;
}
