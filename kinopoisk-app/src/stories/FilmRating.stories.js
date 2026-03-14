import FilmRating from '../components/FilmRating/FilmRating';

export default {
  title: 'FilmRating',
  component: FilmRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: { control: 'number', min: 0, max: 10, step: 0.5 },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
};

export const High = {
  args: {
    rating: 8.5,
    size: 'small',
  },
};

export const Medium = {
  args: {
    rating: 5.5,
    size: 'small',
  },
};

export const Low = {
  args: {
    rating: 2.0,
    size: 'small',
  },
};

export const NoRating = {
  args: {
    rating: null,
    size: 'small',
  },
};

export const Large = {
  args: {
    rating: 7.5,
    size: 'large',
  },
};

export const Perfect = {
  args: {
    rating: 10,
    size: 'large',
  },
};
