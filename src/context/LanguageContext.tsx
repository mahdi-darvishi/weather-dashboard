import { createContext } from "react";

// Define the shape of the Context value
export interface LanguageContextType {
  currentLanguage: "en" | "fa";
  isRTL: boolean;
  changeLanguage: (lng: "en" | "fa") => void;
}

// Initialize the Context
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
