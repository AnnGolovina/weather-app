import React from 'react';
import './App.css';
import { SearchContextProvider } from './context/SearchContext';
import { Weather } from './components/static/Weather';
import { WeatherList } from './components/static/WeatherList';
import { Flex, FlexRow } from './components/shared/Flex';

function App() {
  return (
    <div>
      <h1>Weater  forecast</h1>
      
    <Flex minWidth='600px' width='75vw' height='80%' borderRadius='15px' background='#ffffffaa' margin='auto' padding='10px' >
      
      <SearchContextProvider> 
          <Weather />
      </SearchContextProvider>
    </Flex>
    </div>
  );
}

export default App;
