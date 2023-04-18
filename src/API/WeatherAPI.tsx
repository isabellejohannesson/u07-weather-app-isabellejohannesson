import { useState, useEffect } from "react";

export const WeatherApi = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  const getWeatherData = async () => {
    const toArray = [];

    try {
      const url = `http://api.weatherapi.com/v1/current.json?q=paris&key=e02f5c3118f543f68a6213438231704`;

      const response = await fetch(url);
      console.log(response);
      const result = await response.json();
      console.log(result);

      setWeatherData([result.location]);
      toArray.push(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  console.log(weatherData);

  return (
    <>
      {weatherData.length < 0 &&
        weatherData.map((data) => {
          return (
            <div>
              <ul>
                <li>Current temperature: {data.current.temp_c}</li>
              </ul>
            </div>
          );
        })}
    </>
  );
};
