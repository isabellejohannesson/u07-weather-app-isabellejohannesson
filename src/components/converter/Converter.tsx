import { useState } from "react";
import useTempTimeDistanceStore from "../../stores/useTempTimeDistanceStore";

export const Converter = () => {
  const [tempUnit, setTempUnit] = useState("temp_c");
  /* const [distanceTimeUnit, setDistanceTimeUnit] = useState("mph"); */

  const toggleUnits = () => {
    setTempUnit((unit) => (unit === "temp_c" ? "temp_f" : "temp_c"));
  };

  /* function convertDistanceTime(distanceTimeUnit: any) {
    if (distanceTimeUnit === "mph") {
      return distanceTimeUnit * 0.44704;
    } else {
      return distanceTimeUnit;
    }
  } */

  return (
    <>
      <button onClick={toggleUnits}>{tempUnit === "temp_c" ? "C" : "F"}</button>
    </>
  );
};
