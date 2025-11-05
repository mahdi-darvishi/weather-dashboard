import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/fonts.css";

import { LanguageProvider } from "./context/LanguageProvider";
import { AppThemeProvider } from "./theme/AppThemeProvider";

import "./i18n"; //
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
