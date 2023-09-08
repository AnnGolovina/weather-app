import React, { Dispatch, FC, PropsWithChildren, useState } from 'react'
import { CurrentWeather, WeatherData, WeatherLocation } from '../components/types'
import { createContext } from 'react';

interface SearchContextInterface {
	weather: WeatherData | null;
	setWeather: Dispatch<WeatherData | null>;

	value: string;
	setValue:Dispatch<string>;
}

export const SearchContext = createContext<SearchContextInterface | null>(null);


export const SearchContextProvider: FC<PropsWithChildren> = ({children}) => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [value, setValue] = useState<string>("");

  return (
	<SearchContext.Provider
	value={{weather, setWeather, value, setValue}}>
	{children}
  </SearchContext.Provider>
  )
}

