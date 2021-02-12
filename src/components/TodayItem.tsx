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

const TodayItem: React.FC<Props> = ({
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
}) => {
  const icon = weather.map((item) => item.icon);
  const desc = weather.map((item) => item.main);

  return (
    <div className="today-section">
      <h1 className="city">
        {city}, {country}
      </h1>
      <h2>{moment.unix(date).format("dddd, DD MMMM")}</h2>
      <div className="today-main">
        <div className="today-left">
          <div className="image">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
          <div>
            <span className="main-temp">{temp.toFixed()}&#176;</span>
            <span className="desc">{desc}</span>
          </div>
        </div>

        <div className="today-right">
          <div className="main-item">
            <div>
              <span className="main-info">{temp_max.toFixed()}&#176;</span>
              <span>Day High</span>
            </div>
            <div>
              <span className="main-info">{temp_min.toFixed()}&#176;</span>
              <span>Day Min</span>
            </div>
          </div>
          <div className="main-item">
            <div>
              <span className="main-info">{wind.toFixed()}mph</span>
              <span>Wind</span>
            </div>
            <div>
              <span className="main-info">{humidity}%</span>
              <span>Humidity</span>
            </div>
          </div>
          <div className="main-item">
            <div>
              <span className="main-info">
                {moment.unix(sunrise).format("hh:mm")}
              </span>
              <span>Sunrise</span>
            </div>
            <div>
              <span className="main-info">
                {moment.unix(sunset).format("HH:mm")}
              </span>
              <span>Sunset</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
    </div>
  );
};

export default TodayItem;
