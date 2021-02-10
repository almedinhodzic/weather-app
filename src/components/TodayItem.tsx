import React from "react";
import { Weather } from "../store/types";
import moment from "moment";

type Props = {
  temp: number;
  weather: Weather[];
  city: string;
  country: string;
  temp_max: number;
  temp_min: number;
  wind: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  date: number;
};

const TodayItem = ({
  temp,
  weather,
  city,
  country,
  temp_max,
  temp_min,
  wind,
  humidity,
  sunrise,
  sunset,
  date,
}: Props) => {
  const icon = weather.map((item) => item.icon);
  const desc = weather.map((item) => item.main);
  return (
    <div>
      <h1>
        {city}, {country}
      </h1>
      <h2>{moment.unix(date).format("dddd, DD MMMM")}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <span>{temp.toFixed()}&#176;</span>
      <p>{desc}</p>
      <div>
        <p>{temp_max.toFixed()}&#176;</p>
        <p>High</p>
      </div>
      <div>
        <p>{temp_min.toFixed()}&#176;</p>
        <p>Min</p>
      </div>
      <div>
        <p>{wind.toFixed()}mph</p>
        <p>Wind</p>
      </div>
      <div>
        <p>{humidity}%</p>
        <p>Humidity</p>
      </div>
      <div>
        <p>{moment.unix(sunrise).format("hh:mm")}</p>
        <p>Sunrise</p>
      </div>
      <div>
        <p>{moment.unix(sunset).format("HH:mm")}</p>
        <p>Sunset</p>
      </div>
    </div>
  );
};

export default TodayItem;
