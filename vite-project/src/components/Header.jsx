import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';

const Header = () => {
  const username = useSelector((state) => state.user.name);

  return (
    <AppBar position="static">
      <Toolbar>
        <MovieIcon sx={{ mr: 2 }} />

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>

        <Button color="inherit" component={NavLink} to="/">
          <HomeIcon sx={{ mr: 1 }} />
          Главная
        </Button>

        <Button color="inherit" component={NavLink} to="/movies">
          <MovieIcon sx={{ mr: 1 }} />
          Фильмы
        </Button>

        <Button color="inherit" component={NavLink} to="/user">
          <PersonIcon sx={{ mr: 1 }} />
          Профиль
        </Button>

        {username && <Typography sx={{ ml: 2 }}>Привет, {username}</Typography>}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
