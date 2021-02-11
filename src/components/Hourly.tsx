import React from "react";
import { Weather } from "../store/types";
import moment from "moment";

type Props = {
  temp: number;
  time: number;
  weather: Weather[];
};

const Hourly: React.FC<Props> = ({ temp, time, weather }) => {
  const icon = weather.map((item) => item.icon);
  return (
    <div className="hour">
      <p>{moment.unix(time).format("h:mm A")}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      <p className="hour-temp">{temp.toFixed()}&#176;</p>
    </div>
  );
};

export default Hourly;
