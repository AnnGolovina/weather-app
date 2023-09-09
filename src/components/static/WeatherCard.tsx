import { SearchContext } from "../../context/SearchContext";
import { CurrentWeather, WeatherData, WeatherLocation } from "../types";
import React, { FC, useMemo } from 'react'
import {IoMdSunny, IoMdCloudy,IoIosPartlySunny } from "react-icons/io"
import {BsCloudFog2Fill} from "react-icons/bs"

interface PropsInterface {
  weather: WeatherData | null,
}

export const WeatherCard: FC<PropsInterface> = ({weather}) => {

  const options = useMemo(() => ({method:"GET"}), []);

  let weatherIcon;

  switch (weather?.current.condition.text) {
    case "Sunny":
      weatherIcon = <IoMdSunny style={{ fontSize: '36px' }} />;
      break;
    case "Cloudy":
      weatherIcon = <IoMdCloudy style={{ fontSize: '36px' }} />;
      break;
    case "Fog":
      weatherIcon = <BsCloudFog2Fill style={{ fontSize: '36px' }} />;
      break;
    case "Partly cloudy":
      weatherIcon = <IoIosPartlySunny style={{ fontSize: '36px' }}/>;
      break
    default:
      weatherIcon = null;
  }

  if(!weather) return null;
  
  return (
    <div className="weather-card">
    <div className="weather-card-loc">
      <div>
        <h2>{weather.location.name}</h2>
        <h3>Temperature: {weather.current.temp_c}</h3> 
        <h3>Feels like {weather.current.feelslike_c}</h3> 
      </div>
      <div> 
        <h4>{weatherIcon}</h4>


        <h4>{weather.current.condition.text}</h4>
      </div>
      
         
    </div>
    <div className="weather-card-current">
      <h3>{weather.current.wind_kph}</h3>
      <h3>{weather.current.pressure_mb}</h3>
    </div>

    </div>
  )
  }