import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { FilmCard } from '../components';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/film/${id}`);
  };

  if (favorites.length === 0) {
    return (
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          ИЗБРАННОЕ
        </Typography>
        <Typography>Список пуст</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        ИЗБРАННОЕ
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'flex-start' }}>
        {favorites.map((item) => (
          <FilmCard key={item.id} film={item} onClick={() => handleClick(item.id)} />
        ))}
      </Box>
    </Box>
  );
};

export default Favorites;
