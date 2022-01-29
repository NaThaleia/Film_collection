import { refs } from "../base/refs";
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';

export default function onCloseModal() {
    console.log('Закрыть модалку');
    refs.modalSearch.classList.add('is-hidden-modal-form');
    window.removeEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = ""; 
    return;
}