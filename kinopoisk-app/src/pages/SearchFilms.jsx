import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, Alert, Box } from '@mui/material';
import { FilmCard } from '../components';
import { kinopoiskApi } from '../api';
import { CONSTANTS } from '../config';

const SearchFilms = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value.trim()) {
        setLoading(true);
        kinopoiskApi.searchFilms(value)
          .then((result) => {
            setData(result.films || []);
            setLoading(false);
          })
          .catch(() => {
            setData([]);
            setLoading(false);
          });
      } else {
        setData([]);
      }
    }, CONSTANTS.DEBOUNCE_SEARCH);

    return () => clearTimeout(timer);
  }, [value]);

  const handleClick = (id) => {
    navigate(`/film/${id}`);
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        ПОИСК ФИЛЬМА
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Введите название фильма"
        variant="outlined"
        sx={{ mb: 4 }}
      />
      {loading && <Alert severity="info">Поиск...</Alert>}
      {!loading && data.length === 0 && value !== '' && (
        <Alert severity="info">Не найдено</Alert>
      )}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'flex-start' }}>
        {data.map((item) => (
          <FilmCard key={item.filmId} film={item} onClick={() => handleClick(item.filmId)} />
        ))}
      </Box>
    </Box>
  );
};

export default SearchFilms;
