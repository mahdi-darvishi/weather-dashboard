import { useState, type ReactNode } from "react";
import { LocationContext } from "../hooks/useLocation";
import type { LocationOption } from "../types";
import { locationsList } from "../data/lcoation";

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationOption | null>(locationsList[32] || null);

  const setLocation = (location: LocationOption | null) => {
    setSelectedLocation(location);
  };

  return (
    <LocationContext.Provider value={{ selectedLocation, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
