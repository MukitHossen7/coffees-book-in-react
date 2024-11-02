import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Coffees from "../pages/Coffees/Coffees";
import DashBoard from "../pages/DashBoard/DashBoard";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/categories/:categories",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
        ],
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
      {
        path: "/details/:coffeeId",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch("../coffees.json"),
      },
    ],
  },
]);

export default router;
