import React from 'react';
import './App.css';
import { SearchContextProvider } from './context/SearchContext';
import { Weather } from './components/static/Weather';
import { WeatherList } from './components/static/WeatherList';

function App() {
  return (
    <div>
      <h1>Welcome to the Weather App</h1>
      <SearchContextProvider> 
          <Weather />
          <WeatherList weather={null} />
      </SearchContextProvider>
    </div>
  );
}

export default App;
