import logo from "../assets/logo.svg";

export function Header() {
  return (
    <div>
      <h1>Weather app</h1>
      <img src={logo} alt="weather-logo" className="logo"></img>
    </div>
  );
}
