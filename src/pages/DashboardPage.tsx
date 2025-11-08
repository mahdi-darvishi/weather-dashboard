import { CircularProgress, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useWeatherData } from "../hooks/useWeatherData";
import { useFormattedDate } from "../hooks/useFormattedDate";
import { useLanguage } from "../context/useLanguage";

const DashboardPage = () => {
  const { data, isLoading, error } = useWeatherData();
  const { currentLanguage } = useLanguage();

  // 📅 تعیین تاریخ پایه از داده هواشناسی (یا تاریخ فعلی)
  const baseDate = data?.forecast?.forecastday?.[0]?.date_epoch
    ? new Date(data.forecast.forecastday[0].date_epoch * 1000)
    : new Date();

  // 🕒 state برای نگهداری زمان جاری
  const [currentTime, setCurrentTime] = useState(new Date());

  // ⏱️ به‌روزرسانی زمان هر ۳۰ ثانیه
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  // 📆 تاریخ (شمسی/میلادی)
  const formattedDate = useFormattedDate(baseDate);

  // ⏰ ساعت بر اساس زبان فعلی
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

  // formattedDate
  // formattedTime
  //  data.current.temp_c

  console.log(data);
  if (!data) {
    return (
      <Typography textAlign="center" mt={4}>
        {currentLanguage === "fa"
          ? "لطفاً موقعیتی را برای نمایش آب‌وهوا انتخاب کنید."
          : "Select a location to see the weather."}
      </Typography>
    );
  }

  return <Box> Hi</Box>;
};

export default DashboardPage;
