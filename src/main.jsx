import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { OrderContextProvider } from "./context/OrderContext.jsx"; 
import { DashboardProvider } from "./context/dashbordContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DashboardProvider>
      <OrderContextProvider>  
        <App />
      </OrderContextProvider>
    </DashboardProvider>
  </BrowserRouter>,
);
