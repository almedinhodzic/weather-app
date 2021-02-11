import { useSelector } from "react-redux";
import { RootState } from "../store";
import TodayItem from "./TodayItem";

const Today: React.FC = () => {
  const todayWeather = useSelector((state: RootState) => state.weather.today);

  return (
    <div>
      {todayWeather && (
        <TodayItem
          city={todayWeather.name}
          country={todayWeather.sys.country}
          weather={todayWeather.weather}
          temp={todayWeather.main.temp}
          temp_max={todayWeather.main.temp_max}
          temp_min={todayWeather.main.temp_min}
          wind={todayWeather.wind.speed}
          humidity={todayWeather.main.humidity}
          sunrise={todayWeather.sys.sunrise}
          sunset={todayWeather.sys.sunset}
          date={todayWeather.dt}
        />
      )}
    </div>
  );
};

export default Today;
