import { refs } from '../base/refs';
import onCloseModal from './onCloseModal';

export default function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
  return;
}
