import './App.scss';
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Routes, Route } from 'react-router-dom';
import MainPage from './routes/MainPage/MainPage';
import Header from './components/Header/Header';
import CountryPage from "./routes/CountryPage/CountryPage"

function App() {

  const { theme, light, dark } = useContext(ThemeContext);
  const themeState = theme ? dark : light;

  return (
    <div className='App' style={{backgroundColor: themeState.bg, color: themeState.text}}>
      <Routes>
        <Route path="/" element={<Header themeState={themeState} />} >
          <Route index element={<MainPage themeState={themeState}/>}/>
          <Route path=":country" element={<CountryPage themeState={themeState}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
