import "./App.css";
import { useState, useEffect } from "react";

import { Header } from "./components/header/Header";
import { DisplayWeather } from "./components/displayweather/DisplayWeather";
import { SearchBar } from "./components/search/SearchBar";
import { GetLocation } from "./components/getlocation/GetLocation";

function App() {
  const [tempUnit, setTempUnit] = useState("temp_c");
  const [distanceTimeUnit, setDistanceTimeUnit] = useState("mph");

  return (
    <div>
      <section className="App">
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
      </section>
    </div>
  );
}

export default App;
