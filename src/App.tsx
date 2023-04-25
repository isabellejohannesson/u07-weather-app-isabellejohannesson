import "./App.css";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { DisplayWeather } from "./components/displayweather/DisplayWeather";

function App() {
  const [tempUnit, setTempUnit] = useState("temp_c");
  const [distanceTimeUnit, setDistanceTimeUnit] = useState("mph");

  return (
    <div className="App">
      <Header
        setTempUnit={setTempUnit}
        setDistanceTimeUnit={setDistanceTimeUnit}
      ></Header>
      <DisplayWeather
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
        distanceTimeUnit={distanceTimeUnit}
        setDistanceTimeUnit={setDistanceTimeUnit}
      ></DisplayWeather>
    </div>
  );
}

export default App;
