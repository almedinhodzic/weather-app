import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Hourly from "./Hourly";
import ScrollBottom from "./ScrollBottom";
import WeekItem from "./WeekItem";

const Week: React.FC = () => {
  const week = useSelector((state: RootState) => state.weather.week);
  const weekSection = useRef<HTMLHeadingElement>(null);
  const goToWeekSection = (): void => {
    if (weekSection && weekSection.current) {
      window.scrollTo({
        top: weekSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
      <ScrollBottom goToWeekSection={goToWeekSection} />
      <h3 className="week-header" ref={weekSection}>
        Next 7 days
      </h3>
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
