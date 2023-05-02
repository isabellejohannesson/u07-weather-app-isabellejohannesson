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
    <>
      <header className="p-2 flex flex-row justify-end">
        <section className="py-2 px-4 absolute top-0 left-0">
          <img src={logo} alt="weather-logo" className="logo"></img>
        </section>
        <div className="p-2 justify-center flex flex-col text-sm">
          <button
            className="text-stone-300 font-semibold hover:text-teal-300"
            onClick={toggleTempUnit}
          >
            C/F °
          </button>
          <button
            className="text-stone-300 font-semibold hover:text-teal-300"
            onClick={toggleDistanceTimeUnit}
          >
            Wind unit
          </button>
        </div>
      </header>
    </>
  );
}
