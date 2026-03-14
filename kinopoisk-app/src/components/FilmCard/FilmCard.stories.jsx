import FilmCard from './FilmCard';

export default {
  title: 'UI/FilmCard',
  component: FilmCard,
  argTypes: {
    onClick: { action: 'clicked' },
    onToggleFavorite: { action: 'toggleFavorite' },
  },
};

const Template = (args) => <FilmCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    name: 'Побег из Шоушенка',
    year: 1994,
    rating: 9.1,
    poster: 'https://kinopoiskapiunofficial.tech/images/posters/kp/323596.jpg',
  },
  isFavorite: false,
};

export const Favorite = Template.bind({});
Favorite.args = {
  data: {
    name: 'Криминальное чтиво',
    year: 1994,
    rating: 8.9,
    poster: 'https://kinopoiskapiunofficial.tech/images/posters/kp/656.jpg',
  },
  isFavorite: true,
};
