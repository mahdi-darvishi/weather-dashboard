import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logoImage from "../assets/images/Logo.png";
import { LocationSelector } from "./LocationSelector";
import { SettingsMenu } from "./SettingsMenu";

import { useLanguage } from "../context/useLanguage";

const Navbar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { isRTL } = useLanguage();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderActions = () => (
    <Stack
      direction="row"
      alignItems="center"
      spacing={3}
      sx={{ width: "100%", p: 2 }}
    >
      <LocationSelector />
      <SettingsMenu />
    </Stack>
  );

  return (
    <>
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 3 } }}>
          <Box display="flex" gap="8px" alignItems="center">
            <Box
              component="img"
              src={logoImage}
              alt="Logo"
              sx={{ height: 40, mr: { xs: 1, md: 2 }, cursor: "pointer" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                cursor: "pointer",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              {t("common.weatherDashboard")}
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center" gap={2.5}>
              <Stack direction="row" alignItems="center" spacing={2.5}>
                <LocationSelector />
                <SettingsMenu />
              </Stack>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={isRTL ? "left" : "right"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: "75vw",
            maxWidth: 320,
          },
        }}
      >
        {renderActions()}
      </Drawer>
    </>
  );
};

export default Navbar;
