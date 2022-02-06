import onCloseModal from './onCloseModal';

export default function onModalEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    console.log('Нажали Esc');
    onCloseModal();
  }
}
