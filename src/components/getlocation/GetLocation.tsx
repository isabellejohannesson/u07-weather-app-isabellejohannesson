import { useState, useEffect } from "react";
import useLocationStore from "../../stores/useLocationStore";

interface GetLocationProps {
  handleGetLocationUsed: () => void;
}

export const GetLocation = ({ handleGetLocationUsed }: GetLocationProps) => {
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
        handleGetLocationUsed();
      },
      () => {
        setStatus("Unable to retrieve your position");
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <button onClick={() => getLocation()}>Get location</button>
      {status && <p>Status: {status}</p>}
      {position && <p>Your latitude: {position.lat}</p>}
      {position && <p>Your longitude: {position.lng}</p>}
    </div>
  );
};
