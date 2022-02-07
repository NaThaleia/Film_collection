import { refs } from '../base/refs';
import onOpenModal from './onOpenModal';
import modal from '../templates/modal.hbs';

export default function onTop(e) {
  if (e.target.className === 'invalid' || e.target.nodeName === 'UL') return; // Мимо
  const target = e.target.closest('.top-item');
  const myCardId = target.dataset.id; // куда клик
  const myCard = JSON.parse(localStorage.getItem('cards')).find(el => el.id == myCardId);

  /* замена жанров с чисел на буквы */
  const arrGenresLs = JSON.parse(localStorage.getItem('genres')); // сюда обязательно надо вставить тру/кэч вообще на весь блок замены

  myCard.genre_str = myCard.genre_ids
    .map(x => {
      return arrGenresLs.find(({ id }) => id === x);
    })
    .map(({ name }) => name)
    .join(', ');

  const modalMarkup = modal(myCard); // создаём макет
  refs.modalSearch.innerHTML = modalMarkup; // пихаем в дом

  onOpenModal(myCard);
}
