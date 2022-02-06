import { refs } from './refs';

export default function theme() {
  const theme = JSON.parse(localStorage.getItem('theme'));

  switch (theme) {
    case 'dark':
      document.querySelector('html').classList.add('dark');
      refs.themeSwitch.checked = true;
      break;

    case 'light':
      document.querySelector('html').classList.remove('dark');
      refs.themeSwitch.checked = false;
      break;

    default:
  }
}
