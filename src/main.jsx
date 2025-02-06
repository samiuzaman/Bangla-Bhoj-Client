import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { ToastWrapper } from "keep-react";
import StoreData from "./Context/StoreData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <StoreData>
        <RouterProvider router={routes}></RouterProvider>
      </StoreData>
      <ToastWrapper richColors={true} />
    </HelmetProvider>
  </StrictMode>
);
