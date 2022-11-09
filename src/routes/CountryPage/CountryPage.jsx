import "./CountryPage.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DataField from "../../components/DataField/DataField";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

// recursively get the first key item in a nested object
const ObjectFirstKeyRecursion = (object) => {
  if (typeof object === "string") {
    return object;
  }
  const key = Object.keys(object)[0];
  object = object[key];
  return ObjectFirstKeyRecursion(object);
};

const findCountryWithCode = (code, countries) => {
  if (code && countries.length > 0) {
    const matchedCountry = countries.filter((country) => country.cca3 === code);
    return matchedCountry[0];
  }
};

const CountryPage = ({ themeState }) => {
  const { countries } = useContext(APIContext);

  // retrieve data passed from the CountryList and from *this* component (recursive routing)
  const location = useLocation();
  const {
    borders,
    capital,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
  } = location.state;

  return (
    <div
      // style={{ backgroundColor: themeState.bg, color: themeState.text }}
      className="country-page-container"
    >
      <div className="back-btn">
        <Link to="/">
          <Button>
            <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
            Back
          </Button>
        </Link>
      </div>
      <div className="facts-container">
        <img src={flags.svg} alt="country-flag" />
        <div className="text-container">
          <h2>{name.common}</h2>
          <div className="data-fields-container">
            <div className="field">
              <DataField
                title="Native Name"
                data={ObjectFirstKeyRecursion(name.nativeName)}
              />
              <DataField
                title="Population"
                data={population.toLocaleString()}
              />
              <DataField title="Region" data={region} />
              <DataField title="Sub Region" data={subregion} />
              {capital && <DataField title="Capital" data={capital[0]} />}
            </div>
            <div className="field">
              <DataField title="Top Level Domain" data={tld[0]} />
              <DataField
                title="Currencies"
                data={ObjectFirstKeyRecursion(currencies)}
              />
              <DataField
                title="Languages"
                data={ObjectFirstKeyRecursion(languages)}
              />
            </div>
          </div>
          <div className="border-countries-container">
            {borders && (
              <>
                <DataField title="Border Countries" />
                <div className="btn-group">
                  {borders.map((countryCode) => {
                    const matchedCountry = findCountryWithCode(
                      countryCode,
                      countries
                    );
                    const matchedCountryName = matchedCountry.name.common;

                    return (
                      <Link
                        key={countryCode}
                        to={`/${matchedCountryName.replace(/\s/g, "")}`}
                        state={matchedCountry}
                      >
                        <Button>{matchedCountryName}</Button>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
