import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import {
  WeatherAction,
  TodaysWeatherData,
  WeekData,
  GET_WEATHER,
  GET_WEEK,
  SET_LOADING,
  REMOVE_LOADING,
  SET_ERROR,
} from "../types";

import { weather, api_key } from "../../api/weather";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, unknown, WeatherAction> => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
    });
    const res = await weather.get(`weather/q=${city}&appid=${api_key}`);
    dispatch({
      type: GET_WEATHER,
      payload: res.data,
    });
    const { lon, lat } = res.data.coord;
    const weekRes = await weather.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=minutely, alerts,current&appid=${api_key}`
    );
    dispatch({
      type: GET_WEEK,
      payload: weekRes.data,
    });
    dispatch({
      type: REMOVE_LOADING,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.message,
    });
  }
};
