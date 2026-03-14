export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  SEARCH: '/search',
  FILM: '/film/:id',
  FAVORITES: '/favorites',
  PROFILE: '/profile',
};

export const NAVIGATION = [
  { label: 'Главная', path: ROUTES.HOME },
  { label: 'Фильмы', path: ROUTES.MOVIES },
  { label: 'Поиск', path: ROUTES.SEARCH },
  { label: 'Избранное', path: ROUTES.FAVORITES },
];
