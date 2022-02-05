import { modalRefs, myCard } from '../base/refs';
import onOpenModal from './onOpenModal';
import modal from '../templates/modal.hbs';

export default function onTop(e) {
  if (e.target.className === 'invalid' || e.target.nodeName === 'UL') return; // Мимо
  const target = e.target.closest('.top-item');
  const myCardId = target.dataset.id; // куда клик
  myCard.data = JSON.parse(localStorage.getItem('cards')).find(el => el.id == myCardId);

  const modalMarkup = modal(myCard.data); // создаём макет
  modalRefs.modalSearch.innerHTML = modalMarkup; // пихаем в дом

  onOpenModal();
}
