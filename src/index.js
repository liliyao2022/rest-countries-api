import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { APIContextProvider } from './contexts/APIContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <APIContextProvider>
        <BrowserRouter basename='/rest-countries-api'>
          <App /> 
        </BrowserRouter>
      </APIContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

