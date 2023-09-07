import { SearchContext } from "../../context/SearchContext";
import { CurrentWeather, WeatherLocation } from "../types";

interface PropsInterface {
  location: WeatherLocation | null,
  currentWeather: CurrentWeather | null,
}

import React, { FC, useContext, useMemo } from 'react'

export const WeatherCard: FC<PropsInterface> = ({location,currentWeather}) => {

  const options = useMemo(() => ({method:"GET"}), []);

  if(!location && !currentWeather) return null;
  
  return (
    <div>
      <h3>{location?.country}</h3>
      <h4>{currentWeather?.temp_c}</h4>
    </div>
  )
}
