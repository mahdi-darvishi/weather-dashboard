// src/components/LocationSelector.tsx

import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
const locations = [
  { id: "sf", name: "San Francisco" },
  { id: "ny", name: "New York" },
  { id: "teh", name: "Tehran" },
  { id: "ldn", name: "London" },
  { id: "par", name: "Paris" },
  { id: "tok", name: "Tokyo" },
  { id: "syd", name: "Sydney" },
  { id: "ber", name: "Berlin" },
  { id: "mos", name: "Moscow" },
  { id: "dub", name: "Dubai" },
  { id: "rom", name: "Rome" },
  { id: "mad", name: "Madrid" },
  { id: "tor", name: "Toronto" },
  { id: "msc", name: "Muscat" },
  { id: "rio", name: "Rio de Janeiro" },
  { id: "cai", name: "Cairo" },
  { id: "bjs", name: "Beijing" },
  { id: "del", name: "Delhi" },
  { id: "mex", name: "Mexico City" },
  { id: "ist", name: "Istanbul" },
];

interface LocationOption {
  id: string;
  name: string;
}

export const LocationSelector: React.FC = () => {
  const { t } = useTranslation();

  const [selectedLocation, setSelectedLocation] =
    useState<LocationOption | null>(locations[2] || null);

  return (
    <Autocomplete
      options={locations}
      getOptionLabel={(option) => option.name}
      value={selectedLocation}
      onChange={(event, newValue: LocationOption | null) => {
        setSelectedLocation(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.id === value?.id}
      fullWidth
      disablePortal={true}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("common.searchYourLocation")}
          variant="outlined"
          size="small"
          sx={{
            minWidth: { md: 240 },
          }}
        />
      )}
    />
  );
};
