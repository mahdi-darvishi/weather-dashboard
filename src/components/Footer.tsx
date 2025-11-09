import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MainlogoImage from "../assets/images/MainLogo.png";
import { useFormattedDate } from "../hooks/useFormattedDate";
import { useWeatherData } from "../hooks/useWeatherData";

const Footer = () => {
  const { t } = useTranslation();
  const { data } = useWeatherData();

  const baseDate = data?.forecast?.forecastday?.[0]?.date_epoch
    ? new Date(data.forecast.forecastday[0].date_epoch * 1000)
    : new Date();

  const formattedDate = useFormattedDate(baseDate);

  return (
    <Box
      component="footer"
      px={{ md: 3 }}
      py={3.5}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        gap: { xs: 1.5, md: 0 },

        /* @noflip */
        background: (theme) => `/* @noflip */ ${theme.gradients.main}`,
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        gap={1.5}
      >
        <Box component="img" src={MainlogoImage} sx={{ height: 32 }} />
        <Typography
          fontSize={{ xs: 12, md: 14 }}
          fontWeight={400}
          textAlign="center"
        >
          {t("common.copyright")}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={{ xs: 1, md: 5 }}
      >
        <Stack display="flex" alignItems="center" flexDirection="row" gap={1}>
          <EmailOutlinedIcon fontSize="small" />
          <Typography fontSize={{ xs: 12, md: 14 }} fontWeight={400}>
            {t("common.contactUs")} : info@nadin.ir
          </Typography>
        </Stack>

        <Stack display="flex" alignItems="center" flexDirection="row" gap={1}>
          <CalendarMonthOutlinedIcon fontSize="small" />
          <Typography fontSize={{ xs: 12, md: 14 }} fontWeight={400}>
            {formattedDate.split("-")[0]}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
