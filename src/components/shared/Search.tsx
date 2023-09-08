import React, { FC, useContext } from "react";
import { FlexRow } from "./Flex";
import { SearchContext } from "../../context/SearchContext";
import { useFetchData } from "../../hooks/useFetchData";
import {options} from "../shared/api.config"
import { CurrentWeather, WeatherData } from "../types";

export type HTMLInputEvent = {target: {value: string, name: string}};

interface PropsInterface {}

export const Search: FC<PropsInterface> = () => {
  const { value, setValue, weather, setWeather } = useContext(SearchContext)!;
  
  const getData = useFetchData(
  `https://weatherapi-com.p.rapidapi.com/current.json?q=${value}`,
    options,
    false
  ) as () => Promise<any>;

  const onButtonClick = () => {
    getData().then((data) => setWeather(data));
  };

  return (
    <FlexRow>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Search location..."
        type="text"
      />
      <button onClick={() => onButtonClick()}>Search</button>
    </FlexRow>
  );
};
