export const API_BASE_URL = 'https://kinopoiskapiunofficial.tech/api';

export const ENDPOINTS = {
  FILM_BY_ID: (id) => `/v2.2/films/${id}`,
  FILM_SEARCH: '/v2.1/films/search-by-keyword',
  FILM_TOP: '/v2.2/films/top',
  SEQUELS_AND_PREQUELS: (id) => `/v2.1/films/${id}/sequels_and_prequels`,
  SEASONS: (id) => `/v2.2/films/${id}/seasons`,
};

export const getApiHeaders = (apiKey) => ({
  'X-API-KEY': apiKey,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});
