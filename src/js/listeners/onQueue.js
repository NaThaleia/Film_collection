import { refs } from '../base/refs';
import renderCardsHero from '../base/renderCardsHero';
import renderPagination from '../base/renderPagination';
import onLibraryChangeClassBtnQueue from '../changeClassHeder/changeClassLibraryBtnQueue';

// Кнопка Queue в хедері
export default function onQueue(e, page = 1) {
  onLibraryChangeClassBtnQueue();
  refs.hero.innerHTML = '';
  refs.empty.classList.add('hidden');

  let PAGE_SIZE = fnPageSize();
  let arr = JSON.parse(localStorage.getItem('library-queue'));

  if (!arr || !arr.length) {
    refs.pagination.classList.add('hidden');
    refs.hero.classList.add('library-foto');
    refs.empty.classList.remove('hidden');
    return;
  }

  const settings = {
    page: page,
    fetch: 'Queue',
  };

  localStorage.setItem('page', JSON.stringify(settings));
  const totalPage = Math.ceil(arr.length / PAGE_SIZE);
  const position = (page - 1) * PAGE_SIZE;

  arr = arr.splice(position, PAGE_SIZE);
  localStorage.setItem('cards', JSON.stringify(arr));

  renderCardsHero(arr);
  renderPagination(totalPage, page);
}

function fnPageSize() {
  if (window.screen.width >= 1024) return 9;
  if (window.screen.width >= 768 && window.screen.width < 1024) return 8;
  if (window.screen.width < 768) return 4;
}
