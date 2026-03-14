import { API_BASE_URL, ENDPOINTS, getApiHeaders } from '../config/api';

const API_KEY = import.meta.env.VITE_KP_API_KEY;

const request = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = getApiHeaders(API_KEY);
  
  const response = await fetch(url, { ...options, headers: { ...headers, ...options.headers } });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`API Error: ${response.status} - ${errorData.message || errorData.description || 'Неизвестная ошибка'}`);
  }
  
  return response.json();
};

export const kinopoiskApi = {
  getFilmById: (id) => request(ENDPOINTS.FILM_BY_ID(id)),
  searchFilms: (keyword) => request(`${ENDPOINTS.FILM_SEARCH}?keyword=${encodeURIComponent(keyword)}`),
  getTopFilms: (type = 'TOP_100_POPULAR_FILMS') => request(`${ENDPOINTS.FILM_TOP}?type=${type}`),
  getSequelsAndPrequels: (id) => request(ENDPOINTS.SEQUELS_AND_PREQUELS(id)),
  getSeasons: (id) => request(ENDPOINTS.SEASONS(id)),
};
