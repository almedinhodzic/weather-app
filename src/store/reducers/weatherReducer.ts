import {
  WeatherState,
  WeatherAction,
  GET_WEATHER,
  GET_WEEK,
  SET_ERROR,
  SET_LOADING,
  REMOVE_LOADING,
} from "../types";

const initialState: WeatherState = {
  today: null,
  week: null,
  loading: false,
  error: "",
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        today: action.payload,
        error: "",
      };
    case GET_WEEK:
      return {
        ...state,
        week: action.payload,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
