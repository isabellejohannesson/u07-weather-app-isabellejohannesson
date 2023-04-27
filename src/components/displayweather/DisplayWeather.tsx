import useWeatherApi from "../../hooks/useWeatherApi";
import { useState } from "react";
import { WholeForecast } from "../wholeforecast/WholeForecast";
import useLocationStore from "../../stores/useLocationStore";
import { v4 as uuidv4 } from "uuid";

export function DisplayWeather(props: any) {
  const [showWholeForecast, setShowWholeForecast] = useState(false);

  interface weatherData {
    alerts: {
      alert: [];
    };

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
      wind_kph: number;
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
          <>
            <div className="card" id="alert">
              {data.alerts.alert.length > 0 ? (
                <ul>
                  {data.alerts.alert.map((alert: any, index: number) => (
                    <li key={uuidv4()}>
                      {alert.headline} ({alert.category}): {alert.desc}{" "}
                      {alert.effective} {alert.expires}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="card" id="summaryWeather">
              <h2>{data.location.name}</h2>
              <h3>{data.location.country}</h3>
              <p>{data.location.localtime}</p>

              <p>
                Current temperature:{" "}
                {props.tempUnit === "temp_c"
                  ? data.current.temp_c + " degrees C."
                  : data.current.temp_f + " degrees F."}
              </p>
              <p>
                Feels like:{" "}
                {props.tempUnit === "temp_c"
                  ? data.current.feelslike_c + " degrees C."
                  : data.current.feelslike_f + " degrees F."}
              </p>
            </div>

            <div className="card" id="forecast">
              <ul>
                <li key={uuidv4()}>
                  Today: {data.forecast.forecastday[0].date}
                </li>
                <li key={uuidv4()}>
                  Condition: {data.forecast.forecastday[0].day.condition.text}.
                </li>
                <li key={uuidv4()}>
                  <figure>
                    <img
                      src={data.forecast.forecastday[0].day.condition.icon}
                      alt="weather icon"
                    ></img>
                  </figure>
                </li>
              </ul>
            </div>

            <div
              className={showWholeForecast ? "card threedayforecast" : "card"}
            >
              {showWholeForecast && (
                <>
                  <h2>{data.location.name}</h2>
                  <ul>
                    <li key={uuidv4()}>
                      Today: {data.forecast.forecastday[0].date}
                    </li>
                    <li key={uuidv4()}>
                      Condition:{" "}
                      {data.forecast.forecastday[0].day.condition.text}.
                    </li>
                    <li key={uuidv4()}>
                      <figure>
                        <img
                          src={data.forecast.forecastday[0].day.condition.icon}
                          alt="weather icon"
                        ></img>
                      </figure>
                    </li>
                  </ul>
                  <ul>
                    <li key={uuidv4()}>
                      Today: {data.forecast.forecastday[1].date}
                    </li>
                    <li key={uuidv4()}>
                      Condition:{" "}
                      {data.forecast.forecastday[1].day.condition.text}.
                    </li>
                    <li key={uuidv4()}>
                      <figure>
                        <img
                          src={data.forecast.forecastday[1].day.condition.icon}
                          alt="weather icon"
                        ></img>
                      </figure>
                    </li>
                  </ul>
                  <ul>
                    <li key={uuidv4()}>
                      Today: {data.forecast.forecastday[2].date}
                    </li>
                    <li key={uuidv4()}>
                      Condition:{" "}
                      {data.forecast.forecastday[2].day.condition.text}.
                    </li>
                    <li key={uuidv4()}>
                      <figure>
                        <img
                          src={data.forecast.forecastday[2].day.condition.icon}
                          alt="weather icon"
                        ></img>
                      </figure>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowWholeForecast(!showWholeForecast)}
            >
              {showWholeForecast
                ? "Hide forecast"
                : "See forecast for three days"}
            </button>

            <div className="card">
              <p>Air humidity: {data.current.humidity} %.</p>
              <p>
                Wind:{" "}
                {props.distanceTimeUnit === "wind_mph"
                  ? data.current.wind_mph + " miles per hour."
                  : data.current.wind_kph + " kilometers per hour."}
              </p>
              <p>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</p>
              <p>Sunset: {data.forecast.forecastday[0].astro.sunset}</p>
            </div>

            <div className="card" id="hourly">
              {data.forecast.forecastday[0].hour.map((hour: any) => (
                <div key={hour.time}>
                  <h3>Time: {hour.time}</h3>
                  <p>
                    Temperature:{" "}
                    {props.tempUnit === "temp_c"
                      ? hour.temp_c + " degrees C."
                      : hour.temp_f + " degrees F."}{" "}
                  </p>
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
