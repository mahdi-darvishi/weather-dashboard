import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ForecastDayProps } from "../types";

const ForecastDayCard = ({ day, icon, temp }: ForecastDayProps) => {
  const { t } = useTranslation();

  return (
    <Box
      px={2}
      py={6}
      bgcolor={"background.card"}
      borderRadius={4}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      sx={{ cursor: { xs: "pointer", xl: "default" } }}
    >
      <Typography
        textAlign={"center"}
        fontSize={{ xs: 12, lg: 16 }}
        sx={{}}
        fontWeight={500}
      >
        {t("dashboard." + day)}
      </Typography>
      <Box
        mt={-2.5}
        sx={{
          height: 2,

          /* @noflip */
          background: (theme) => `/* @noflip */ ${theme.gradients.border}`,
        }}
      />

      <Box
        component={"img"}
        src={icon}
        width={{ xs: 50, md: 60, lg: 72 }}
        height={{ xs: 50, md: 60, lg: 72 }}
        mx={"auto"}
      ></Box>

      <Typography
        textAlign={"center"}
        variant="h3"
        fontSize={{ xs: 14, md: 18 }}
        fontWeight={500}
      >
        {temp}°<span>C</span>
      </Typography>
    </Box>
  );
};

export default ForecastDayCard;
