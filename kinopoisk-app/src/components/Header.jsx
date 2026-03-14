import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

const Header = () => {
  const username = useSelector((state) => state.user.name);
  const favoritesCount = useSelector((state) => state.favorites.length);

  const setActiveClass = ({ isActive }) =>
    isActive ? 'link active' : 'link';

  return (
    <AppBar position="sticky" elevation={1} sx={{ borderBottom: '1px solid #333' }}>
      <Toolbar>
        <MovieIcon sx={{ mr: 2, color: '#f5c518' }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          KINOPOISK-APP
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={NavLink} to="/" className={setActiveClass}>
            <HomeIcon sx={{ mr: 1 }} />
            Главная
          </Button>
          <Button color="inherit" component={NavLink} to="/movies" className={setActiveClass}>
            <MovieIcon sx={{ mr: 1 }} />
            Фильмы
          </Button>
          <Button color="inherit" component={NavLink} to="/search" className={setActiveClass}>
            Поиск
          </Button>
          <Button color="inherit" component={NavLink} to="/favorites" className={setActiveClass}>
            <Badge badgeContent={favoritesCount} color="error">
              <FavoriteIcon sx={{ mr: 1 }} />
              Избранное
            </Badge>
          </Button>
          <Button color="inherit" component={NavLink} to="/profile" className={setActiveClass}>
            <PersonIcon sx={{ mr: 1 }} />
            Профиль
          </Button>
        </Box>
        {username && (
          <Typography sx={{ ml: 2, color: '#f5c518' }}>
            Привет, {username}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
