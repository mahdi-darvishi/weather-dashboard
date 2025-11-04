// src/context/LanguageProvider.tsx

import React, { useState, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

// MUI RTL dependencies
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { LanguageContext } from "./LanguageContext";

// ----------------------------------------------------
// Language and RTL Provider Component
// ----------------------------------------------------

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<"en" | "fa">(
    i18n.language as "en" | "fa"
  );

  const isRTL = useMemo(() => currentLanguage === "fa", [currentLanguage]);

  const changeLanguage = useCallback(
    (lng: "en" | "fa") => {
      i18n.changeLanguage(lng);
      setCurrentLanguage(lng);
      localStorage.setItem("language", lng);
    },
    [i18n]
  ); // Dependency added to fix ESLINT warning

  const cacheRtl = useMemo(() => {
    if (isRTL) {
      return createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin], // rtlPlugin is correctly used here
        prepend: true,
      });
    }
    return null;
  }, [isRTL]);

  const contextValue = useMemo(
    () => ({
      currentLanguage,
      isRTL,
      changeLanguage,
    }),
    [currentLanguage, isRTL, changeLanguage]
  );

  // If RTL is active, we wrap the application in CacheProvider
  if (isRTL && cacheRtl) {
    return (
      <LanguageContext.Provider value={contextValue}>
        <CacheProvider value={cacheRtl}>{children}</CacheProvider>
      </LanguageContext.Provider>
    );
  }

  // LTR rendering
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
