import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListener from './js/base/eventListeners';
import pageLoading from './js/base/pageLoading';
import fetchApiGenresList from './js/fetch/fetchApiGenresList';
// import request from './js/base/request';

function start() {
  fetchApiGenresList();
  pageLoading();
  eventListener(refs);
}

start();
// request()
//   .then(data => console.log(data));
