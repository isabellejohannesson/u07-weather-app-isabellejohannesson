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
      {weatherData.map((data: any) => {
        return (
          <>
            <div className="card" id="alert">
              {data.alerts.alert.length > 0 ? (
                <ul>
                  <h3 className="text-red-600 text-xl">Weather alert:</h3>
                  {data.alerts.alert.map((alert: any) => (
                    <li key={uuidv4()}>
                      {alert.headline} ({alert.category}): {alert.desc}{" "}
                      {alert.effective} {alert.expires}
                    </li>
                  ))}
                </ul>
              ) : (
                "No active weather alerts"
              )}
            </div>
            <div className="card" id="summaryWeather">
              <div className="flex flex-row justify-center">
                <h2>{data.location.name}</h2>
                <figure>
                  <img
                    src={data.forecast.forecastday[0].day.condition.icon}
                    alt="weather icon"
                    className="px-4"
                  ></img>
                </figure>
              </div>

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
              <ul>
                <li key={uuidv4()}>
                  Today: {data.forecast.forecastday[0].date}
                </li>
                <li key={uuidv4()}>
                  Condition: {data.forecast.forecastday[0].day.condition.text}.
                </li>
                <li key={uuidv4()}></li>
              </ul>
              <div className="p-6">
                <ul>
                  <li key={uuidv4()}>
                    Air humidity: {data.current.humidity} %.
                  </li>
                  <li key={uuidv4()}>
                    Wind:{" "}
                    {props.distanceTimeUnit === "wind_mph"
                      ? data.current.wind_mph + " miles per hour."
                      : data.current.wind_kph + " kilometers per hour."}
                  </li>
                  <li key={uuidv4()}>
                    Sunrise: {data.forecast.forecastday[0].astro.sunrise}
                  </li>
                  <li key={uuidv4()}>
                    Sunset: {data.forecast.forecastday[0].astro.sunset}
                  </li>
                </ul>
              </div>
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

            <div
              className="flex flex-wrap max-w-full bg-stone-300 rounded-md"
              id="hourly"
            >
              {data.forecast.forecastday[0].hour.map((hour: any) => (
                <div className="flex-none w-2/3 md:w-1/5 md:pb-4 justify-center mx-auto text-xs">
                  <ul className="hourly-column">
                    <li className="font-bold" key={uuidv4()}>
                      {hour.condition.text}
                    </li>
                    <li key={uuidv4()}>
                      <figure>
                        <img src={hour.condition.icon} alt="weather icon"></img>
                      </figure>
                    </li>
                    <li key={uuidv4()}>{hour.time}</li>
                    <li key={uuidv4()}>
                      {" "}
                      {props.tempUnit === "temp_c"
                        ? hour.temp_c + " degrees C."
                        : hour.temp_f + " degrees F."}{" "}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        );
      })}
    </>
  );
}
