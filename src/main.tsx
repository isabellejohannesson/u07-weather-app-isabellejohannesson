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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="geo">Set profile info</Link>
        <hr />
        <App></App>
      </>
    ),
  },
  {
    path: "geo",
    element: (
      <>
        <Link to="/">Search weather</Link>
        <hr />
        <GetLocation></GetLocation>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
