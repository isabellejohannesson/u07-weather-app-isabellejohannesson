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
        return (
          <div className="card" key={index} id="threeDayForecast">
            <ul>
              <li key={index}>Today: {data.forecast.forecastday[0].date}</li>
              <li key={index}>
                Condition: {data.forecast.forecastday[0].day.condition.text}.
              </li>
              <li key={index}>
                <figure>
                  <img
                    src={data.forecast.forecastday[0].day.condition.icon}
                    alt="weather icon"
                  ></img>
                </figure>
              </li>
            </ul>
            <ul>
              <li key={index}>Today: {data.forecast.forecastday[1].date}</li>
              <li key={index}>
                Condition: {data.forecast.forecastday[1].day.condition.text}.
              </li>
              <li key={index}>
                <figure>
                  <img
                    src={data.forecast.forecastday[1].day.condition.icon}
                    alt="weather icon"
                  ></img>
                </figure>
              </li>
            </ul>
            <ul>
              <li key={index}>Today: {data.forecast.forecastday[2].date}</li>
              <li key={index}>
                Condition: {data.forecast.forecastday[2].day.condition.text}.
              </li>
              <li key={index}>
                <figure>
                  <img
                    src={data.forecast.forecastday[2].day.condition.icon}
                    alt="weather icon"
                  ></img>
                </figure>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
