import React,{useEffect,useState} from 'react'
import axios from "axios";

type WeatherData = { weather: { description: string }[]; main: { temp: number }; };

export default function WeatherBox(){
  const [weather,setWeather]=useState<WeatherData | null>(null)
    useEffect(() => {
    async function fetchWeather() {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        console.log('uuu');

        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric&lang=ja`
        );

         console.log("APIキー:", apiKey);
      console.log("レスポンス:", res.data);

        setWeather(res.data);
      } catch (err) {
        console.error("天気取得失敗", err);
      }
    }
    fetchWeather();
  }, []);

  return(
    <div className="mb-3 p-3 border rounded bg-light">
      <h5>今日の天気（東京）</h5>
      
      {weather ? (
    <p>
      {weather.weather[0].description} / 気温: {weather.main.temp}℃
    </p>
      ) : (
    <p>天気を取得中です</p>
      )}

    </div>
    
  )
}