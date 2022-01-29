import onOpenModal from '../listeners/onOpenModal';

export default function onHero(e) {
  e.preventDefault();

  if (e.target.parentElement.className !== 'hero') {
    onOpenModal();
    return;
  }

  return;
}
