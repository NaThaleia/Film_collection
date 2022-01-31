import { refs } from "../base/refs";
import onCloseModal from '../listeners/onCloseModal';

export default function onModalEscKeyPress(evt, modalRefs) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = evt.code === ESC_KEY_CODE;
    if (isEscKey) {
    console.log('Нажали Esc');
    onCloseModal(modalRefs);
  }
    return;
}