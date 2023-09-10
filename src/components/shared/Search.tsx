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
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${value}&days=3`,
    options,
    false
  ) as () => Promise<WeatherData>;

  const onButtonClick = () => {
    getData().then((data) => setWeather(data));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <FlexRow alignItems="center" justifyContent="center">
      <input
        className="search-input"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
        value={value}
        placeholder="Search location..."
        type="text"
      />
      <button className="search-btn" onClick={() => onButtonClick()}>Search</button>
    </FlexRow>
  );
};
