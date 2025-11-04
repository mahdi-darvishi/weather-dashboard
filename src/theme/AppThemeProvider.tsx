import React, { useState, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
// 👇 ایمپورت Context از فایل جدید
import { ThemeContext } from "./ThemeContext";

// ----------------------------------------------------
// 1. Types and Provider Component
// ----------------------------------------------------

interface ThemeProviderProps {
  children: ReactNode;
}

// این کامپوننت تنها Export اصلی این فایل است.
export const AppThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  // Logic remains the same (localStorage check and state)
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const savedMode = localStorage.getItem("themeMode") as
      | "light"
      | "dark"
      | null;
    if (savedMode) {
      return savedMode;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
    }),
    [mode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
