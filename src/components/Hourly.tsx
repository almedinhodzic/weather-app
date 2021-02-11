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
    <div>
      <p>{moment.unix(time).format("h:mm A")}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p>{temp.toFixed()}</p>
    </div>
  );
};

export default Hourly;
