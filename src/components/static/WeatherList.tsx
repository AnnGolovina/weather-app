import React, { FC, useMemo, useContext } from 'react'
import { ForecastWeather, WeatherData } from '../types';
import { SearchContext } from '../../context/SearchContext';


interface PropsInterface {
  weather: WeatherData | null,
}

export const WeatherList: FC<PropsInterface> = ({weather}) => {
  
  
const options = useMemo(() => ({method:"GET"}), []);

 
const renderWeatherList = () => {
  if (!weather || !weather.forecast.forecastday) return null;


  const astroElements = weather.forecast.forecastday.map((d) => {
    console.log(d, "DAY");

  
    return (
      <div key={d.date}> 
        <div>Date: {d.date}</div>
        <div>Sunrise: {d.astro.sunrise}</div>
        <div>Sunset: {d.astro.sunset}</div>
        <div> Max.t: {d.day.maxtemp_c}</div>


      </div>
    );
  });

  return astroElements;
}









  
//  const astroElements = weather.forecast.forecastday.map((d) => {
//    console.log(d, "DAY");
    
//    for (let info in d.astro.date) {
//      console.log(info, d.astro, "day item");

//      return (`<div>${info}: ${d.astro.date[info]}</div>`);
//    }

//  });
  
//  return astroElements;
//}

return (
  <div>
    {renderWeatherList()}
  </div>
);
}