import React, { useState } from "react";
import { useContext, useEffect } from "react";
import WeatherContext from "../context/WeatherContext";
import CountryContext from "../context/CountryContext";
import { TiWeatherCloudy } from "react-icons/ti";
import Loader from "./Loader";


const Temprutere = () => {
  const { bg, weather, fetchWeather } = useContext(WeatherContext);
  const { selectedCountry } = useContext(CountryContext);

  const [isLoading, setIsLoading] = useState(true);
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  useEffect(() => {
    const getWeather = async () => {
      await fetchWeather(selectedCountry.value);
      setIsLoading(false);
    };

    getWeather();
  }, []);

  if (bg === "") {
    return <Loader />;
  }
  return (
    <div className="Temprutere">
      <div className="row justify-content-md-center">
        <div className="temp col">
          {weather.temperature.replace(/\D/g, "").trim()}°
        </div>
        <div className="col">
          <div className="d-flex flex-column">
            <div className="city">{selectedCountry.value}</div>
            <div className="more">{`${year}${"-"}${
              month < 10 ? `0${month}` : `${month}`
            }${"-"}${date}`}</div>
          </div>
        </div>
        <div className="des col">
          <div className="d-flex flex-column">
            <div>
              <TiWeatherCloudy />
            </div>
            <div>{weather.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temprutere;
