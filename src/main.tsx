import React from "react";
import ReactDOM from "react-dom/client";
import App from "app/App.tsx";
import "@/main.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Не найден элемент с id 'root'.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);