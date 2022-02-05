import { refs } from '../base/refs';
import renderCardsHero from '../base/renderCardsHero';
import renderPagination from '../base/renderPagination';
import onLibraryChangeClassBtnWatch from '../changeClassHeder/changeClassLibraryBtnWatch';

// Кнопка Watched в хедері
export default function onWatched(e, page = 1) {
  onLibraryChangeClassBtnWatch();
  refs.hero.innerHTML = '';

  const PAGE_SIZE = 20;
  let arr = JSON.parse(localStorage.getItem('library-watched'));

  if (!arr || !arr.length) {
    refs.pagination.classList.add('hidden');
    refs.hero.classList.add('library-foto');
    console.log('not data');
    return;
  }

  const settings = {
    page: page,
    fetch: 'Watched',
  };

  localStorage.setItem('page', JSON.stringify(settings));

  const totalPage = Math.ceil(arr.length / PAGE_SIZE);
  const position = (page - 1) * PAGE_SIZE;

  arr = arr.splice(position, PAGE_SIZE);
  localStorage.setItem('cards', JSON.stringify(arr));

  renderCardsHero(arr);
  renderPagination(totalPage, page);
}
