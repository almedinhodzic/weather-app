export const GET_WEATHER = "GET_WEATHER";
export const GET_WEEK = "GET_WEEK";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const REMOVE_LOADING = "REMOVE_LOADING";

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface TodaysWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: number;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  pop: number;
}

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  cloouds: number;
  pop: number;
  rain?: number;
  show?: number;
  uvi: number;
}

export interface WeekData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  hourly: Hourly[];
  daily: Daily[];
}

export interface WeatherState {
  today: TodaysWeatherData | null;
  week: WeekData | null;
  loading: boolean;
  error: string;
}

interface GetTodayAction {
  type: typeof GET_WEATHER;
  payload: TodaysWeatherData;
}

interface GetWeekAction {
  type: typeof GET_WEEK;
  payload: WeekData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface RemoveLoadingAction {
  type: typeof REMOVE_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction =
  | GetTodayAction
  | GetWeekAction
  | SetLoadingAction
  | RemoveLoadingAction
  | SetErrorAction;
