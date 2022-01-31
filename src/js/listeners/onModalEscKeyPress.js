// import { refs } from "../base/refs";
import onCloseModal from './onCloseModal';

export default function onModalEscKeyPress(evt) {
  // const ESC_KEY_CODE = 'Escape';
  // const isEscKey = evt.code === ESC_KEY_CODE;
  if (evt.code === 'Escape') {
    console.log('Нажали Esc');
    onCloseModal(modalRefs);
  }
  return;
}
