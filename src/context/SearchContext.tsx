import React, { Dispatch, FC, PropsWithChildren, useState } from 'react'
import { CurrentWeather, WeatherLocation } from '../components/types'
import { createContext } from 'react';

interface SearchContextInterface {
	weather: CurrentWeather | null;
	setWeather: Dispatch<CurrentWeather | null>;

	value: string;
	setValue:Dispatch<string>;

	location: WeatherLocation | null;
	setLocation: Dispatch<WeatherLocation | null>;
}

export const SearchContext = createContext<SearchContextInterface | null>(null);


export const SearchContextProvider: FC<PropsWithChildren> = ({children}) => {
	const [weather, setWeather] = useState<CurrentWeather | null>(null);
	const [value, setValue] = useState<string>("");
	const [location, setLocation] = useState<WeatherLocation | null>(null);

  return (
	<SearchContext.Provider
	value={{weather, setWeather, value, setValue, location, setLocation}}>
	{children}
  </SearchContext.Provider>
  )
}

