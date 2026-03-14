import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import favoritesReducer from './favoritesSlice';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

// Получаем данные из localStorage
const persistedState = getLocalStorage('store');

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
  preloadedState: {
    user: persistedState.user || { name: '' },
    favorites: Array.isArray(persistedState.favorites) ? persistedState.favorites : [],
  },
});

// Подписка на изменения — автосохранение
store.subscribe(() => {
  setLocalStorage('store', store.getState());
});
