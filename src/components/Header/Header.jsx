import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ themeState }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header
        style={{
          backgroundColor: themeState.elements,
          boxShadow: themeState.shadow,
        }}
        className="header-container"
      >
        <div className="header-text">
          <Link
            to="/"
            className="header-title"
            style={{ color: themeState.text }}
          >
            Where in the world?
          </Link>
          <div className="dark-mode-container" onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme ? faSun : faMoon} />
            <span>{theme ? "Light Mode" : "Dark Mode"}</span>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
