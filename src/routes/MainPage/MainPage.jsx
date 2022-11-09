import "./MainPage.scss";
import Query from "../../components/Query/Query";
import CountryList from "../../components/CountryList/CountryList";

const MainPage = ({ themeState }) => {
  return (
    <div className="main">
      <Query themeState={themeState} />
      <CountryList themeState={themeState} />
    </div>
  );
};

export default MainPage;
