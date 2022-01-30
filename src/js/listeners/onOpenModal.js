import { refs } from "../base/refs";
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";
import onCloseModal from '../listeners/onCloseModal';
console.log(refs);
export default function onOpenModal() {
    console.log('Открываем модалку');
    refs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = "hidden";

    const modalWatched = document.querySelector('.modal-watched');
    const modalQueue = document.querySelector('.modal-queue');
    modalWatched.addEventListener('click', onModalWatched);
    modalQueue.addEventListener('click', onModalQueue);
    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', onCloseModal, { once: true });
   
    return;
}