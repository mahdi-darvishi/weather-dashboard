import dayjs from "dayjs";

export const formatForecastDay = (timestamp: number, lang: "fa" | "en") => {
  const date = dayjs(timestamp * 1000);

  if (lang === "fa") {
    return date.calendar("jalali").format("dddd");
  }

  return date.format("ddd");
};
