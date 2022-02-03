import { refs } from "../base/refs";
import onModalEscKeyPress from './onModalEscKeyPress';
import onBackdropClick from "./onBackdropClick";
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";
import CardsHero from '../templates/heroCards.hbs';

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

    const settingsLS = JSON.parse(localStorage.getItem('page'));
    if (settingsLS.place === "watched") {
        const arr = localStorage.getItem('library-watched');
        const markUp = CardsHero(arr);
        refs.hero.innerHTML = markUp;
        console.log('watched rerender');
        return;
     }
    if (settingsLS.place === "queue") {
        const arr = localStorage.getItem('library-queue');
        const markUp = CardsHero(arr);
        refs.hero.innerHTML = markUp;
        console.log('queue rerender');
        return;
     }
    return;
}