import onOpenModal from './onOpenModal';
import modal from '../templates/modal.hbs';
import { refs } from '../base/refs';
import trailer from '../modal/trailer'

export default function onHero(e) {
  e.preventDefault();

  if (e.target.className === 'hero' || e.target.nodeName === 'UL') return; // Мимо
  const target = e.target.closest('.filmCard');

  const myCardId = target.dataset.id; // куда клик

  if (e.target.className === 'btn-youtube') {  // добавление трейлера
    trailer.drawModalForTrailler(myCardId)
    return
  }

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
  return;
}
