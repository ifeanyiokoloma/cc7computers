// This must be the first line in src/index.js
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./components/providers/ModalProvider";
import ShoppingCartProvider from "./components/providers/ShoppingCartProvider";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <StrictMode>
    <SnackbarProvider>
      <ModalProvider>
        <BrowserRouter>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </BrowserRouter>
      </ModalProvider>
    </SnackbarProvider>
  </StrictMode>,
  document.getElementById("root")
);
