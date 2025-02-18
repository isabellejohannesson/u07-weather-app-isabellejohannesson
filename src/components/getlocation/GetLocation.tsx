import { useState, useEffect } from "react";
import useLocationStore from "../../stores/useLocationStore";

export const GetLocation = () => {
  const [status, setStatus] = useState("");
  const [position, setPosition] = useLocationStore((state: any) => [
    state.position,
    state.setPosition,
  ]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Loading...");
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setStatus("");
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        setStatus("Unable to retrieve your position");
      }
    );
  };

  /*   useEffect(() => {
    getLocation();
  }, []);
 */
  return (
    <div className="py-6 text-stone-300">
      <button onClick={() => getLocation()}>Set coordinates</button>
      {status && <p className="p-4">Status: {status}</p>}
      {position && <p className="p-4">Your latitude: {position?.lat}</p>}
      {position && <p>Your longitude: {position?.lng}</p>}
    </div>
  );
};
