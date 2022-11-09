import "./Searchbar.scss";
import { useEffect, useState, useContext } from "react";
import { APIContext } from "../../contexts/APIContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ placeholder, themeState }) => {
  const { countries, setFilteredCountries } = useContext(APIContext);
  const [inputField, setInputField] = useState("");

  useEffect(() => {
    const query = inputField.toLowerCase();
    setFilteredCountries(
      // Always filter from original API data so when all searchbar text removed, we have the full dataset to filter again.
      countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.includes(query);
      })
    );
  }, [inputField]);

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: themeState.elements,
        boxShadow: themeState.shadow,
        color: themeState.inputColor ? themeState.inputColor : themeState.text,
      }}
      className="searchbar-container"
    >
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <input
        style={{ backgroundColor: themeState.elements, color: themeState.text }}
        className="searchbar"
        type="text"
        placeholder={placeholder}
        value={inputField}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Searchbar;
