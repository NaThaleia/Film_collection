import './sass/main.scss';
import { refs } from './js/global/refs';
import eventListener from './js/eventListener';

function start() {
  eventListener(refs);
}

start();
