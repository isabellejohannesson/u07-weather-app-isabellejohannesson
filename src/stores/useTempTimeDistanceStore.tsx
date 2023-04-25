import { create } from "zustand";
import { produce } from "immer";

const useTempTimeDistanceStore = create((set) => ({
  temperature: { celsius: 0, fahrenheit: 0 },
  setTemperature: (temp: any) =>
    set(
      produce((state) => {
        state.temperature.celsius = temp.celsius;
        state.temperature.fahrenheit = temp.fahrenheit;
      })
    ),
}));

export default useTempTimeDistanceStore;
