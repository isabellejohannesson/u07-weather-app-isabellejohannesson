import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <h1>WeatherWise</h1>
      <img src={logo} alt="weather-logo" className="logo"></img>
    </header>
  );
}
