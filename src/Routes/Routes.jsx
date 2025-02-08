import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

import SpecialMenu from "../components/HomeLayout/SpecialMenu";
import Dashboard from "../Pages/Dashboard";
import Details from "../Pages/Details";
import AllMenu from "../Pages/AllMenu";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <SpecialMenu></SpecialMenu>,
          },
        ],
      },
      {
        path: "/all-menu",
        element: <AllMenu></AllMenu>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default routes;
