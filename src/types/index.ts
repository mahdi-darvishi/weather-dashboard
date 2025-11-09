export interface LocationOption {
  id: string;
  name_en: string;
  name_fa: string;
  lat: number;
  lon: number;
}

export interface WeatherData {
  current: {
    temp_c: number;
    feelslike_c: number;
    last_updated_epoch: number;
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
        avgtemp_c: number;
        condition: {
          text: string;
          code: number;
        };
      };
    }[];
  };
}

export interface CurrentWeatherPanelProps {
  locationName: string;
  date: string;
  time: string;
  temperature: number;
  highTemp: number;
  lowTemp: number;
  weatherIcon: string;
  weatherDescription: number | string;
  feelsLike: number;
}

export interface ForecastDayProps {
  key: number;
  day: string;
  icon: string;
  temp: number;
}

// (NEW) This is the prop for the main slider component
export interface ForecastPanelProps {
  forecasts: ForecastDayProps[];
}
