import FilmCard from '../components/FilmCard/FilmCard';

export default {
  title: 'FilmCard',
  component: FilmCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number', defaultValue: 280 },
    smallSize: { control: 'boolean', defaultValue: false },
    showRelationType: { control: 'boolean', defaultValue: false },
  },
};

export const Default = {
  args: {
    film: {
      nameRu: 'Дюна',
      year: 2021,
      ratingKinopoisk: 7.3,
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp/443559.jpg',
    },
    onClick: () => console.log('Click!'),
  },
};

export const HighRating = {
  args: {
    film: {
      nameRu: 'Побег из Шоушенка',
      year: 1994,
      ratingKinopoisk: 9.1,
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp/323566.jpg',
    },
    onClick: () => console.log('Click!'),
  },
};

export const LongTitle = {
  args: {
    film: {
      nameRu: 'Невероятное приключение в далёкой галактике с очень длинным названием',
      year: 2023,
      ratingKinopoisk: 6.5,
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1234567.jpg',
    },
    onClick: () => console.log('Click!'),
  },
};

export const Small = {
  args: {
    film: {
      nameRu: 'Начало',
      year: 2010,
      ratingKinopoisk: 8.7,
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp/447301.jpg',
    },
    width: 140,
    smallSize: true,
    showRelationType: true,
    onClick: () => console.log('Click!'),
  },
};

export const NoRating = {
  args: {
    film: {
      nameRu: 'Новый фильм',
      year: 2024,
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp/987654.jpg',
    },
    onClick: () => console.log('Click!'),
  },
};
