// URL
export const URL_BASE = 'https://a.nistratova14.fvds.ru/api';

// ENDPOINTS
export const ENDPOINT_ROOT = '/';
export const ENDPOINT_SIGNUP = '/signup';
export const ENDPOINT_SIGNIN = '/signin';
export const ENDPOINT_PROFILE = '/profile';
export const ENDPOINT_KDRAMAS = '/kdramas';
export const ENDPOINT_SAVED_KDRAMAS = '/saved-kdramas';

// для плавного скрола
export function smoothScroll(evt) {
  evt.preventDefault();
  const id = evt.target.hash;
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

// отображение фильмов на странице
export const SHORT_FILM = 40;
export const PAGE_DESKTOP = 1280;
export const PAGE_TABLET = 760;
