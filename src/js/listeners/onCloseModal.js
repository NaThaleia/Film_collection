import { refs } from "../base/refs";
import onModalEscKeyPress from './onModalEscKeyPress';
import onBackdropClick from "./onBackdropClick";
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";

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
    document.body.style.overflow = ""; 
    return;
}