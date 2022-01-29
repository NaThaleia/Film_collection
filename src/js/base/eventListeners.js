import onHome from '../listeners/onHome';
import onLibrary from '../listeners/onLibrary';
import onSearchMovie from '../listeners/onSearchMovie';
import onHero from '../listeners/onHero';
import onWatched from '../listeners/onWatched';
import onQueue from '../listeners/onQueue';
import onTeamModal from '../listeners/onTeamModal';
import onCloseModal from '../listeners/onCloseModal';
import onBackdropClick from '../listeners/onBackdropClick';
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';

export default function eventListeners(refs) {
  const { home, library, searchMovie, hero, watched, queue, nIceTeam, modalClose, modalSearch } = refs;
  home.addEventListener('click', onHome);
  library.addEventListener('click', onLibrary);
  searchMovie.addEventListener('submit', onSearchMovie);
  // hero.addEventListener('click', onHero);
  //   watched.addEventListener('click', onWatched);
  //   queue.addEventListener('click', onQueue);
  hero.addEventListener('click', onHero);
  //   nIceTeam.addEventListener('click', onTeamModal);
  modalClose.addEventListener('click', onCloseModal);
  modalSearch.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onModalEscKeyPress);
  console.log('Hello World');
}
