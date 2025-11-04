import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { LanguageProvider } from "./context/LanguageProvider";
import { AppThemeProvider } from "./theme/AppThemeProvider";

import "./i18n"; //

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
