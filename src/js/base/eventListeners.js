import onHome from '../listeners/onHome';
import onLibrary from '../listeners/onLibrary';
import onSearchMovie from '../listeners/onSearchMovie';
import onThemeSwitch from '../listeners/onThemeSwitch';
import onTop from '../listeners/onTop';
import onHero from '../listeners/onHero';
import onWatched from '../listeners/onWatched';
import onQueue from '../listeners/onQueue';
import onTeamModal from '../listeners/onTeamModal';
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
    pagination,
    invalidList,
    themeSwitch,
  } = refs;

  /* HEADER */
  headerLogo.addEventListener('click', onHome);
  homeBtnHeader.addEventListener('click', onHome);
  libraryBtnHeader.addEventListener('click', onLibrary);
  searchMovie.addEventListener('submit', onSearchMovie);
  watchedBtnHeader.addEventListener('click', onWatched);
  queueBtnHeader.addEventListener('click', onQueue);
  themeSwitch.addEventListener('change', onThemeSwitch);

  /* MAIN */
  invalidList.addEventListener('click', onTop);
  hero.addEventListener('click', onHero);

  /* PAGINATION */
  pagination.addEventListener('click', onLoadingNextPage);

  /* FOOTER */
  nIceTeam.addEventListener('click', onTeamModal);
}
