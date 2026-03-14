# Kinopoisk App

## Данные

### Описание

Приложение для просмотра фильмов с использованием API Kinopoisk. Реализовано на React с использованием Redux для управления состоянием, React Router для маршрутизации и Material UI для компонентов интерфейса.

### Ссылки

- [Деплой проекта](https://YOUR_USERNAME.github.io/YOUR_REPO/)
- [Репозиторий](https://github.com/YOUR_USERNAME/YOUR_REPO)

---

## Установка и настройка приложения

### Клонирование и установка

1. Склонировать репозиторий по HTTPS
2. Установить зависимости для проекта через `npm i`
3. Создать `.env`-файл

### `.env`-файл

- Скопировать файл `.env.example` и переименовать его в `.env`
- Для ключа `VITE_KP_API_KEY` добавить значение из "Профиля" [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech/)

```
VITE_KP_API_KEY=ваш_ключ_api
```

---

## Команды

```bash
npm run dev             # Запуск приложения в dev-режиме на localhost
npm run build           # Сборка приложения
npm run preview         # Запуск собранного приложения из "dist" для предпросмотра production-сборки

npm run lint            # Проверить код с помощью ESLint

npm run storybook       # Запуск StoryBook в dev-режиме на localhost
npm run build-storybook # Сборка StoryBook

npm run predeploy       # Сборка приложения перед деплоем
npm run deploy          # Сборка приложения и push в ветку "gh-pages" на GitHub
```

---

## Функционал

- **Главная страница** — описание проекта
- **Список фильмов** — отображение топ-100 популярных фильмов
- **Поиск фильмов** — поиск по названию с debounce 500мс
- **Страница фильма** — подробная информация о фильме, рейтинг, приквелы/сиквелы
- **Избранное** — добавление/удаление фильмов в избранное (сохранение в LocalStorage)
- **Профиль** — ввод имени пользователя

---

## Технологии

- **React 19** — UI библиотека
- **React Router v7** — маршрутизация
- **Redux Toolkit** — управление состоянием
- **Material UI** — UI компоненты и иконки
- **Vite** — сборка проекта
- **Storybook** — документация компонентов
- **ESLint + Prettier** — линтинг и форматирование

---

## Структура проекта

```
src/
├── api/                 # API запросы (kinopoiskApi.js)
├── components/          # Переиспользуемые компоненты
│   ├── FilmCard/       # Карточка фильма
│   ├── FilmRating/     # Рейтинг фильма
│   ├── Header.jsx      # Шапка приложения
│   └── Button.jsx      # Кнопка
├── config/              # Конфигурация (api.js, routes.js, constants.js)
├── containers/          # Контейнеры приложения
├── pages/               # Страницы приложения
│   ├── Home.jsx        # Главная
│   ├── Movies.jsx      # Список фильмов
│   ├── Film.jsx        # Страница фильма
│   ├── SearchFilms.jsx # Поиск
│   ├── Favorites.jsx   # Избранное
│   └── Profile.jsx     # Профиль
├── store/               # Redux store (favoritesSlice, userSlice, store.js)
├── stories/             # Storybook истории (FilmCard, FilmRating)
├── styles/              # Глобальные стили
├── utils/               # Утилиты (localStorage)
└── main.jsx            # Точка входа
```

---

## API

Используется [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech/)

### Эндпоинты

- `GET /v2.2/films/{id}` — получить фильм по ID
- `GET /v2.2/films/top` — получить топ фильмов
- `GET /v2.1/films/search-by-keyword` — поиск фильмов
- `GET /v2.1/films/{id}/sequels_and_prequels` — приквелы и сиквелы

---

## Деплой

Проект деплоится на GitHub Pages:

```bash
npm run deploy
```

После деплоя приложение доступно по ссылке:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

---

## Автор

Студент 2 курса
