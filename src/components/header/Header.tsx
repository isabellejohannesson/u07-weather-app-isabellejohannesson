import logo from "../../assets/logo.svg";

export function Header(props: any) {
  const toggleTempUnit = () => {
    props.setTempUnit((unit: any) => (unit === "temp_c" ? "temp_f" : "temp_c"));
  };

  const toggleDistanceTimeUnit = () => {
    props.setDistanceTimeUnit((unit: any) =>
      unit === "wind_mph" ? "wind_kph" : "wind_mph"
    );
  };

  return (
    <header>
      <h1>WeatherWise</h1>
      <img src={logo} alt="weather-logo" className="logo"></img>
      <button onClick={toggleTempUnit}>Toggle temperature unit</button>
      <button onClick={toggleDistanceTimeUnit}>Toggle wind unit</button>
    </header>
  );
}
