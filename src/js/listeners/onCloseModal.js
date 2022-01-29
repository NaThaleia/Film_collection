import { refs } from "../base/refs";

export default function onCloseModal() {
    console.log('Закрыть модалку');
    refs.modalSearch.classList.add('is-hidden-modal-form');
    return;
}