//we need this component to render BEFORE it has all its data just incase we have to render "null" response 
//therefore - component = async = useEffect

import React, {FC, useEffect, useState} from 'react';
import { WeatherEntry } from './WeatherEntry';
import { WeatherLocation } from '../model/Weather';
import { Weather } from '../model/Weather';
import {readForcast, readWeather} from '../services/WeatherService';


interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({location}) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Weather[] | null>(null);

  useEffect(() => {
    (async function () {
      if (location) {
        const [weather, forecast] = await Promise.all([
          readWeather(location.id),
          readForcast(location.id)
        ]) 
        setWeather(weather);
        setForecast(forecast);
      }
    })();
  }, [location]);

  if (!location || !weather) return null;

  return (
    <div>
      <hr/>
      <h2>{location.name}</h2>
      <WeatherEntry weather={weather} />
    </div>
  )
};