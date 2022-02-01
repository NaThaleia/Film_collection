import { refs } from '../base/refs';
import renderCardsHero from '../base/renderCardsHero';
import renderPagination from '../base/renderPagination';
import  onLibraryChangeClassBtnQueue from "../changeClassHeder/changeClassLibraryBtnQueue" 

// Кнопка Queue в хедері
export default function onQueue(page = 1) {
  refs.hero.innerHTML = '';

  const PAGE_SIZE = 20;
  let arr = JSON.parse(localStorage.getItem('library-queue'));

  if (!arr || !arr.length) {
    refs.pagination.classList.add('hidden');
    console.log('not data');
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
  
  onLibraryChangeClassBtnQueue()
  renderCardsHero(arr);
  renderPagination(totalPage, page);
 
}
