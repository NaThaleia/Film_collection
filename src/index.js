import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListener from './js/base/eventListeners';
import request from './js/base/request';

function start() {
  eventListener(refs);
}

start();
request()
  .then(data => console.log(data));