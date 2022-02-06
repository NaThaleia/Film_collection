import theme from '../base/theme';

export default function onThemeSwitch(e) {
  if (e.target.checked) {
    localStorage.setItem('theme', JSON.stringify('dark'));
  } else {
    localStorage.setItem('theme', JSON.stringify('light'));
  }

  theme();
}
