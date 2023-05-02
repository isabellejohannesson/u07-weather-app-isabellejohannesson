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
            <div className="flex flex-col justify-center text-stone-300 pt-4">
              <div className="flex flex-col justify-center">
                <p className="font-bold">{data.location.name}</p>
                <h2>
                  {" "}
                  {props.tempUnit === "temp_c"
                    ? data.current.temp_c + " C °."
                    : data.current.temp_f + " F °."}
                </h2>
                <div className="self-center">
                  <figure>
                    <img
                      src={data.forecast.forecastday[0].day.condition.icon}
                      alt="weather icon"
                      className="px-4"
                    ></img>
                  </figure>
                </div>
              </div>

              <h3 className="font-bold">{data.location.country}</h3>
              <p>{data.location.localtime}</p>

              <p>
                Feels like:{" "}
                {props.tempUnit === "temp_c"
                  ? data.current.feelslike_c + " C °."
                  : data.current.feelslike_f + " F °."}
              </p>
              <ul>
                <li key={uuidv4()}>
                  {data.forecast.forecastday[0].day.condition.text}.
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
                  <div className="flex flex-row justify-center">
                    <figure>
                      <img
                        src={data.forecast.forecastday[0].day.condition.icon}
                        alt="weather icon"
                      ></img>
                    </figure>
                  </div>
                  <ul>
                    <li key={uuidv4()}>{data.forecast.forecastday[0].date}</li>
                    <li key={uuidv4()}>
                      {" "}
                      {data.forecast.forecastday[0].day.condition.text}.
                    </li>
                    <li key={uuidv4()}>
                      Sunrise: {data.forecast.forecastday[0].astro.sunrise}
                    </li>
                    <li key={uuidv4()}>
                      Sunset: {data.forecast.forecastday[0].astro.sunset}
                    </li>
                  </ul>
                  <div className="flex flex-row justify-center">
                    <figure>
                      <img
                        src={data.forecast.forecastday[1].day.condition.icon}
                        alt="weather icon"
                      ></img>
                    </figure>
                  </div>
                  <ul>
                    <li key={uuidv4()}>{data.forecast.forecastday[1].date}</li>
                    <li key={uuidv4()}>
                      {" "}
                      {data.forecast.forecastday[1].day.condition.text}.
                    </li>
                    <li key={uuidv4()}>
                      Sunrise: {data.forecast.forecastday[1].astro.sunrise}
                    </li>
                    <li key={uuidv4()}>
                      Sunset: {data.forecast.forecastday[1].astro.sunset}
                    </li>
                  </ul>
                  <div className="flex flex-row justify-center">
                    <figure>
                      <img
                        src={data.forecast.forecastday[2].day.condition.icon}
                        alt="weather icon"
                      ></img>
                    </figure>
                  </div>
                  <ul>
                    <li key={uuidv4()}>{data.forecast.forecastday[2].date}</li>
                    <li key={uuidv4()}>
                      {" "}
                      {data.forecast.forecastday[2].day.condition.text}.
                    </li>
                    <li key={uuidv4()}>
                      Sunrise: {data.forecast.forecastday[2].astro.sunrise}
                    </li>
                    <li key={uuidv4()}>
                      Sunset: {data.forecast.forecastday[2].astro.sunset}
                    </li>
                  </ul>
                </>
              )}
            </div>
            <div className="py-4">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => setShowWholeForecast(!showWholeForecast)}
              >
                {showWholeForecast
                  ? "Hide forecast"
                  : "See forecast for three days"}
              </button>
            </div>

            <div className="flex flex-wrap max-w-full py-4" id="hourly">
              {data.forecast.forecastday[0].hour.map((hour: any) => (
                <div className="flex-none w-1/3 md:w-1/5 md:pb-4 justify-center mx-auto text-xs py-4">
                  <ul className="hourly-column">
                    <li className="font-bold text-md" key={uuidv4()}>
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
                        ? hour.temp_c + " C °."
                        : hour.temp_f + " F °."}{" "}
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
