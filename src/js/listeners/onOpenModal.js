import { refs } from "../base/refs";
import { watchedCheck, queueCheck } from "../modal/buttonsCheck";

import onModalEscKeyPress from './onModalEscKeyPress';
import onModalWatched from "./onModalWatched";
import onBackdropClick from "./onBackdropClick";
import onModalQueue from "./onModalQueue";
import onCloseModal from './onCloseModal';

export default function onOpenModal(myCard) {
    console.log('Открываем модалку');
    
    const modalRefs = {
        modalWatched: document.querySelector('.modal-watched'),
        modalQueue: document.querySelector('.modal-queue'),
        modalClose: document.querySelector('.modal-close')
    }
    refs.modalSearch.addEventListener('click', onBackdropClick);
    refs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = "hidden";

    watchedCheck(myCard.id, modalRefs);
    queueCheck(myCard.id, modalRefs);
    
    modalRefs.modalWatched.addEventListener('click', () => onModalWatched(myCard, modalRefs));
    modalRefs.modalQueue.addEventListener('click', () => onModalQueue(myCard, modalRefs));
    modalRefs.modalClose.addEventListener('click', () => onCloseModal(modalRefs));
   
    return;
}
