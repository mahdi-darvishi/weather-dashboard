import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/useLanguage";
import { useThemeMode } from "../theme/useThemeMode";
import { useAuth } from "../context/useAuth";

export const SettingsMenu: React.FC = () => {
  const { t } = useTranslation();
  const { mode, toggleTheme } = useThemeMode();
  const { currentLanguage, changeLanguage } = useLanguage();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { logout } = useAuth();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string | null
  ) => {
    if (newMode && newMode !== mode) {
      toggleTheme();
    }
  };

  const handleLangChange = (
    event: React.MouseEvent<HTMLElement>,
    newLang: string | null
  ) => {
    if (newLang && (newLang === "en" || newLang === "fa")) {
      changeLanguage(newLang);
    }
  };

  return (
    <>
      <Stack
        border={1}
        borderRadius={1}
        bgcolor={open && mode === "light" ? "primary.100" : ""}
        borderColor={open ? "primary.500" : "grey.250"}
      >
        <IconButton onClick={handleClick} aria-label={t("common.settings")}>
          <SettingsOutlinedIcon
            color={open && mode === "light" ? "primary" : "action"}
          />
        </IconButton>
      </Stack>

      <Popover
        sx={{ mt: 1, ml: 1, bgcolor: "" }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          px={2}
          py={1.5}
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Box>
            <Typography component="p" color="text.secondary" mb={0.5}>
              {t("common.mode")}
            </Typography>
            <ToggleButtonGroup
              sx={{
                height: 35,
                "& .MuiToggleButton-root.Mui-selected": {
                  color: "primary.500",
                  borderColor: "primary.500",
                },
              }}
              fullWidth
              value={mode}
              exclusive
              onChange={handleThemeChange}
            >
              <ToggleButton
                value="light"
                sx={{
                  px: 3,
                  textTransform: "capitalize",
                }}
              >
                <LightModeOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                {t("common.light")}
              </ToggleButton>

              <ToggleButton
                value="dark"
                sx={{
                  px: 3,
                  textTransform: "capitalize",
                }}
              >
                <DarkModeOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                {t("common.dark")}
              </ToggleButton>
            </ToggleButtonGroup>

            <Divider sx={{ mt: 1.5 }} />
          </Box>
          <Box mt={2}>
            <Typography component="p" color="text.secondary" mb={0.5}>
              {t("common.language")}
            </Typography>
            <ToggleButtonGroup
              sx={{
                height: 35,
                "& .MuiToggleButton-root.Mui-selected": {
                  color: "primary.500",
                  borderColor: "primary.500",
                },
              }}
              fullWidth
              value={currentLanguage}
              exclusive
              onChange={handleLangChange}
            >
              <ToggleButton
                value="en"
                sx={{ px: 3, textTransform: "capitalize" }}
              >
                {t("common.en")}
              </ToggleButton>

              <ToggleButton
                value="fa"
                sx={{ px: 3, textTransform: "capitalize" }}
              >
                {t("common.fa")}
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Divider sx={{ mt: 1.5 }} />

          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 0.5,
              mt: 2,
              px: 0.1,
            }}
            onClick={logout}
          >
            <LogoutOutlinedIcon color="action" />
            <Typography
              variant="caption"
              fontSize={16}
              fontWeight="400"
              sx={{ textTransform: "capitalize", color: "text.secondary" }}
            >
              {t("common.exit")}
            </Typography>
          </Button>
        </Box>
      </Popover>
    </>
  );
};
