import { createContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({ 'label': "Saudi", "value": "Saudi" });

  const getCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    const temp = data.map((country) => {
      return {
        label: country.name.common,
        value: country.name.common,
      };
    });

    setCountry(temp);
  };

  const changeCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <CountryContext.Provider
      value={{ selectedCountry, getCountry, changeCountry, country }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
