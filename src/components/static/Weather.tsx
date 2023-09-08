import React, {useContext} from 'react'
import { SearchContext } from '../../context/SearchContext';
import { Search } from '../shared/Search';
import { WeatherCard } from './WeatherCard';

export const Weather = () => {
	const {weather} = useContext(SearchContext)!;

  return (
	<div>
		<Search/>
		<WeatherCard weather={weather}   />
	</div>
  )
}
