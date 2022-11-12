import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import classes from './WeatherApp.module.css';
import Loading from "./Loading";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    loadInfo();
  },[]);

  useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? ""}`
  },[weather]);

  const loadInfo = async (city = "London") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();
      setWeather(json);

      console.log(json);
    } catch (error) {}
  };

  const changeCityHandler = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={classes.weatherContainer}>
      <WeatherForm onChangeCity={changeCityHandler} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
      
      
    </div>
  );
};

export default WeatherApp;
