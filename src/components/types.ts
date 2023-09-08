export interface WeatherData {
	location: WeatherLocation,
	current: CurrentWeather,
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
	vis_km:string
}