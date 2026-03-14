import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import { FilmCard } from '../components';
import { kinopoiskApi } from '../api';
import { CONSTANTS } from '../config';

function Movies() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    kinopoiskApi.getTopFilms('TOP_100_POPULAR_FILMS')
      .then((data) => {
        setFilms(data.films || data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/film/${id}`);
  };

  if (loading) return <div style={{ padding: '20px' }}>Загрузка фильмов...</div>;
  if (error) return <div style={{ padding: '20px' }}>Ошибка: {error}</div>;

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        СПИСОК НОВЫХ ФИЛЬМОВ
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>
        {films.slice(0, CONSTANTS.FILMS_PER_PAGE.TOP).map((film) => (
          <FilmCard
            key={film.filmId || film.kinopoiskId}
            film={film}
            onClick={() => handleClick(film.filmId || film.kinopoiskId)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Movies;
