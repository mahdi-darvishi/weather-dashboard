import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export const RootLayout = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    document.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return <Outlet />;
};
