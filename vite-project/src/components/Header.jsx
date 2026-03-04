import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const username = useSelector((state) => state.user.name);

  return (
    <header style={{ padding: "20px", background: "#222" }}>
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          isTransitioning
            ? "link transitioning"
            : isPending
            ? "link pending"
            : isActive
            ? "link active"
            : "link"
        }
      >
        Главная
      </NavLink>

      <NavLink to="/movies" className="link">
        Фильмы
      </NavLink>

      <NavLink to="/profile" className="link">
        Профиль
      </NavLink>

      <span style={{ marginLeft: "20px", color: "white" }}>
        {username && `Привет, ${username}`}
      </span>
    </header>
  );
};

export default Header;