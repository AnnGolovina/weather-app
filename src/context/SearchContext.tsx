import React, { Dispatch, FC, PropsWithChildren, useState } from 'react'
import { WeatherLocation } from '../components/types'
import { createContext } from 'vm';
import { useFetchData } from '../hooks/useFetchData';

interface SearchContextInterface {
	location: WeatherLocation[];

	value: string;
	setValue: Dispatch<string>;

	locationSearchResult: WeatherLocation[];

}

export const SearchContext = createContext();


export const SearchContextProvider: FC<PropsWithChildren> = ({children}) => {
	const [value, setValue] = useState<string>("");

	const {data: location} = useFetchData<WeatherLocation[]>(
		'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13'
	)

	const locationSearchResult =  location ? location.filter(({ name }) => name.includes(value)) : [];

  return (
	<SearchContext.Provider
	value={{
	  location: location || [],
	  value,
	  setValue,
	  locationSearchResult,
	}}
  >
	{children}
  </SearchContext.Provider>
  )
}

