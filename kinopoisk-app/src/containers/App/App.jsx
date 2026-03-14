import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Profile from '../../pages/Profile';
import Favorites from '../../pages/Favorites';
import Film from '../../pages/Film';
import SearchFilms from '../../pages/SearchFilms';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/search" element={<SearchFilms />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
