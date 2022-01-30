import onOpenModal from '../listeners/onOpenModal';
import modal from '../templates/modal.hbs';
import { refs } from '../base/refs';

export default function onHero(e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.className === 'hero') return; // Мимо
  const myCardId = e.target.parentElement.parentElement.dataset.id; // куда клик
  console.log(myCardId);
  const myCard = JSON.parse(localStorage
    .getItem("cards"))
    .find(el => el.id == myCardId);
  const modalMarkup = modal(myCard);
  console.log(myCard);
  refs.modalSearch.innerHTML = modalMarkup;

  onOpenModal();
  return;
}
