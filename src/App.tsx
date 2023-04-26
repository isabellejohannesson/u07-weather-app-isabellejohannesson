import "./App.css";
import { useState, useEffect } from "react";

import { Header } from "./components/header/Header";
import { DisplayWeather } from "./components/displayweather/DisplayWeather";
import { SearchBar } from "./components/search/SearchBar";
import { GetLocation } from "./components/getlocation/GetLocation";

function App() {
  const [tempUnit, setTempUnit] = useState("temp_c");
  const [distanceTimeUnit, setDistanceTimeUnit] = useState("mph");
  const [getLocationUsed, setGetLocationUsed] = useState(false);

  const handleGetLocationUsed = () => {
    setGetLocationUsed(true);
  };

  return (
    <div className="App">
      <Header
        setTempUnit={setTempUnit}
        setDistanceTimeUnit={setDistanceTimeUnit}
      ></Header>
      <GetLocation handleGetLocationUsed={handleGetLocationUsed}></GetLocation>
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
