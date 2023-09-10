import React, {useContext} from 'react'
import { SearchContext } from '../../context/SearchContext';
import { Search } from '../shared/Search';
import { WeatherCard } from './WeatherCard';
import { WeatherList } from './WeatherList';
import { FlexColumn, FlexRow } from '../shared/Flex';



export const Weather = () => {
	const {weather} = useContext(SearchContext)!;

  return (
	<div>
		<Search/>

		<FlexRow width='75vw' minWidth='600px' height='70vh' justifyContent='space-around' alignItems='center' color='#2b2b2d'>
		
		<FlexColumn width='40vw' minWidth='322px' height='55vh' margin='30px'  >			
			<WeatherCard weather={weather}   />
		</FlexColumn>
		
		<FlexColumn width='20vw' minWidth='160px' margin='30px' alignItems='stretch' >
			<WeatherList weather={weather} />
		</FlexColumn>
		
		</FlexRow>
		
	</div>
  )
}
