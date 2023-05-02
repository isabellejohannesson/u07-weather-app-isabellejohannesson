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
        <Link to="settings">Set your coordinates</Link>
        <hr></hr>

        <App></App>
      </>
    ),
  },

  {
    path: "settings",
    element: (
      <>
        <Link to="/">Back to weather</Link>
        <hr />
        <GetLocation></GetLocation>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
