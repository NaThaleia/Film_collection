import { refs, myCard, modalRefs} from "../base/refs";
import { watchedCheck, queueCheck } from "../modal/buttonsCheck";

import onModalEscKeyPress from './onModalEscKeyPress';
import onModalWatched from "./onModalWatched";
import onBackdropClick from "./onBackdropClick";
import onModalQueue from "./onModalQueue";
import onCloseModal from './onCloseModal';

export default function onOpenModal() {
    console.log('Открываем модалку');

    modalRefs.modalSearch = document.querySelector('.backdrop-modal-form');
    modalRefs.modalWatched = document.querySelector('.modal-watched');
    modalRefs.modalQueue = document.querySelector('.modal-queue');
    modalRefs.modalClose = document.querySelector('.modal-close');
    
    modalRefs.modalSearch.addEventListener('click', onBackdropClick);
    modalRefs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = "hidden";

    watchedCheck(myCard.data.id, modalRefs);
    queueCheck(myCard.data.id, modalRefs);
    
    modalRefs.modalWatched.addEventListener('click', onModalWatched);
    modalRefs.modalQueue.addEventListener('click', onModalWatched);
    modalRefs.modalClose.addEventListener('click', onCloseModal);
   
    return;
}
