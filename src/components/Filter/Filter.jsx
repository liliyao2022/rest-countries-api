import "./Filter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { APIContext } from "../../contexts/APIContext";

const Filter = ({ themeState, placeholder, menuItems }) => {
  const { fetchByCountryName } = useContext(APIContext);
  const [menuItem, setMenuItem] = useState(placeholder);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectMenuItem = (item) => {
    setMenuItem(item);
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (menuItem !== placeholder) {
      fetchByCountryName(placeholder, menuItem, setMenuItem);
    }
  }, [menuItem, fetchByCountryName, placeholder]);

  return (
    <div className="dropdown-menu-container">
      <div
        className="dropdown-menu-filter"
        onClick={handleToggleMenu}
        style={{
          backgroundColor: themeState.elements,
          color: themeState.text,
          boxShadow: themeState.shadow,
        }}
      >
        <span>{menuItem}</span>
        <FontAwesomeIcon
          className={`arrow ${isMenuOpen ? "toggle-arrow" : ""}`}
          icon={faCaretDown}
        />
      </div>
      <ul
        className="menu-item-container"
        style={{
          backgroundColor: themeState.elements,
          color: themeState.text,
          boxShadow: themeState.shadow,
          visibility: `${isMenuOpen ? "visible" : "hidden"}`,
        }}
      >
        {menuItems.map((item, index) => (
          <li onClick={() => handleSelectMenuItem(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
