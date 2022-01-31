import onOpenModal from './onOpenModal';
import modal from '../templates/modal.hbs';
import { refs } from '../base/refs';

export default function onHero(e) {
  e.preventDefault();

  if (e.target.className === 'hero' || e.target.nodeName === 'UL') return; // Мимо
  const target = e.target.closest('.filmCard');

  const myCardId = target.dataset.id; // куда клик

  const myCard = JSON.parse(localStorage
    .getItem("cards"))
    .find(el => el.id == myCardId);
  
  const modalMarkup = modal(myCard); // создаём макет
  refs.modalSearch.innerHTML = modalMarkup; // пихаем в дом

  onOpenModal(myCard);
  return;
}
