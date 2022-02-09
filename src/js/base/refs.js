export const refs = {
  /* HEADER */
  header: document.querySelector('.header'),
  headerLogo: document.querySelector('.header__link'),
  homeBtnHeader: document.querySelector('.home-header'),
  libraryBtnHeader: document.querySelector('.library-header'),
  libraryNavigation: document.querySelector('.library-navigation'),
  searchMovie: document.querySelector('.search-film-form'),
  searchErrors: document.querySelector('.search-errors'),
  searchHeaderInput: document.querySelector('.some-input'),
  watchedBtnHeader: document.querySelector('.watched-header'),
  queueBtnHeader: document.querySelector('.queue-header'),
  themeSwitch: document.querySelector('.theme-switch__toggle'),

  /* FILTER */
  filterBtnHeader: document.querySelector('.css-button-filter'),
  filterContainer: document.querySelector('.filter-container'),
  filterListGenres: document.querySelector('.js-filter-genres'),
  filterListYears: document.querySelector('.js-filter-years'),
  filterListLanguages: document.querySelector('.js-filter-language'),
  filterListVoteAverage: document.querySelector('.js-filter-vote_average'),

  /* MAIN */
  invalid: document.querySelector('.invalid'),
  invalidList: document.querySelector('.top-list'),
  hero: document.getElementById('filmList'),
  empty: document.querySelector('.js-empty'),

  /* PAGINATION */
  pagination: document.querySelector('.pagination__container'),
  paginationPrevious: document.querySelector('.arrow_left'),
  paginationFirst: document.querySelector('.first-page'),
  paginationAll: document.querySelector('.all-pages'),
  paginationLast: document.querySelector('.last-page'),
  paginationNext: document.querySelector('.arrow_right'),

  /* FOOTER */
  nIceTeam: document.querySelector('.team-modal-btn'),

  /* MODAL */
  modalSearch: document.querySelector('.backdrop-modal-form'),
};

/* MODAL */
export const modalRefs = {
  modalSearch: document.querySelector('.backdrop-modal-form'),
  modalWatched: {},
  modalQueue: {},
  modalClose: {},
};

/* MODAL  */
export const myCard = { data: {} };
