import { refs } from "../base/refs";
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";
import onCloseModal from '../listeners/onCloseModal';

export default function onOpenModal(myCard) {
    console.log('Открываем модалку');
    refs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = "hidden";

    const modalWatched = document.querySelector('.modal-watched');
    const modalQueue = document.querySelector('.modal-queue');
    modalWatched.addEventListener('click', () => onModalWatched(myCard));
    modalQueue.addEventListener('click', () => onModalQueue(myCard));
    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', onCloseModal);
   
    return;
}