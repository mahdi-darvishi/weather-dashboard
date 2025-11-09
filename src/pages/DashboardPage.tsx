import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CurrentWeatherPanel from "../components/CurrentWeatherPanel";
import ForecastPanel from "../components/ForecastPanel";
import MonthlyChart from "../components/MonthlyChart";
import { useLanguage } from "../context/useLanguage";
import { useLocation } from "../context/useLocation";
import { useFormattedDate } from "../hooks/useFormattedDate";
import { useWeatherData } from "../hooks/useWeatherData";
import type {
  CurrentWeatherPanelProps,
  ForecastDayProps,
  ForecastPanelProps,
} from "../types";
import { formatForecastDay } from "../utils/formatDate";
import { getCustomWeatherIcon } from "../utils/weatherIconMapper";
import {
  monthlyAvgTemperatures,
  monthlyLabelsEn,
  monthlyLabelsFa,
} from "../data/monthlyAvgData";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { data, isLoading, error } = useWeatherData();
  const { currentLanguage } = useLanguage();
  const { selectedLocation } = useLocation();
  const { t } = useTranslation();

  const baseDate = data?.forecast?.forecastday?.[0]?.date_epoch
    ? new Date(data.forecast.forecastday[0].date_epoch * 1000)
    : new Date();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = useFormattedDate(baseDate);

  const formattedTime = useFormattedDate(currentTime).split(" ")[1]
    ? currentLanguage === "fa"
      ? currentTime.toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      : currentTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
    : "";

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" textAlign="center" mt={4}>
        {error}
      </Typography>
    );
  }

  if (!data || !selectedLocation) {
    return (
      <Typography textAlign="center" mt={4}>
        {currentLanguage === "fa"
          ? "لطفاً موقعیتی را برای نمایش آب‌وهوا انتخاب کنید."
          : "Select a location to see the weather."}
      </Typography>
    );
  }

  const propsForCurrentWeather: CurrentWeatherPanelProps = {
    locationName:
      currentLanguage === "fa"
        ? selectedLocation.name_fa
        : selectedLocation.name_en,
    date: formattedDate,
    time: formattedTime,
    temperature: Math.round(data.current.temp_c),
    highTemp: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
    lowTemp: Math.round(data.forecast.forecastday[0].day.mintemp_c),
    weatherIcon: getCustomWeatherIcon(data.current.condition.code),
    weatherDescription: data.current.condition.code,
    feelsLike: Math.round(data.current.feelslike_c),
  };

  const cleanForecasts: ForecastDayProps[] = data.forecast.forecastday.map(
    (dayData, index) => {
      const temp = dayData.day.avgtemp_c;

      const dayName =
        index === 0
          ? "Today"
          : formatForecastDay(dayData.date_epoch, currentLanguage);

      return {
        key: dayData.date_epoch,
        day: dayName,
        icon: getCustomWeatherIcon(dayData.day.condition.code),
        temp: Math.round(temp),
      };
    }
  );

  const propsForForecastPanel: ForecastPanelProps = {
    forecasts: cleanForecasts,
  };

  const chartData =
    monthlyAvgTemperatures[selectedLocation.id] ||
    monthlyAvgTemperatures["default"];

  const chartLabels =
    currentLanguage === "fa" ? monthlyLabelsFa : monthlyLabelsEn;

  return (
    <Box>
      <Grid container rowSpacing={3} columnSpacing={5}>
        <Grid size={{ xs: 12, md: 5 }}>
          <CurrentWeatherPanel {...propsForCurrentWeather} />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <MonthlyChart
            title={t("dashboard.monthlyChartTitle")}
            labels={chartLabels}
            data={chartData}
          />
        </Grid>
        <Grid size={12}>
          <ForecastPanel forecastData={propsForForecastPanel} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
