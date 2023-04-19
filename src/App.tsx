import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

import useWeatherApi from "./hooks/useWeatherApi";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
