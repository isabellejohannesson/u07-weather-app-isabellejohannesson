import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { GetLocation } from "./components/getlocation/GetLocation";
import { WholeForecast } from "./components/wholeforecast/WholeForecast";
import { DisplayWeather } from "./components/displayweather/DisplayWeather";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="settings">Set profile info</Link>
        <hr />
        <Link to="forecast">See forecast for coming three days</Link>
        <App></App>
      </>
    ),
  },
  {
    path: "displayweather",
    element: (
      <>
        <Link to="forecast">See forecast for coming three days</Link>
        <DisplayWeather></DisplayWeather>
      </>
    ),
  },
  {
    path: "settings",
    element: (
      <>
        <Link to="/">Search weather</Link>
        <hr />
        <GetLocation></GetLocation>
      </>
    ),
  },
  {
    path: "forecast",
    element: (
      <>
        <Link
          style={{ color: "black", fontSize: "5em", textDecoration: "none" }}
          to="/"
        >
          Home
        </Link>
        <hr />
        <WholeForecast></WholeForecast>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
