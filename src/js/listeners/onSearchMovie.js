import { refs } from '../base/refs';
import fetchApiSearch from '../fetch/fetchApiSearch';
import renderCardsHero from '../base/renderCardsHero';
import renderPagination from '../base/renderPagination';
import pageLoadingSearch from '../base/pageLoadingSearch';

export default function onSearchMovie(e) {
  e.preventDefault();
  refs.searchErrors.classList.add('is-hidden');

  const query = e.target[0].value.trim();
  if (!query) {
    refs.searchErrors.classList.remove('is-hidden');
    return;
  }
  refs.hero.innerHTML = '';

  pageLoadingSearch(query);

  // fetchApiSearch(query, page)
  //   .then(data => {
  //     if (!data.total_results) {
  //       refs.searchErrors.classList.remove('is-hidden');
  //       return data;
  //     }
  //     renderCardsHero(data.results);
  //     return data;
  //   })
  //   .then(data => {
  //     renderPagination(data.total_pages, data.page);
  //     const settings = {
  //       page: data.page,
  //       fetch: 'Search',
  //       query: query,
  //     };
  //     localStorage.setItem('page', JSON.stringify(settings));
  //     return data;
  //   })
  //   .then(data => {
  //     e.target.reset();
  //     return data;
  //   })
  //   .catch(data => {
  //     return data;
  //   });
}
