import './sass/main.scss';
import { refs } from './js/base/refs';
import eventListener from './js/base/eventListeners';
import pageLoading from './js/base/pageLoading';
// import request from './js/base/request';
import onSearchChangeClass from './js/changeClassHeder/changeClassToSearch'

function start() {
  pageLoading();
  eventListener(refs);
  onSearchChangeClass();
}

start();
// request()
//   .then(data => console.log(data));
