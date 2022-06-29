import React, { useEffect, useContext } from "react";
import Select from "react-select";
import CountryContext from "../context/CountryContext";
import WeatherContext from "../context/WeatherContext";

const Search = () => {
  const { getCountry, changeCountry, country } = useContext(CountryContext);
  const { fetchWeather } = useContext(WeatherContext);

  useEffect(() => {
    const fetchCountry = async () => {
      await getCountry();
    };

    fetchCountry();
  }, []);

  const onChange = async (selectedOption) => {
    await changeCountry({ label: selectedOption, value: selectedOption });
    await fetchWeather(selectedOption);
  };
  const styles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      outline: "none",
      border: "none",

      borderBottom: "2px solid #e9ecef",
      width: "100%",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",
    }),
  };
  return (
    <div className="search">
      <Select
        options={country}
        className="select mb-5"
        onChange={(e) => {
          onChange(e.value);
          console.log("value is ", e.value);
        }}
        placeholder="Search for a country..."
        styles={styles}
      />
    </div>
  );
};

export default Search;
