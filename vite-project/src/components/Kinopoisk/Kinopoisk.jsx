import { useEffect, useState } from "react";
import styles from "./Kinopoisk.module.css";
import { SearchInput } from "./SearchInput";
import { FilterSelect } from "./FilterSelect";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/favoritesSlice";

export const Kinopoisk = () => {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS",
      {
        headers: {
          "X-API-KEY": import.meta.env.VITE_KP_API_KEY,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка при загрузке фильмов");
        }
        return res.json();
      })
      .then((data) => {
        setFilms(data.films || data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const isFavorite = favorites.some(
    (item) => item.id === (film.filmId || film.kinopoiskId)
  );
  const filteredFilms = films
    .filter((film) =>
      film.nameRu?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((film) =>
      ratingFilter ? Number(film.rating) >= Number(ratingFilter) : true
    );

  if (loading) return <p>Загрузка фильмов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Топ фильмы Кинопоиска</h2>

      <div className={styles.controls}>
        <SearchInput value={search} onChange={setSearch} />
        <FilterSelect value={ratingFilter} onChange={setRatingFilter} />
      </div>

      <div className={styles.container}>
        {filteredFilms.slice(0, 20).map((film) => (
          <div
            key={film.filmId || film.kinopoiskId}
            className={styles.card}
          >
            <img
              src={film.posterUrlPreview}
              alt={film.nameRu}
            />
            <h4>{film.nameRu}</h4>
            <p>Рейтинг: {film.rating}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(
            toggleFavorite({
              id: film.filmId || film.kinopoiskId,
              name: film.nameRu,
            })
          )
        }
      >
        {isFavorite ? "❤️ Удалить" : "🤍 В избранное"}
      </button>      
    </div>
  );
};