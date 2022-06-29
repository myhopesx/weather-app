import React from "react";
import Deatils from "../components/Deatils";
import Temprutere from "../components/Temprutere";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Home = () => {
  const { bg } = useContext(WeatherContext);

  return (
    <div className={`home ${bg}`}>
      <Deatils />
      <Temprutere />
    </div>
  );
};

export default Home;
