import "./CountryList.scss";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const CountryList = ({ themeState }) => {
  const { filteredCountries, isLoading } = useContext(APIContext);
  return (
    <div className="country-list-container">
      {/* displays loading message while fetching API */}
      {isLoading.loadState ? (
        <div className="loading-container">
          <h1 style={{ color: themeState.text }} className="loading-text">
            {isLoading.message}
          </h1>
        </div>
      ) : (
        // else maps over all the country data to display to UI.
        filteredCountries.map((country) => {
          return (
            //state prop contains data to be parsed when routed to new URL (to be used by useLocation hook)
            <Link
              key={country.cca3}
              to={`/${country.name.common.replace(/\s/g, "")}`}
              state={country}
            >
              <Card themeState={themeState} countryData={country} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default CountryList;
