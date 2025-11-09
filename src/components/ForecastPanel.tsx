import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import ForecastDayCard from "./ForecastDayCard";
import type { ForecastDayProps } from "../types";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// eslint-disable-next-line
const ForecastPanel = ({ forecastData }: any) => {
  const { t } = useTranslation();

  return (
    <Box
      py={2.5}
      px={{ xs: 1, md: 3, lg: 5 }}
      sx={{ bgcolor: "background.secondary" }}
      borderRadius={6}
      boxShadow={1}
    >
      <Typography fontSize={{ xs: 18, md: 20, lg: 24 }} fontWeight={600}>
        {t("dashboard.forecastTitle")}
      </Typography>

      <Box mt={{ xs: 2, md: 3, lg: 5 }}>
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            300: { slidesPerView: 3 },
            500: { slidesPerView: 4 },
            700: { slidesPerView: 6 },
            1000: { slidesPerView: 8 },
            1280: { slidesPerView: 10 },
            1480: { slidesPerView: 12 },
            1800: { slidesPerView: 14 },
          }}
        >
          {forecastData.forecasts.map((forecast: ForecastDayProps) => (
            <SwiperSlide key={forecast.key}>
              <ForecastDayCard
                key={forecast.key}
                day={forecast.day}
                icon={forecast.icon}
                temp={forecast.temp}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ForecastPanel;
