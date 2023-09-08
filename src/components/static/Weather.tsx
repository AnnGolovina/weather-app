import React, {useContext} from 'react'
import { SearchContext } from '../../context/SearchContext';
import { Search } from '../shared/Search';
import { WeatherCard } from './WeatherCard';
import { WeatherList } from './WeatherList';
import { FlexColumn } from '../shared/Flex';



export const Weather = () => {
	const {weather} = useContext(SearchContext)!;

  return (
	<div>
		<FlexColumn width='60%' height='90%'>
			<Search/>
			<WeatherCard weather={weather}   />
		</FlexColumn>
		
		<FlexColumn>
			<WeatherList weather={weather} />
		</FlexColumn>
		
		
	</div>
  )
}
