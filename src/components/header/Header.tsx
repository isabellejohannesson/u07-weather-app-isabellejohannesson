import "./Header.css";
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
    <header className="p-2 flex flex-row">
      <section className="py-2 px-2">
        <div className="p-2">
          <img src={logo} alt="weather-logo" className="logo"></img>
          <button onClick={toggleTempUnit}>C/F degrees</button>
          <button onClick={toggleDistanceTimeUnit}>Wind unit</button>
        </div>
      </section>
    </header>
  );
}
