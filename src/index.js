import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListener from './js/base/eventListeners';
import pageLoading from './js/base/pageLoading';
import { fetchApiGenresList } from './js/fetch/fetchApi';
import theme from './js/base/theme';

function start() {
  theme();
  fetchApiGenresList();
  pageLoading();
  eventListener(refs);
}

start();
