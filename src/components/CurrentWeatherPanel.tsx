import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import gpsIcon from "../assets/icons/gps.svg";
import { useLanguage } from "../hooks/useLanguage";
import type { CurrentWeatherPanelProps } from "../types";
import { useTranslation } from "react-i18next";

const CurrentWeatherPanel: React.FC<CurrentWeatherPanelProps> = ({
  locationName,
  date,
  time,
  temperature,
  highTemp,
  lowTemp,
  weatherIcon,
  weatherDescription,
  feelsLike,
}) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  const dateParts = date.split(" ");

  if (dateParts.length !== 4) {
    console.warn("Unexpected date format:", date);
  }

  const [dayOfTheWeek, part1, part2, year] = dateParts;

  const englishDate = {
    dayOfTheWeek,
    month: part1,
    day: part2,
    year,
  };

  const persianDate = {
    dayOfTheWeek,
    day: part1,
    month: part2,
    year,
  };

  return (
    <Box
      py={2.5}
      px={{ xs: 1, md: 3, lg: 5 }}
      sx={{ bgcolor: "background.secondary" }}
      borderRadius={6}
      boxShadow={1}
      display={"flex"}
      justifyContent={"space-between"}
      height={{ lg: 250 }}
    >
      <Box>
        <Box
          display={"inline-flex"}
          alignItems={"center"}
          pr={4}
          pl={1.5}
          py={0.7}
          borderRadius={50}
          gap={0.5}
          bgcolor={"secondary.300"}
          justifyContent={"start"}
        >
          <Box
            component={"img"}
            src={gpsIcon}
            alt="Gps"
            width={20}
            height={20}
          ></Box>
          <Typography
            variant="subtitle1"
            color="grey.A400"
            fontSize={16}
            fontWeight={400}
          >
            {locationName}
          </Typography>
        </Box>
        <Typography variant="h3" mt={2} fontSize={32} fontWeight={500}>
          {currentLanguage === "en"
            ? englishDate.dayOfTheWeek.slice(0, -1)
            : ""}
        </Typography>
        <Stack
          sx={{
            flexDirection: currentLanguage === "en" ? "row" : "row-reverse",
          }}
          gap={3}
        >
          <Typography variant="subtitle2" mt={0.5}>
            {currentLanguage === "en"
              ? // Show english
                englishDate.day.slice(0, -1) +
                " " +
                englishDate.month +
                ", " +
                englishDate.year
              : // Show persian
                persianDate.dayOfTheWeek.slice(0, -1) +
                " " +
                persianDate.day +
                " " +
                persianDate.month +
                " " +
                persianDate.year}
          </Typography>
          <Typography>{time}</Typography>
        </Stack>
        <Typography
          variant="h3"
          mt={{ xs: 1, md: 3 }}
          fontSize={{ xs: 30, md: 40 }}
          fontWeight={500}
        >
          {temperature}°<span>C</span>
        </Typography>

        <Stack direction={"row"} gap={2}>
          <Typography variant="subtitle2">
            {t("dashboard.high")}: {highTemp}
          </Typography>
          <Typography variant="subtitle2">
            {t("dashboard.low")}: {lowTemp}
          </Typography>
        </Stack>
      </Box>

      <Box display={"flex"} flexDirection={"column"}>
        <Box
          component={"img"}
          src={weatherIcon}
          alt="Weather Icon"
          width={{ xs: 90, md: 115 }}
          height={{ xs: 90, md: 115 }}
        ></Box>

        <Stack alignItems={"start"} mt={1}>
          <Typography
            variant="h3"
            fontSize={{ xs: 20, md: 30 }}
            fontWeight={400}
          >
            {t(`weather.${weatherDescription}`)}
          </Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            mt={0.5}
            sx={{
              flexDirection: currentLanguage === "en" ? "row" : "row-reverse",
            }}
            gap={0.5}
          >
            <Typography
              variant="h6"
              fontSize={{ xs: 12, md: 16 }}
              fontWeight={400}
            >
              {t("dashboard.feelsLike")}
            </Typography>
            <Typography>{feelsLike}</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CurrentWeatherPanel;
