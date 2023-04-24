import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { GetLocation } from "./components/getlocation/GetLocation";

import useWeatherApi from "./hooks/useWeatherApi";

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
      humidity: number;
      wind_mph: number;
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
            <div className="card">
              <h2>{data.location.name}</h2>
              <p>{data.location.country}</p>
              <p>{data.location.localtime}</p>
            </div>

            <div>
              <p>Current temperature: {data.current.temp_c} degrees C.</p>
              <p>Air humidity: {data.current.humidity} %.</p>
              <p>Wind: {data.current.wind_mph} mph.</p>
            </div>
          </>
        );
      })}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>

      <DisplayWeather></DisplayWeather>
    </div>
  );
}

export default App;
