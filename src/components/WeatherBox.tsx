import React from "react";

type WeatherData = {
  weather: { description: string }[];
  main: { temp: number };
};

type WeatherBoxProps = {
  weather: WeatherData | null;
};


export default function WeatherBox({weather}: WeatherBoxProps){
  return(
    <div className="mb-3 p-3 border rounded bg-light">
      <h5>今日の天気（東京）</h5>
      {weather ? (
    <p>
      {weather.weather[0].description} / 気温: {weather.main.temp}℃
    </p>
      ) : (
    <p>天気を取得中...</p>
      )}
    </div>
  )
}