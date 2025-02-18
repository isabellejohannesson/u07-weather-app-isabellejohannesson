import { useState } from "react";
import useWeatherApi from "../../hooks/useWeatherApi";

export const WholeForecast = () => {
  const [weatherData = [], isLoading = false, error = null] = useWeatherApi();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {weatherData.map((data: any, index: number) => {
        const forecastDays = data?.forecast?.forecastday;

        if (!forecastDays || forecastDays.length < 3) {
          return <p key={index}>Forecast data is incomplete.</p>;
        }

        return (
          <div className="card" key={index} id="threeDayForecast">
            {forecastDays.slice(0, 3).map((day: any, i: number) => (
              <ul key={i}>
                <li>
                  Day {i + 1}: {day?.date || "No date available"}
                </li>
                <li>Condition: {day?.day?.condition?.text || "Unknown"}</li>
                <li>
                  <figure>
                    <img
                      src={
                        day?.day?.condition?.icon || "/default-weather-icon.png"
                      }
                      alt="weather icon"
                    />
                  </figure>
                </li>
              </ul>
            ))}
          </div>
        );
      })}
    </>
  );
};
