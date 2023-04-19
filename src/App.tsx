import "./App.css";
import { WeatherApi } from "./API/WeatherAPI";
import { Header } from "./header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <WeatherApi></WeatherApi>
    </div>
  );
}

export default App;
