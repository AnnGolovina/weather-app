import React from 'react';
import './App.css';
import { WeatherCard } from './components/static/WeatherCard';
import { SearchContextProvider } from './context/SearchContext';
import { Search } from './components/shared/Search';
import { Weather } from './components/static/Weather';

function App() {
  return (
    <div>
      <h1>Welcome to the Weather App</h1>
      <SearchContextProvider> 
          <Weather />
      </SearchContextProvider>
    </div>
  );
}

export default App;
