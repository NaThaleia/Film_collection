import onCloseModal from './onCloseModal';

export default function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}
