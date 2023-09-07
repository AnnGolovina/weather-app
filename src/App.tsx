import React from 'react';
import './App.css';
import { WeatherCard } from './components/static/WeatherCard';
import { SearchContextProvider } from './context/SearchContext';
import { Search } from './components/shared/Search';

function App() {
  return (
    <div>
      <h1>Welcome to the Weather App</h1>
      <SearchContextProvider> 
          <Search/>
          <WeatherCard location={null} currentWeather={null}  />
      </SearchContextProvider>
    </div>
  );
}

export default App;
