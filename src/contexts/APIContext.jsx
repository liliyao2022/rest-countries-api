import { useState, createContext, useEffect } from "react";

export const APIContext = createContext({
  countries: [],
  setCountries: () => { },
  filteredCountries: [],
  setFilteredCountries: () => { },
  isLoading: {},
});

export const APIContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  // state for managing filtering from search bar
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState({
    loadState: true,
    message: "Loading Countries...",
  });

  // fetches all country data on app load and sets data to both countries and filteredCountries state.
  // "countries" state will remain unchanged, but filteredCountries will always to changing based on searchbar input
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countryData = await response.json();
        setCountries(countryData);
        setFilteredCountries(countryData);
        setIsLoading({ ...isLoading, loadState: false });
      } catch {
        setIsLoading({ ...isLoading, message: "Unable to fetch countries." });
      }
    };
    fetchCountries();
  }, []);

  const fetchByCountryName = async (placeholder, menuItem, setMenuItem) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${menuItem}`
    );
    const countryData = await response.json();
    setFilteredCountries(countryData);
    setMenuItem(placeholder);
  };

  const value = {
    countries,
    filteredCountries,
    isLoading,
    fetchByCountryName,
    setCountries: (data) => setCountries(data),
    setFilteredCountries: (data) => setFilteredCountries(data),
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};
