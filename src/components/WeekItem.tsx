import React from "react";
import { Weather } from "../store/types";
import moment from "moment";

type Props = {
  time: number;
  weather: Weather[];
  max: number;
  min: number;
  wind: number;
  humidity: number;
};

const WeekItem: React.FC<Props> = ({
  time,
  weather,
  max,
  min,
  wind,
  humidity,
}) => {
  const icon = weather.map((item) => item.icon);
  return (
    <div className="week">
      <div>
        <p className="week-info-main">{moment.unix(time).format("ddd")}</p>
        <p>{moment.unix(time).format("DD/MM")}</p>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
          className="week-icon"
        />
      </div>
      <div>
        <p className="week-info-main">{min.toFixed()}&#176;</p>
        <p>Low</p>
      </div>
      <div>
        <p className="week-info-main">{max.toFixed()}&#176;</p>
        <p>High</p>
      </div>
      <div>
        <p className="week-info-main">{wind.toFixed()}mph</p>
        <p>Wind</p>
      </div>
      <div>
        <p className="week-info-main">{humidity}%</p>
        <p>Humidity</p>
      </div>
    </div>
  );
};

export default WeekItem;
