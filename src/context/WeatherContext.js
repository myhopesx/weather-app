import { createContext, useState } from "react";
import Swal from "sweetalert2";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [bg, setBg] = useState("");

  const fetchWeather = async (countryName) => {
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${countryName}`
    );

    if (response.status === 404) {
      return Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "This country not found!",
        heightAuto: false,
      });
    }

    const data = await response.json();
    console.log(data);

    setWeather(data);
    setForecast(data.forecast);

    await getBackground(data.description);
  };

  const getBackground = async (description) => {
    console.log(description);

    var tempDesc = description.replaceAll(" ", "-");

    if (tempDesc.includes("cloud")) {
      setBg("cloudy");
    } else if (tempDesc.includes("rain")) {
      setBg("rainy");
    } else if (tempDesc.includes("snow")) {
      setBg("snowy");
    } else {
      setBg("sunny");
    }
  };

  return (
    <WeatherContext.Provider value={{ forecast, weather, fetchWeather, bg }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
