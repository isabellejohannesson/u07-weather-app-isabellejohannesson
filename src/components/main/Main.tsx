import useWeatherApi from "../../hooks/useWeatherApi";

export function Main() {
  interface weatherData {
    location: {
      name: string;
      country: string;
      localtime: string;
    };
    current: {
      temp_c: number;
      humidity: number;
      wind_mph: number;
    };
  }

  const [weatherData = [], isLoading = false, error = null] = useWeatherApi();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {weatherData.map((data: any) => {
        return (
          <>
            <div className="card">
              <h2>{data.location.name}</h2>
              <p>{data.location.country}</p>
              <p>{data.location.localtime}</p>
            </div>

            <ul>
              <li>Current temperature: {data.current.temp_c} degrees C.</li>
              <li>Air humidity: {data.current.humidity} %.</li>
              <li>Wind: {data.current.wind_mph} mph.</li>
            </ul>
          </>
        );
      })}
    </>
  );
}
