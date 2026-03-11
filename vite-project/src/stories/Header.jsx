import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>

        <Button
          color="inherit"
          component={NavLink}
          to="/"
        >
          <HomeIcon sx={{ mr: 1 }} />
          Главная
        </Button>

        <Button
          color="inherit"
          component={NavLink}
          to="/movies"
        >
          <MovieIcon sx={{ mr: 1 }} />
          Фильмы
        </Button>

        <Button
          color="inherit"
          component={NavLink}
          to="/profile"
        >
          <PersonIcon sx={{ mr: 1 }} />
          Профиль
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
