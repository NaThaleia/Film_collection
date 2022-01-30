import { refs } from "../base/refs";
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";

export default function onCloseModal() {
    console.log('Закрыть модалку');
    const modalWatched = document.querySelector('.modal-watched');
    const modalQueue = document.querySelector('.modal-queue');
    modalWatched.removeEventListener('click', onModalWatched);
    modalQueue.removeEventListener('click', onModalQueue);
    const modalClose = document.querySelector('.modal-close');
    modalClose.removeEventListener('click', onCloseModal);
    refs.modalSearch.classList.add('is-hidden-modal-form');
    window.removeEventListener('keydown', onModalEscKeyPress);


    
    document.body.style.overflow = ""; 
    return;
}