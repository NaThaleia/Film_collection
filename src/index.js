import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListener from './js/base/eventListeners';
import firstPageLoading from './js/base/firstPageLoading';
// import request from './js/base/request';

function start() {
  firstPageLoading();
  eventListener(refs);
}

start();
// request()
//   .then(data => console.log(data));
