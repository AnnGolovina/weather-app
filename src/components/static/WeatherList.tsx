import React, { FC, useMemo, useContext } from 'react'
import { ForecastWeather, WeatherData } from '../types';
import {FiSunrise, FiSunset} from "react-icons/fi"
import {MdDateRange} from "react-icons/md"
import {RiCelsiusFill} from "react-icons/ri"
import {IoMdSunny, IoMdCloudy,IoIosPartlySunny } from "react-icons/io"
import {BsCloudFog2Fill} from "react-icons/bs"
import {IoCloudySharp} from "react-icons/io5"
import {RiDrizzleFill} from "react-icons/ri"
import {BsFillCloudLightningRainFill} from "react-icons/bs"
import {FaTemperatureArrowUp, FaTemperatureArrowDown} from "react-icons/fa6"
import {PiWindLight} from "react-icons/pi"
import { Flex, FlexRow } from '../shared/Flex';


interface PropsInterface {
  weather: WeatherData | null,
}

export const WeatherList: FC<PropsInterface> = ({weather}) => {
  
  
const options = useMemo(() => ({method:"GET"}), []);
 
const renderWeatherList = () => {
  if (!weather || !weather.forecast.forecastday) return null;


  const astroElements = weather.forecast.forecastday.map((d) => {
    console.log(d, "DAY");

    let weatherIcon;

  switch (weather?.current.condition.text) {
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
  
    return (
      <div key={d.date} className='weather-list'>
      <Flex margin='10px 15px 0 15px'>
        <h3><MdDateRange style={{fontSize:"20px"}}/> {d.date}</h3>
      </Flex>
        

        <FlexRow margin='0 15px' justifyContent='space-between'>
          <p><FiSunrise/> {d.astro.sunrise}</p>
          <p><FiSunset/> {d.astro.sunset}</p>
        </FlexRow>
       
       <FlexRow margin='0 15px' justifyContent='space-between'>
          <p> <FaTemperatureArrowUp/> {d.day.maxtemp_c}<RiCelsiusFill/></p>
          <p><FaTemperatureArrowDown/> {d.day.mintemp_c}</p>
       </FlexRow>

       <FlexRow margin='0 15px 10px 15px' justifyContent='space-between'>
        <p><PiWindLight />{d.day.maxwind_kph} km/h</p>
        <p style={{fontSize:"25px"}}>{weatherIcon}</p>        
       </FlexRow>
        
      </div>
    );
  });

  return astroElements;
}

return (
  <div>
    {renderWeatherList()}
  </div>
);
}