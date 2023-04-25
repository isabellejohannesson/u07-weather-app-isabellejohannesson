import "./App.css";

import { Header } from "./components/header/Header";
import { DisplayWeather } from "./components/displayweather/DisplayWeather";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DisplayWeather></DisplayWeather>
    </div>
  );
}

export default App;
