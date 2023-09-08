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
	temp_c: string,
	wind_kph: string,
	pressure_mb:string,
	feelslike_c:string,
	vis_km:string,
	condition: WeatherCondition,

}

export interface WeatherCondition {
	text: string,
	icon: string,
}

export interface ForecastWeather {
	forecastday: WeatherDaysData[],
}

export interface WeatherDaysData {
	astro: AstroData;
	date: string;
	//conditions: ConditionsData;
	day: WeatherOnDay;
  }
  
  export interface AstroData {	
	sunrise: string;
	sunset: string;
  }

  export interface WeatherOnDay {
	avgtemp_c: string;
	avgvis_km: string;
	conditions: ConditionsDataOnDay;
	maxtemp_c: string;
	mintemp_c: string;
	maxwind_kph: string;
  }
  
  export interface ConditionsDataOnDay {
	icon: string;
	text: string;
  }
  export interface ConditionsData {
	maxtemp_c: any;
	mintemp_c: string;
	maxwind_kph: string;
  }
  
  
  
  