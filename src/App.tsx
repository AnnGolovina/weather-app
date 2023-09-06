import React from 'react';
import './App.css';
import { WeatherCard } from './components/static/WeatherCard';
import { SearchContextProvider } from './context/SearchContext';

function App() {
  return (
    <div>
      <h1>Welcome to the Weather App</h1>
      <SearchContextProvider> 
        <WeatherCard data={[]} />        
       
      
      </SearchContextProvider>
    </div>
  );
}

export default App;
