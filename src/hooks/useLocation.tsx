import { createContext, useContext } from "react";
import type { LocationOption } from "../types";

export interface LocationContextType {
  selectedLocation: LocationOption | null;
  setLocation: (location: LocationOption | null) => void;
}

export const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
