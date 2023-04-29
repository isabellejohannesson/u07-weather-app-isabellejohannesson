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
    <header className="p-2">
      <section className="py-2 px-2">
        <div className="p-2">
          <button onClick={toggleTempUnit}>C/F degrees</button>
          <button onClick={toggleDistanceTimeUnit}>Wind unit</button>
        </div>
        <img src={logo} alt="weather-logo"></img>
      </section>
    </header>
  );
}
