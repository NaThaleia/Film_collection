import './sass/main.scss';
import { refs } from './js/global/refs';
import EventListener from './js/EventListener';

function start() {
  EventListener(refs);
}

start();
