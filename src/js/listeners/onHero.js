import onOpenModal from '../listeners/onOpenModal';

export default function onHero(e) {
  e.preventDefault();
  console.dir(e.target.parentElement.className);
  const currentTarget = e.target.closest('.filmCard')

  if (e.target.parentElement.className !== 'hero') {
    onOpenModal();
    return;
  }





  return;
}
