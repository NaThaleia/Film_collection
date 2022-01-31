import { refs } from "../base/refs";
import { watchedCheck, queueCheck } from "../modal/buttonsCheck";

import onModalEscKeyPress from '../listeners/onModalEscKeyPress';
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";
import onCloseModal from '../listeners/onCloseModal';

export default function onOpenModal(myCard) {
    console.log('Открываем модалку');
    
    refs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = "hidden";

    const modalRefs = {
        modalWatched: document.querySelector('.modal-watched'),
        modalQueue: document.querySelector('.modal-queue'),
        modalClose: document.querySelector('.modal-close')
    }
    watchedCheck(myCard.id, modalRefs);
    queueCheck(myCard.id, modalRefs);
    
    modalRefs.modalWatched.addEventListener('click', () => onModalWatched(myCard));
    modalRefs.modalQueue.addEventListener('click', () => onModalQueue(myCard));
    modalRefs.modalClose.addEventListener('click', () => onCloseModal(modalRefs));
   
    return;
}
