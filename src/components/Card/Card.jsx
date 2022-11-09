import DataField from "../DataField/DataField";
import "./Card.scss";

const Card = ({ themeState, countryData }) => {
  const { capital, flags, name, population, region } = countryData;

  return (
    <div
      className="card-container"
      style={{
        backgroundColor: themeState.elements,
        color: themeState.text,
        boxShadow: themeState.shadow,
      }}
    >
      <img className="card-img" src={flags.png} alt="country-flag" />
      <div className="card-description">
        <h3>{name.common}</h3>
        <DataField title="Population" data={population.toLocaleString()} />
        <DataField title="Region" data={region} />
        <DataField title="Capital" data={capital} />
      </div>
    </div>
  );
};

export default Card;
