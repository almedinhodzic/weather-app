import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Hourly from "./Hourly";
import WeekItem from "./WeekItem";

const Week: React.FC = () => {
  const week = useSelector((state: RootState) => state.weather.week);

  return (
    <div>
      <div className="scroll-weather">
        {week?.hourly.map((hour) => (
          <Hourly
            key={hour.dt}
            temp={hour.temp}
            time={hour.dt}
            weather={hour.weather}
          />
        ))}
      </div>

      <h3>Next 7 days</h3>
      {week?.daily.map((day) => (
        <WeekItem
          key={day.dt}
          time={day.dt}
          weather={day.weather}
          max={day.temp.max}
          min={day.temp.min}
          wind={day.wind_speed}
          humidity={day.humidity}
        />
      ))}
    </div>
  );
};

export default Week;
