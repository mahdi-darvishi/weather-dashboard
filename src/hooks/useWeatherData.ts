import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { useLocation } from "../context/useLocation";
import { useLanguage } from "../context/useLanguage";

interface WeatherData {
  current: {
    temp_c: number;
    feelslike_c: number;
    condition: {
      text: string;
      code: number;
    };
  };
  forecast: {
    forecastday: {
      date_epoch: number;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          code: number;
        };
      };
    }[];
  };
}

export const useWeatherData = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { selectedLocation } = useLocation();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    if (!selectedLocation) {
      setData(null);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await apiClient.get<WeatherData>("/forecast.json", {
          params: {
            q: `${selectedLocation.lat},${selectedLocation.lon}`,
            days: 14,
            lang: currentLanguage,
          },
        });

        setData(response.data);
        // eslint-disable-next-line
      } catch (err: any) {
        console.error("Error fetching weather data:", err);
        setError(err.message || "Failed to fetch weather data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedLocation, currentLanguage]);

  return { data, isLoading, error };
};
