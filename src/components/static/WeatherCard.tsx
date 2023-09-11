import {  WeatherData} from "../types";
import React, { FC, useMemo } from 'react'
import {IoMdSunny, IoMdCloudy,IoIosPartlySunny } from "react-icons/io"
import {BsCloudFog2Fill} from "react-icons/bs"
import {FaTemperatureHigh} from "react-icons/fa"
import {PiWindLight} from "react-icons/pi"
import {BsDropletHalf} from "react-icons/bs"
import {BiDownArrow} from "react-icons/bi"
import {GoSun} from "react-icons/go"
import {IoCloudySharp} from "react-icons/io5"
import {RiDrizzleFill} from "react-icons/ri"
import {BsFillCloudLightningRainFill} from "react-icons/bs"
import { FlexColumn, FlexRow } from "../shared/Flex";
import styled from 'styled-components';

interface PropsInterface {
  weather: WeatherData | null,
}

export const WeatherCard: FC<PropsInterface> = ({weather}) => {

  if (!weather || !weather.location || !weather.location.name || !weather.forecast  || !weather.forecast.forecastday) {
    return null;
  }

  const options = useMemo(() => ({method:"GET"}), []);

  let weatherIcon;

  switch (weather?.current?.condition?.text) {
    case "Sunny":
      weatherIcon = <IoMdSunny/>;
      break;
    case "Cloudy":
      weatherIcon = <IoMdCloudy/>;
      break;
    case "Fog":
      weatherIcon = <BsCloudFog2Fill/>;
      break;
    case "Partly cloudy":
      weatherIcon = <IoIosPartlySunny/>;
      break;
    case "Overcast":
      weatherIcon = <IoCloudySharp/>;
      break;
    case "Light drizzle" && "Light rain shower":
      weatherIcon = <RiDrizzleFill/>;
      break;
    case "Light rain":
        weatherIcon = <RiDrizzleFill/>;
      break;
    case "Moderate or heavy rain with thunder":
      weatherIcon = <BsFillCloudLightningRainFill/>;
      break;
    default:
      weatherIcon = null;
  }

  if(!weather) return null;
  
  return (
    <div className="weather-card">
    <div className="weather-card-loc">

      <div>
        <h2>{weather.location.name}</h2> 

          <FlexColumn alignItems="stretch">
          <h3><FaTemperatureHigh /> {weather.current.temp_c}C</h3> 
          <h5>Feels like {weather.current.feelslike_c}C</h5> 
          </FlexColumn>

      </div>

      <FlexColumn alignItems="center" justifyContent="center"> 
        <h4>{weatherIcon}</h4>
        <h3 className="weather-text">{weather.current.condition?.text}</h3>
      </FlexColumn>      
         
    </div>

    <FlexRow className="weather-card-current" justifyContent="space-between" margin="40px 0 0 0">
    
      <FlexColumn>
        <FlexColumn>
          <h3>Wind <PiWindLight /></h3>
          <p>{weather.current.wind_kph}km/h</p>
        </FlexColumn>
        <FlexColumn margin="25px 0 0">
          <h3>Pressure <BiDownArrow/></h3>
          <p>{weather.current.pressure_mb} Pa</p>
        </FlexColumn>
      
      
      </FlexColumn>

      <FlexColumn>
          <FlexColumn >
        <h3>Humidity < BsDropletHalf style={{fontSize: '15px'}}/></h3>
        <p>{weather.current.humidity}%</p>
          </FlexColumn>
          <FlexColumn margin="25px 0 0">
        <h3>UV index <GoSun/></h3>
        <p>{weather.current.uv}</p>
          </FlexColumn>
      </FlexColumn>
    </FlexRow>


    </div>
  )
  }