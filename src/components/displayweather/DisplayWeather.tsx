import useWeatherApi from "../../hooks/useWeatherApi";
import { useState } from "react";

export function DisplayWeather() {
  interface weatherData {
    location: {
      id: 1;
      name: string;
      country: string;
      localtime: string;
    };
    current: {
      id: 2;
      temp_c: number;
      temp_f: number;
      humidity: number;
      wind_mph: number;
    };
    forecast: {
      forecastday: [
        {
          id: 3;
          date: number;
          day: {
            condition: {
              text: string;
              icon: string;
            };
          };
          astro: any;
          hour: [
            {
              time: number;
              temp_c: number;
              temp_f: number;

              condition: {
                text: string;
                icon: string;
              };
            }
          ];
        }
      ];
    };
  }

  const [weatherData = [], isLoading = false, error = null] = useWeatherApi();
  const [tempUnit, setTempUnit] = useState("temp_c");

  const toggleTempUnit = () => {
    setTempUnit((unit) => (unit === "temp_c" ? "temp_f" : "temp_c"));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {weatherData.map((data: any) => {
        return (
          <>
            <div className="card">
              <h2>{data.location.name}</h2>
              <p>{data.location.country}</p>
              <p>{data.location.localtime}</p>
              <p>
                <p>
                  Current temperature:{" "}
                  {tempUnit === "Celsius"
                    ? data.current.temp_c + " degrees C."
                    : data.current.temp_f + " degrees F."}
                </p>
              </p>
              <button onClick={toggleTempUnit}>Toggle temperature unit</button>
              <p>Today: {data.forecast.forecastday[0].date}</p>
              <p>
                Condition: {data.forecast.forecastday[0].day.condition.text}.
              </p>
              <figure>
                <img
                  src={data.forecast.forecastday[0].day.condition.icon}
                  alt="weather icon"
                ></img>
              </figure>
            </div>

            <div className="card">
              <p>Air humidity: {data.current.humidity} %.</p>
              <p>Wind: {data.current.wind_mph} mph.</p>
              <p>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</p>
              <p>Sunset: {data.forecast.forecastday[0].astro.sunset}</p>
            </div>

            <div className="card">
              {data.forecast.forecastday[0].hour.map((hour: any) => (
                <div key={hour.time}>
                  <p>Time: {hour.time}</p>
                  <p>Temperature: {hour.temp_c} degrees C</p>
                  <p>Condition: {hour.condition.text}</p>
                </div>
              ))}
            </div>
          </>
        );
      })}
    </>
  );
}
