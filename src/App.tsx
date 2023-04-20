import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

import useWeatherApi from "./hooks/useWeatherApi";

const GetLocation = () => {
  const [status, setStatus] = useState("");
  const [position, setPosition] = useState<any>(undefined);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Loading...");
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setStatus("");
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        setStatus("Unable to retrieve your position");
      }
    );
  };

  return (
    <div>
      <button onClick={() => getLocation()}>Get location</button>
      {status && <p>Status: {status}</p>}
      {position && <p>Your latitude: {position.lat}</p>}
      {position && <p>Your longitude: {position.lng}</p>}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <GetLocation></GetLocation>
    </div>
  );
}

export default App;
