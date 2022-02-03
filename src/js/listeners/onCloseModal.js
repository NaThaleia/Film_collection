import { refs } from "../base/refs";
import onModalEscKeyPress from './onModalEscKeyPress';
import onBackdropClick from "./onBackdropClick";
import onModalWatched from "./onModalWatched";
import onModalQueue from "./onModalQueue";
// import CardsHero from '../templates/heroCards.hbs';
import onQueue from "./onQueue";
import onWatched from "./onWatched";

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

    // Обновляем страничку с фильмами после их удаления

    const settingsLS = JSON.parse(localStorage.getItem('page'));

    if (settingsLS.fetch === "Watched") {
        // проверка - не нужно ли уменьшить page на 1
        if (((settingsLS.cardsQtty-1) % 20) === 0) {
            settingsLS.page -= 1;
        }
        onWatched(settingsLS.page);
        console.log("рисуем карточки снова - для Watched");
        return;
    }

    if (settingsLS.fetch === "Queue") {
        // проверка - не нужно ли уменьшить page на 1
        if (((settingsLS.cardsQtty-1) % 20) === 0) {
            settingsLS.page -= 1;
        }
        onQueue(settingsLS.page);
        console.log("рисуем карточки снова - для Queue");
        return;
     }
    return;
}
