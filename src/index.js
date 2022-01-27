import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListener from './js/base/eventListeners';

function start() {
  eventListener(refs);
}

start();
