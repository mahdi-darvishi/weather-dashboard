import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/useLanguage";

export const LanguageSwitcher: React.FC = () => {
  const { t } = useTranslation();

  const { currentLanguage, changeLanguage, isRTL } = useLanguage();

  const handleLangChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as "en" | "fa");
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id="language-select-label" shrink={true}>
        {t("common.language")}
      </InputLabel>

      <Select
        labelId="language-select-label"
        id="language-select"
        value={currentLanguage}
        onChange={handleLangChange}
        sx={{
          "& .MuiSelect-select": {
            paddingRight: isRTL ? "0 !important" : "24px",
          },
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fa">فارسی</MenuItem>
      </Select>
    </FormControl>
  );
};
