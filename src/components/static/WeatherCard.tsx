import { SearchContext } from "../../context/SearchContext";
import { CurrentWeather, WeatherData, WeatherLocation } from "../types";
import React, { FC, useMemo } from 'react'

interface PropsInterface {
  weather: WeatherData | null,
}

export const WeatherCard: FC<PropsInterface> = ({weather}) => {

  const options = useMemo(() => ({method:"GET"}), []);
  

  if(!weather) return null;
  
  return (
    <div>
      <h3>{weather.location.name}</h3>
      <h2>{weather.current.temp_c}</h2>
      
      
    </div>
  )
}
