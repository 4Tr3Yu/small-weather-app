# Small Weather App
	A small weather application should be created with following basic functionalities:
	- Show three tabs with predefined cities (Rio de Janeiro, Beijing and Los Angeles)
	- Connect to a backend to get the weather data
	- Show for the selected city a forecast for the next hours and the next days should be
	presented
	- The user should get the ability to refresh the data
	- On the next page is a mockup for the small weather application
	- Weather icons are available at https://openweathermap.org/weather-conditions
	- Bonus: allow to search for a city

## Installing

	- ```bun install```
	- ```bun dev```

### Notes
- This one is the only API that worked with the provided apiKey: https://openweathermap.org/forecast5
- Since this API  only returns weather forecast for 5 days with data every 3 hours I will use the 12PM hour as a reference for the dayli forecast