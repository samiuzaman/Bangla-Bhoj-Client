import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { ToastWrapper } from "keep-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes}></RouterProvider>
      <ToastWrapper richColors={true} />
    </HelmetProvider>
  </StrictMode>
);
