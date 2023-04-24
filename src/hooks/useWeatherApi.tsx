import { useState, useEffect } from "react";
import useLocationStore from "../stores/useLocationStore";

function useWeatherApi() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [position] = useLocationStore((state: any) => [state.position]);

  const appKey = "e02f5c3118f543f68a6213438231704";
  /* import.meta.env.VITE_API_KEY; */

  const getWeatherData = async () => {
    console.log(position);
    try {
      const url =
        `https://api.weatherapi.com/v1/forecast.json?key=` +
        appKey +
        `&q=` +
        position.lat +
        `,` +
        position.lng +
        `&days=3&aqi=no&alerts=yes`;

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
