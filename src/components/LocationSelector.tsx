// src/components/LocationSelector.tsx

import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "../context/useLanguage";
import type { LocationOption } from "../types";

import { useLocation } from "../context/useLocation";
import { locationsList } from "../data/lcoation";

export const LocationSelector: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const { selectedLocation, setLocation } = useLocation();

  return (
    <Autocomplete
      options={locationsList}
      getOptionLabel={(option) =>
        currentLanguage === "fa" ? option.name_fa : option.name_en
      }
      value={selectedLocation}
      onChange={(event, newValue: LocationOption | null) => {
        setLocation(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
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
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
};
