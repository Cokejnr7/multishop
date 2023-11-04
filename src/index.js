import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import NavigationProvider from "./context/navigation";

const el = document.querySelector("#root");
const root = createRoot(el);
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
