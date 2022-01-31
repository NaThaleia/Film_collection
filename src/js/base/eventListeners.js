import onHome from '../listeners/onHome';
import onLibrary from '../listeners/onLibrary';
import onSearchMovie from '../listeners/onSearchMovie';
import onHero from '../listeners/onHero';
import onWatched from '../listeners/onWatched';
import onQueue from '../listeners/onQueue';
import onTeamModal from '../listeners/onTeamModal';
import onOpenModal from '../listeners/onOpenModal';
import onCloseModal from '../listeners/onCloseModal';
import onBackdropClick from '../listeners/onBackdropClick';
import onModalEscKeyPress from '../listeners/onModalEscKeyPress';
import onLoadingNextPage from '../listeners/onLoadingNextPage';

export default function eventListeners(refs) {
  const {
    homeBtnHeader,
    headerLogo,
    libraryBtnHeader,
    searchMovie,
    hero,
    watchedBtnHeader,
    queueBtnHeader,
    nIceTeam,
    modalClose,
    modalSearch,
    pagination,
  } = refs;
  homeBtnHeader.addEventListener('click', onHome);
  headerLogo.addEventListener('click', onHome);
  libraryBtnHeader.addEventListener('click', onLibrary);
  searchMovie.addEventListener('submit', onSearchMovie);
  // hero.addEventListener('click', onHero);
  watchedBtnHeader.addEventListener('click', onWatched);
  queueBtnHeader.addEventListener('click', onQueue);
  hero.addEventListener('click', onHero);
  nIceTeam.addEventListener('click', onTeamModal);
  pagination.addEventListener('click', onLoadingNextPage);
  console.log('Hello World');
}
