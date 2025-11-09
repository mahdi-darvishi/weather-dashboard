import { useMemo } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";
import "dayjs/locale/en";
import { useLanguage } from "../context/useLanguage";

dayjs.extend(jalaliday);

export const useFormattedDate = (date?: string | number | Date) => {
  const { currentLanguage } = useLanguage();

  return useMemo(() => {
    if (!date) return "";
    const d = dayjs(date);
    return currentLanguage === "fa"
      ? d.calendar("jalali").locale("fa").format("dddd، D MMMM YYYY - HH:mm")
      : d.locale("en").format("dddd, MMMM D, YYYY - h:mm A");
  }, [date, currentLanguage]);
};
