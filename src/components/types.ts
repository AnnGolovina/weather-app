export interface WeatherData {
	location: WeatherLocation,
	current: CurrentWeather,
	forecast: ForecastWeather,
}


export interface WeatherLocation {
		name: string, 
		country: string
}

export interface CurrentWeather {
	last_updated:string,
	temp_c: string,
	condition: WeatherCondition,

}

export interface WeatherCondition {
	text: string,
	icon: string,
	pressure_mb:string,
	feelslike_c:string,
	vis_km:string,
}

export interface ForecastWeather {
	forecastday: WeatherDaysData[],
}

export interface WeatherDaysData {
	astro: AstroData;
	conditions: ConditionsData;
  }
  
  export interface AstroData {
	date: string;
	sunrise: string;
	sunset: string;
  }
  
  export interface ConditionsData {
	maxtemp_c: string;
	mintemp_c: string;
	maxwind_kph: string;
  }
  
  
  
  