import React, { useContext } from "react";
import Day from "./Day";
import Search from "./Search";
import WeatherContext from "../context/WeatherContext";
import Description from "./Description";
import { Link } from "react-router-dom";
const Deatils = () => {
  const { forecast, weather, bg } = useContext(WeatherContext);

  const today = new Date();

  if (bg === "") {
    return <></>;
  }

  return (
    <div className="details container">
      <Search />

      {typeof forecast !== "undefined" ? (
        forecast.map((cast) => (
          <Day
            key={cast.day}
            temperature={cast.temperature}
            date={new Date(today.getDate() + cast.day)}
          />
        ))
      ) : (
        <></>
      )}

      {typeof forecast !== "undefined" ? (
        <Description weather={weather} />
      ) : (
        <></>
      )}

      <Link to="/about" className="more-info">
        {" "}
        more information{" "}
      </Link>
    </div>
  );
};

export default Deatils;
