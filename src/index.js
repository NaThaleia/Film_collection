import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListener from './js/base/eventListeners';
import pageLoading from './js/base/pageLoading';
import fetchApiGenresList from './js/fetch/fetchApiGenresList';
import { Block } from 'notiflix/build/notiflix-block-aio';

function start() {

  Block.hourglass('.hero');
  fetchApiGenresList();
  pageLoading();
  eventListener(refs);
}

start();
