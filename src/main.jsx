import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import store from "./store/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import ToastProvider from "./components/ui/ToastProvider/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>

      {/* Global Overlays  */}
      <ToastProvider />
    </BrowserRouter>
  </Provider>
);
