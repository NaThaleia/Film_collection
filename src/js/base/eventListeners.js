import onHome from '../listeners/onHome';
import onLibrary from '../listeners/onLibrary';
import onSearchMovie from '../listeners/onSearchMovie';
import onHero from '../listeners/onHero';
import onWatched from '../listeners/onWatched';
import onQueue from '../listeners/onQueue';
import nIceTeam from '../listeners/onTeamModal';

export default function eventListeners(refs) {
  const { home, library, searchMovie, hero, watched, queue, nIceTeam } = refs;
    // home.addEventListener('click', onHome);
    // library.addEventListener('click', onLibrary);
    // searchMovie.addEventListener('submit', onSearchMovie);
    hero.addEventListener('click', onHero);
    // watched.addEventListener('click', onWatched);
    // queue.addEventListener('click', onQueue);
    // nIceTeam.addEventListener('click', nIceTeam);
  console.log('Hello World');
}
