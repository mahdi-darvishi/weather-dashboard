import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import Chart from "react-apexcharts";
import type { MonthlyChartProps } from "../types";

const MonthlyChart: React.FC<MonthlyChartProps> = ({ title, labels, data }) => {
  const theme = useTheme();

  const labelColor = theme.palette.mode === "dark" ? "#F3F4F7" : "#000000";

  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "IRANYekan, Inter, sans-serif",
    },

    dataLabels: {
      enabled: false,
    },

    // 1. 👇 (تغییر) گرادینت خط
    // (ApexCharts از 'colors' برای گرادینت خط در نمودار 'area' استفاده می‌کند)
    colors: ["#4CDFE8"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        colorStops: [
          {
            offset: 0,
            color: "#4CDFE8",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#7947F7",
            opacity: 1,
          },
        ],
      },
    },

    grid: {
      strokeDashArray: 3,
    },

    stroke: {
      curve: "smooth",
      width: 2,
    },

    xaxis: {
      categories: labels,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "10px",
          fontWeight: "500",
        },
      },
    },

    yaxis: {
      tickAmount: 3,
      labels: {
        formatter: (val) => `${Math.round(val)}°C`,
        style: {
          colors: labelColor,
          fontSize: "10px",
          fontWeight: "500",
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode,
    },
  };

  const series = [
    {
      name: "Avg Temp",
      data: data,
    },
  ];

  return (
    <Box
      py={2.5}
      px={{ xs: 1, md: 3, lg: 5 }}
      sx={{ bgcolor: "background.secondary" }}
      borderRadius={6}
      boxShadow={1}
    >
      <Typography
        variant="h5"
        fontSize={{ xs: 16, md: 20 }}
        fontWeight={700}
        mb={2}
      >
        {title}
      </Typography>

      <Chart
        options={options}
        series={series}
        type="line"
        height={155}
        width="100%"
      />
    </Box>
  );
};

export default MonthlyChart;
