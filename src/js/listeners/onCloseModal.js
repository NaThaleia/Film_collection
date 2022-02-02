import { refs, xx } from "../base/refs";
import onModalEscKeyPress from './onModalEscKeyPress';
import onBackdropClick from "./onBackdropClick";
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";
import cardsHero from '../templates/heroCards.hbs'

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

    if (xx.place === "watched") {
    const arr = JSON.parse(localStorage.getItem('library-watched'));
    const markup = cardsHero(arr);
        refs.hero.innerHTML = markup;
    return;
  }
    if (xx.place === "queue") {
    const arr = JSON.parse(localStorage.getItem('library-queue'));
    const markup = cardsHero(arr);
        refs.hero.innerHTML = markup;
    return;
  }
    return;
}