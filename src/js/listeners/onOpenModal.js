import { refs } from "../base/refs";
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';

export default function onOpenModal() {
    console.log('Открываем модалку');
    refs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = "hidden";
    return;
}