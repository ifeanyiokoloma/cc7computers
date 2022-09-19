// This must be the first line in src/index.js
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./components/providers/ModalProvider";
import ShoppingCartProvider from "./components/providers/ShoppingCartProvider";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/Theme";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <ModalProvider>
          <BrowserRouter>
            <ShoppingCartProvider>
              <App />
            </ShoppingCartProvider>
          </BrowserRouter>
        </ModalProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
