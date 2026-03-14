import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Добро пожаловать в Movie App
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Приложение для просмотра фильмов из Кинопоиска
      </Typography>
    </Box>
  );
}

export default Home;
