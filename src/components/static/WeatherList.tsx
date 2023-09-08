import React, { FC, useMemo, useContext } from 'react'
import { ForecastWeather, WeatherData } from '../types';
import { SearchContext } from '../../context/SearchContext';


interface PropsInterface {
  weather: WeatherData | null,
}

export const WeatherList: FC<PropsInterface> = ({weather}) => {
  const contextWeather = useContext(SearchContext)!;
  
const options = useMemo(() => ({method:"GET"}), []);

const renderWeatherList = () => {
  const result = contextWeather.weather?.forecast.forecastday.map((d) => {
    console.log(d, "DAY");

    for (let info in d.astro) {
      console.log(info, d.astro, "day item");
      return `<h1>${info}: ${d.astro.date}</h1>`      
    }

    console.log(result, "result");
    
    
  })
}
renderWeatherList()

  if(!weather) return null; 
  
  return (
	<div>
    
  </div>
  )
}
