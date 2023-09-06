import React, { FC, useCallback, useContext } from 'react'
import { FlexRow } from './Flex';
import { SearchContext } from '../../context/SearchContext';

//export type HTMLInputEvent = { target: { value: string, name: string } };


//interface PropsInterface {

//}

//export const Search: FC<PropsInterface> = () => {
//  const { value, setValue } = useContext(SearchContext)!;

//	console.log(value, "Render");

//	//const onChange = useCallback((event: HTMLInputEvent) => {
//	//	setValue(event.target.value);
//	//}, []);

//	const onClear = useCallback(() => {
//		setValue("")
//	}, []);

//  return (
//	<FlexRow >
//		<input value={value} placeholder='Search' type="text" />
//		<span onClick={onClear} style={{ cursor: 'pointer' }}>
               
//            </span>
//	</FlexRow>
//  )
//}