import "./App.css";
import { WeatherApi } from "./API/WeatherAPI";
import { Header } from "./header/Header";

function App() {
  return (
    <div className="App">
      <WeatherApi></WeatherApi>
      <Header></Header>
    </div>
  );
}

export default App;
