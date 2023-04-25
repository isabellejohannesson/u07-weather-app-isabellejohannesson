import "./App.css";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { DisplayWeather } from "./components/displayweather/DisplayWeather";
import { SearchBar } from "./components/search/SearchBar";

function App() {
  const [tempUnit, setTempUnit] = useState("temp_c");
  const [distanceTimeUnit, setDistanceTimeUnit] = useState("mph");

  return (
    <div className="App">
      <Header
        setTempUnit={setTempUnit}
        setDistanceTimeUnit={setDistanceTimeUnit}
      ></Header>
      <SearchBar></SearchBar>
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
