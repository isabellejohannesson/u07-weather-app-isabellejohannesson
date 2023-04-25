import logo from "../../assets/logo.svg";

export function Header(props: any) {
  const toggleTempUnit = () => {
    props.setTempUnit((unit: any) => (unit === "temp_c" ? "temp_f" : "temp_c"));
  };

  return (
    <header>
      <h1>WeatherWise</h1>
      <img src={logo} alt="weather-logo" className="logo"></img>
      <button onClick={toggleTempUnit}>Toggle temperature unit</button>
    </header>
  );
}
