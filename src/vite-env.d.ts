/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "dayjs-jalali";
declare module "swiper/css";
