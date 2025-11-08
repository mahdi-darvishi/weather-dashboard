import sunnyCloudIcon from "../assets/icons/sunny-cloud.svg";
import rainCloudIcon from "../assets/icons/rain-cloud.svg";
import stormCloudIcon from "../assets/icons/storm-cloud.svg";
import sunnyIcon from "../assets/icons/sunny.svg";
import defaultIcon from "../assets/icons/sunny.svg";

const weatherIconMap: Record<number, string> = {
  1000: sunnyIcon,
  1003: sunnyCloudIcon,
  1006: sunnyCloudIcon,

  1063: rainCloudIcon,
  1180: rainCloudIcon,
  1183: rainCloudIcon,
  1186: rainCloudIcon,
  1189: rainCloudIcon,
  1192: rainCloudIcon,
  1195: rainCloudIcon,
  1240: rainCloudIcon,
  1243: rainCloudIcon,

  1087: stormCloudIcon,
  1273: stormCloudIcon,
  1276: stormCloudIcon,
};

export const getCustomWeatherIcon = (code: number): string => {
  if (weatherIconMap[code]) {
    return weatherIconMap[code];
  }

  return defaultIcon;
};
