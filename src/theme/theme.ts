import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface GradientOptions {
    main?: string;
    border?: string;
    line?: string;
  }
  interface ThemeOptions {
    gradients?: GradientOptions;
  }
  interface Theme {
    gradients: GradientOptions;
  }

  interface TypeBackground {
    panel?: string;
    secondary?: string;
    card?: string;
  }
  interface TypeBackgroundOptions {
    panel?: string;
    secondary?: string;
    card?: string;
  }
}

const primary = {
  50: "#EEFAFF",
  100: "#CFEDFA",
  200: "#98D8F1",
  300: "#57C0E9",
  400: "#19ABE4",
  500: "#009CD8",
  600: "#0F6FA6",
  700: "#10598E",
  800: "#074979",
  900: "#003464",
  A100: "#82F8FF",
  A200: "#44DDFF",
  A400: "#29B2FF",
  A700: "#298BFF",
};
const error = {
  50: "#FFEBEE",
  100: "#FFCDD2",
  200: "#EF9A9A",
  300: "#E57373",
  400: "#EF5350",
  500: "#F44336",
  600: "#E53935",
  700: "#D32F2F",
  800: "#C62828",
  900: "#B71C1C",
  A100: "#FF8A80",
  A200: "#FF5252",
  A400: "#FF1744",
  A700: "#D50000",
};

const warning = {
  50: "#FFF3E0",
  100: "#FFE0B2",
  200: "#FFCC80",
  300: "#FFB74D",
  400: "#FFA726",
  500: "#FF9800",
  600: "#FB8C00",
  700: "#F57C00",
  800: "#EF6C00",
  900: "#E65100",
  A100: "#FFD180",
  A200: "#FFAB40",
  A400: "#FF9100",
  A700: "#FF6D00",
};

const success = {
  50: "#E8F5E9",
  100: "#C8E6C9",
  200: "#A5D6A7",
  300: "#81C784",
  400: "#66BB6A",
  500: "#4CAF50",
  600: "#43A047",
  700: "#388E3C",
  800: "#2E7D32",
  900: "#1B5E20",
  A100: "#B9F6CA",
  A200: "#69F0AE",
  A400: "#00E676",
  A700: "#00C853",
};

const info = {
  50: "#E3F2FD",
  100: "#BBDEFB",
  200: "#90CAF9",
  300: "#64B5F6",
  400: "#42A5F5",
  500: "#2196F3",
  600: "#1E88E5",
  700: "#1976D2",
  800: "#1565C0",
  900: "#0D47A1",
  A100: "#82B1FF",
  A200: "#448AFF",
  A400: "#2979FF",
  A700: "#2962FF",
};

const surface = {
  50: "#FFFFFF",
  100: "#F5F9FC",
  200: "#E1E9EE",
  300: "#CDD9E0",
  400: "#AFBCC4",
  500: "#8895A0",
  600: "#62707C",
  700: "#3D4852",
  800: "#25262E",
  900: "#1C1B22",
  A100: "#96AAB5",
  A200: "#3F6A81",
  A400: "#373E46",
  A700: "#0C0C0C",
};

const grey = {
  50: "#F3FAFE",
  100: "#F3F3F3",
  200: "#F3F4F7",
  250: "#757575",
  300: "#BBC1C4",
  500: "#8895A0",
  550: "#3F4861",
  600: "#292F45",
  700: "#151D32",
  A400: "#373E46",
};

const black = "#000000";
// ----------------------------------------------------
// 2. Base Theme Configuration
// ----------------------------------------------------
const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      "IRANYekan",
      "Google Sans",
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: ["Google Sans", "Inter", "IRANYekan", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Inter", "IRANYekan", "sans-serif"].join(","),
      fontWeight: 600,
    },
  },
};

// ----------------------------------------------------
// 3. Light Theme Definition
// ----------------------------------------------------

export const lightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "light",
    primary: primary,
    secondary: surface,
    error: error,
    warning: warning,
    success: success,
    info: info,
    grey: grey,
    background: {
      default: grey[50],
      paper: grey[50],
      panel: surface[50],
      secondary: surface[200],
      card: surface[300],
    },
    text: {
      primary: primary[900],
      secondary: black,
      disabled: surface[400],
    },
  },

  gradients: {
    main: "linear-gradient(90deg, #F3FAFE 0%, rgba(204, 221, 221, 0.619608) 51%, #F3FAFE 100%)",

    border:
      "linear-gradient(90deg, rgba(54, 54, 54, 0) 0%, #7E7E7E 48.5%, rgba(54, 54, 54, 0) 100%)",

    line: "linear-gradient(90deg, #4CDFE8 -0.58%, #7947F7 101.51%)",
  },
});

// ----------------------------------------------------
// 4. Dark Theme Definition
// ----------------------------------------------------

export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "dark",
    primary: primary,
    secondary: grey,
    error: error,
    warning: warning,
    success: success,
    info: info,
    grey: grey,

    background: {
      default: grey[700],
      paper: grey[700],
      panel: grey[600],
      secondary: grey[600],
      card: grey[550],
    },

    text: {
      primary: grey[200],
      secondary: grey[200],
      disabled: grey[500],
    },
  },

  gradients: {
    main: "linear-gradient(90deg, #292F45 0%, #3F4861 50.5%, #151D32 98%)",
    border:
      "linear-gradient(90deg, rgba(54, 54, 54, 0) 0%, #7E7E7E 48.5%, rgba(54, 54, 54, 0) 100%)",

    line: "linear-gradient(90deg, #4CDFE8 -0.58%, #7947F7 101.51%)",
  },
});
