import React, {FC} from "react";
import {Weather} from "../model/Weather";
import {getIconUrl} from "../services/WeatherService";

interface WeatherEntryProps {
  weather: Weather;
}

function convertUnixTimeToDate(unixUtc: number): Date {
  return new Date(unixUtc * 1000);
}

export const WeatherEntry: FC<WeatherEntryProps> = ({weather}) => 
<div>
  <div>
    {convertUnixTimeToDate(weather.dt).toLocaleTimeString()}
  </div>
    <strong>{weather.main.temp}°C</strong>
    <div>
      ({weather.main.temp_min}°C / {weather.main.temp_max}°C)
    </div>
    <div>
      Humiditiy: {weather.main.humidity}%
    </div>
    {weather.weather.map(condition => 
      <div>
        <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
      </div>
      )}
</div>
