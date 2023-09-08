import React from 'react';
import './App.css';
import { SearchContextProvider } from './context/SearchContext';
import { Weather } from './components/static/Weather';
import { WeatherList } from './components/static/WeatherList';
import { FlexRow } from './components/shared/Flex';

function App() {
  return (
    <FlexRow width='80vw' height='85vh' borderRadius='15px' background='#04062c' margin='auto' padding='30px'>
      <SearchContextProvider> 
          <Weather />
      </SearchContextProvider>
    </FlexRow>
  );
}

export default App;
