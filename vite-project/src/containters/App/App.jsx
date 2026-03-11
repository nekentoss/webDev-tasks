import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Profile from '../../pages/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
