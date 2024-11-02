import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Coffees from "../pages/Coffees/Coffees";
import DashBoard from "../pages/DashBoard/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashBoard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

export default router;
