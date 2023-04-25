import { useState, useEffect } from "react";
import useLocationStore from "../stores/useLocationStore";
import useSearchQueryStore from "../stores/useSearchQueryStore";

function useWeatherApi() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [position] = useLocationStore((state: any) => [state.position]);
  const [searchQuery] = useSearchQueryStore((state: any) => [
    state.searchQuery,
  ]);

  const appKey = import.meta.env.VITE_API_KEY;

  const getWeatherData = async () => {
    try {
      let url = `https://api.weatherapi.com/v1/forecast.json?key=` + appKey;
      if (searchQuery) {
        url += `&q=` + searchQuery + `&days=3&aqi=no&alerts=yes`;
      } else
        url +=
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
  }, [searchQuery]);
  console.log(weatherData);

  return [weatherData, isLoading, error];
}

export default useWeatherApi;
