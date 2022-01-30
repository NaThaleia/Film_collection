import { refs } from "../base/refs";
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';
// import onCloseModal from '../listeners/onCloseModal';

export default function onOpenModal(e) {
    console.log('Открываем модалку');
    refs.modalSearch.classList.remove('is-hidden-modal-form');
    window.addEventListener('keydown', onModalEscKeyPress);
    document.body.style.overflow = "hidden";
   
    console.log(e);
    // const cross = e.target.closest('.modal-close');
    // console.log(cross);
   
    return;
}