import useWeatherApi from "../../hooks/useWeatherApi";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function DisplayWeather(props: any) {
  const [showWholeForecast, setShowWholeForecast] = useState(false);

  const [weatherData = [], isLoading = false, error = null] = useWeatherApi();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {weatherData?.map((data: any) => {
        return (
          <div key={uuidv4()}>
            {/* Weather Alerts */}
            <div className="card" id="alert">
              {data?.alerts?.alert?.length > 0 ? (
                <ul>
                  <h3 className="text-red-600 text-xl">Weather alert:</h3>
                  {data.alerts.alert.map((alert: any) => (
                    <li key={uuidv4()}>
                      {alert?.headline} ({alert?.category}): {alert?.desc}{" "}
                      {alert?.effective} {alert?.expires}
                    </li>
                  ))}
                </ul>
              ) : (
                "No active weather alerts"
              )}
            </div>

            {/* Current Weather */}
            <div className="flex flex-col justify-center text-stone-300 pt-4">
              <div className="flex flex-col justify-center">
                <p className="font-bold">
                  {data?.location?.name || "Unknown Location"}
                </p>
                <h2>
                  {props.tempUnit === "temp_c"
                    ? `${data?.current?.temp_c ?? "N/A"} C°`
                    : `${data?.current?.temp_f ?? "N/A"} F°`}
                </h2>
                <div className="self-center">
                  <figure>
                    <img
                      src={
                        data?.forecast?.forecastday?.[0]?.day?.condition
                          ?.icon || ""
                      }
                      alt="weather icon"
                      className="px-4"
                    />
                  </figure>
                </div>
              </div>

              <h3 className="font-bold">
                {data?.location?.country || "Unknown Country"}
              </h3>
              <p>{data?.location?.localtime || "Unknown Time"}</p>

              <p>
                Feels like:{" "}
                {props.tempUnit === "temp_c"
                  ? `${data?.current?.feelslike_c ?? "N/A"} C°`
                  : `${data?.current?.feelslike_f ?? "N/A"} F°`}
              </p>

              {/* Additional Weather Data */}
              <div className="p-6">
                <ul>
                  <li key={uuidv4()}>
                    Air humidity: {data?.current?.humidity ?? "N/A"}%
                  </li>
                  <li key={uuidv4()}>
                    Wind:{" "}
                    {props.distanceTimeUnit === "wind_mph"
                      ? `${data?.current?.wind_mph ?? "N/A"} miles per hour`
                      : `${
                          data?.current?.wind_kph ?? "N/A"
                        } kilometers per hour`}
                  </li>
                  <li key={uuidv4()}>
                    Sunrise:{" "}
                    {data?.forecast?.forecastday?.[0]?.astro?.sunrise || "N/A"}
                  </li>
                  <li key={uuidv4()}>
                    Sunset:{" "}
                    {data?.forecast?.forecastday?.[0]?.astro?.sunset || "N/A"}
                  </li>
                </ul>
              </div>
            </div>

            {/* Three-Day Forecast Toggle */}
            <div
              className={showWholeForecast ? "card threedayforecast" : "card"}
            >
              {showWholeForecast && (
                <>
                  {[0, 1, 2].map((index) => (
                    <div key={uuidv4()}>
                      <div className="flex flex-row justify-center">
                        <figure>
                          <img
                            src={
                              data?.forecast?.forecastday?.[index]?.day
                                ?.condition?.icon || ""
                            }
                            alt="weather icon"
                          />
                        </figure>
                      </div>
                      <ul>
                        <li key={uuidv4()}>
                          {data?.forecast?.forecastday?.[index]?.date || "N/A"}
                        </li>
                        <li key={uuidv4()}>
                          {data?.forecast?.forecastday?.[index]?.day?.condition
                            ?.text || "N/A"}
                        </li>
                        <li key={uuidv4()}>
                          Sunrise:{" "}
                          {data?.forecast?.forecastday?.[index]?.astro
                            ?.sunrise || "N/A"}
                        </li>
                        <li key={uuidv4()}>
                          Sunset:{" "}
                          {data?.forecast?.forecastday?.[index]?.astro
                            ?.sunset || "N/A"}
                        </li>
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Toggle Button */}
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

            {/* Hourly Forecast */}
            <div className="flex flex-wrap max-w-full py-4" id="hourly">
              {data?.forecast?.forecastday?.[0]?.hour?.map((hour: any) => (
                <div
                  key={uuidv4()}
                  className="flex-none w-1/3 md:w-1/5 md:pb-4 justify-center mx-auto text-xs py-4"
                >
                  <ul className="hourly-column">
                    <li className="font-bold text-md">
                      {hour?.condition?.text || "N/A"}
                    </li>
                    <li key={uuidv4()}>
                      <figure>
                        <img
                          src={hour?.condition?.icon || ""}
                          alt="weather icon"
                        />
                      </figure>
                    </li>
                    <li key={uuidv4()}>{hour?.time || "N/A"}</li>
                    <li key={uuidv4()}>
                      {props.tempUnit === "temp_c"
                        ? `${hour?.temp_c ?? "N/A"} C°`
                        : `${hour?.temp_f ?? "N/A"} F°`}
                    </li>
                  </ul>
                </div>
              )) || <p>No hourly forecast available.</p>}
            </div>
          </div>
        );
      })}
    </>
  );
}
