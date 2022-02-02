import { refs, xx } from '../base/refs';
import CardsHero from '../templates/HeroCards';
import renderPagination from '../base/renderPagination';
import onLibraryChangeClassBtnWatch from '../changeClassHeder/changeClassLibraryBtnWatch';

// Кнопка Watched в хедері

export default function onWatched(page = 1) {
  xx.place = "watched";
  onLibraryChangeClassBtnWatch()

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

  const markup = CardsHero(arr);
  refs.hero.insertAdjacentHTML('beforeend', markup);
  renderPagination(totalPage, page);
}
