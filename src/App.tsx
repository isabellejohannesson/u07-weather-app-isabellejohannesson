import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { GetLocation } from "./components/getlocation/GetLocation";

import useWeatherApi from "./hooks/useWeatherApi";

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
