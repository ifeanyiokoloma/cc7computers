// This must be the first line in src/index.js
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./components/providers/ModalProvider";
import ShoppingCartProvider from "./components/providers/ShoppingCartProvider";

ReactDOM.render(
  <StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </BrowserRouter>
    </ModalProvider>
  </StrictMode>,
  document.getElementById("root")
);
