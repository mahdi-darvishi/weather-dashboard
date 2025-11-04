// src/theme/theme.ts

import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

// ----------------------------------------------------
// 1. Base Theme Configuration
// ----------------------------------------------------
// Define base options shared between Light and Dark themes
const baseThemeOptions: ThemeOptions = {
  // Define the complex font stack based on project requirements.
  // IRANYekan is primary for Farsi/RTL, followed by Latin fonts.
  typography: {
    fontFamily: [
      "IRANYekan", // 1. Primary Persian Font
      "Google Sans", // 2. Specific font for bold/headlines (if globally available)
      "Inter", // 3. Primary Latin font
      "Roboto", // 4. Secondary Latin font / MUI default
      "Arial", // 5. Fallback
      "sans-serif",
    ].join(","),

    // We can override specific elements for better visual hierarchy:
    h1: {
      // Use Google Sans/Inter for a distinct headline look
      fontFamily: ["Google Sans", "Inter", "IRANYekan", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Inter", "IRANYekan", "sans-serif"].join(","),
      fontWeight: 600,
    },
    // Body text uses the default stack, ensuring IRANYekan for Persian content.
  },

  // ... (rest of baseThemeOptions, lightTheme, and darkTheme remain the same)
};

// ... (lightTheme and darkTheme definitions remain unchanged)

// ----------------------------------------------------
// 2. Light Theme Definition (Applying Light Palette)
// ----------------------------------------------------

export const lightTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "light",

    // Primary Color: TSL Blue 500 (#009CD8) from the palette
    primary: {
      main: "#009CD8",
    },
    // Secondary Color: Using TSL Blue 400 (#1059AE) as a related highlight color
    secondary: {
      main: "#1059AE",
    },

    // Status Colors from the palette
    error: {
      main: "#F44336", // Error Red 500
    },
    warning: {
      main: "#FF9800", // Warning Orange 500
    },
    success: {
      main: "#4CAF50", // Success Green 500
    },
    info: {
      main: "#2196F3", // Info Blue 500
    },

    // Background Colors from the Surface palette (Light Mode)
    background: {
      // Absolute white for the main page background
      default: "#FFFFFF",
      // Absolute white for cards and paper elements
      paper: "#FFFFFF",
    },

    // Text Colors from the Surface palette (Darker text for light background)
    text: {
      // Dark text for primary content (Surface 800)
      primary: "#25252E",
      // Lighter dark text for secondary content (Surface 600)
      secondary: "#62707C",
    },
  },
});

// ----------------------------------------------------
// 3. Dark Theme Definition (Applying Dark Palette)
// ----------------------------------------------------

export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: "dark",

    // Primary Color: TSL Blue 500 (#009CD8) - kept consistent for branding
    primary: {
      main: "#009CD8",
    },
    // Secondary Color: TSL Blue 400
    secondary: {
      main: "#1059AE",
    },

    // Status Colors from the palette (consistent with light theme)
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FF9800",
    },
    success: {
      main: "#4CAF50",
    },
    info: {
      main: "#2196F3",
    },

    // Background Colors from the Surface palette (Dark Mode)
    background: {
      // Dark background (Surface Dark 800)
      default: "#25252E",
      // Slightly lighter dark for cards (Surface Dark 700)
      paper: "#304B52",
    },

    // Text Colors for Dark background (Lighter text)
    text: {
      // White text for primary content
      primary: "#FFFFFF",
      // Light gray text for secondary content (Surface Light 200)
      secondary: "#CDD9E0",
    },
  },
});
