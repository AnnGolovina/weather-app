import React, { useMemo, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { WeatherLocation } from '../types';

export const WeatherCard = ({data}: { data: WeatherLocation[] }) => {

const [value, setValue] = useState("");

  const options = useMemo(() => ({method: "GET", 
  headers: {
		'X-RapidAPI-Key': '417a5eb3d1mshed972e378934e9ap106f51jsn2f50fcd2d0fc',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}}), []);

  const result = useFetchData(
    'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13',
    options
  )
  
  return (
    <div>
      <input placeholder='Enter the city' value={value} />
      <button>Search</button>
    </div>
  );
}