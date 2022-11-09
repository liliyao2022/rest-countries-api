import "./Query.scss";
import Searchbar from "../Searchbar/Searchbar";
import Filter from "../Filter/Filter";

const Query = ({ themeState }) => {
  return (
    <div className="query-container">
      <Searchbar
        placeholder="Search for a country..."
        themeState={themeState}
      />
      <Filter
        themeState={themeState}
        placeholder="Filter by Region"
        menuItems={["Africa", "America", "Asia", "Europe", "Oceania"]}
      />
    </div>
  );
};

export default Query;
