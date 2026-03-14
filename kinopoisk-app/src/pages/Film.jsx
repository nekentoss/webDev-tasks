import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { addToFavorite, removeFromFavorite } from '../store/favoritesSlice';
import FilmRating from '../components/FilmRating/FilmRating';
import FilmCard from '../components/FilmCard/FilmCard';
import { kinopoiskApi } from '../api';

const Film = () => {
  const [data, setData] = useState(null);
  const [sequelsAndPrequels, setSequelsAndPrequels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((item) => item.id === Number(id));

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const filmData = await kinopoiskApi.getFilmById(id);
        setData(filmData);

        try {
          const sequelsData = await kinopoiskApi.getSequelsAndPrequels(id);
          setSequelsAndPrequels(sequelsData || []);
        } catch {
          setSequelsAndPrequels([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  const handleAddToFavorites = () => {
    dispatch(addToFavorite({
      id: data.filmId || data.kinopoiskId,
      name: data.nameRu,
      poster: data.posterUrlPreview,
      year: data.year,
      rating: data.ratingKinopoisk || data.rating,
    }));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorite(data.filmId || data.kinopoiskId));
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Загрузка данных о фильме...</div>;
  }

  if (error || !data) {
    return (
      <div style={{ padding: '20px' }}>
        <Typography color="error">Ошибка: {error || 'Фильм не найден'}</Typography>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBack}>
          Назад
        </Button>
        {isFavorite ? (
          <Button variant="outlined" color="error" startIcon={<RemoveCircleIcon />} onClick={handleRemoveFromFavorites}>
            Удалить из избранного
          </Button>
        ) : (
          <Button variant="outlined" color="success" startIcon={<AddCircleIcon />} onClick={handleAddToFavorites}>
            Добавить в избранное
          </Button>
        )}
        <Button variant="outlined" startIcon={<OpenInNewIcon />} href={data.webUrl} target="_blank">
          Ссылка на Кинопоиск
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={data.posterUrlPreview || 'https://via.placeholder.com/300x450'}
              alt={data.nameRu}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {data.nameRu} ({data.year})
              </Typography>
              <FilmRating rating={data.ratingKinopoisk || data.rating} size="large" />
              <Typography variant="body1" paragraph>
                <strong>Жанр:</strong> {Array.isArray(data.genres) && data.genres.length > 0
                  ? data.genres.map((g) => g.genre).filter(Boolean).join(', ')
                  : 'N/A'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Длительность:</strong> {data.filmLength ? `${data.filmLength} мин.` : 'N/A'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Описание:</strong> {data.description || 'Описание отсутствует'}
              </Typography>
              <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                РЕЙТИНГ КИНОПОИСК
              </Typography>
              <Typography>{data.ratingKinopoisk || data.rating || 'N/A'}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {sequelsAndPrequels.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            ПРИКВЕЛЫ И СИКВЕЛЫ
          </Typography>
          <Grid container spacing={2}>
            {sequelsAndPrequels.map((film) => (
              <Grid item xs={6} sm={4} md={2} key={film.filmId}>
                <FilmCard film={film} onClick={() => navigate(`/film/${film.filmId}`)} width={140} smallSize showRelationType />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Film;
