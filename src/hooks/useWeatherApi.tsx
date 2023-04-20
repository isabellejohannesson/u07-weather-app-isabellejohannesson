import { useState, useEffect } from "react";

function useWeatherApi() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const appKey: any = "e02f5c3118f543f68a6213438231704";

  const getWeatherData = async () => {
    try {
      const url =
        `https://api.weatherapi.com/v1/forecast.json?key=` +
        appKey +
        `&q=48.8567,2.3508&days=5&aqi=no&alerts=yes`;

      const response = await fetch(url);

      const result = await response.json();
      console.log(result);

      setWeatherData([result]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getWeatherData();
  }, []);
  console.log(weatherData);

  return [weatherData, isLoading, error];
}

export default useWeatherApi;
