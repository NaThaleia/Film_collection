import { refs } from '../base/refs';
import renderCardsHero from '../base/renderCardsHero';
import renderPagination from '../base/renderPagination';
import onLibraryChangeClassBtnQueue from '../changeClassHeder/changeClassLibraryBtnQueue';

// Кнопка Queue в хедері
export default function onQueue(e, page = 1) {
  onLibraryChangeClassBtnQueue();
  refs.hero.innerHTML = '';

  const PAGE_SIZE = 20;
  let arr = JSON.parse(localStorage.getItem('library-queue'));

  if (!arr || !arr.length) {
    refs.pagination.classList.add('hidden');
    refs.hero.classList.add('library-foto');
    console.log('not data');
    return;
  }

  const settings = {
    page: page,
    fetch: 'Queue',
    cardsQtty: arr.length
  };

  const total_pages = Math.ceil(arr.length / PAGE_SIZE);
  const position = (page - 1) * PAGE_SIZE;

  localStorage.setItem('page', JSON.stringify(settings));

  arr = arr.splice(position, PAGE_SIZE);
  localStorage.setItem('cards', JSON.stringify(arr));

  renderCardsHero(arr);
  renderPagination(total_pages, page);
}
