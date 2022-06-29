import React from "react";

const About = () => {
  return (
    <div className="about">
      <div class="info d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight title">Weather App</div>
        <div class="p-2 bd-highlight story">
          <p>
            A website that displays the weather for users. All they have to do
            is write the name of the country and the weather information will
            appear to users
          </p>
        </div>
        <div class="p-2 bd-highlight used">Used API</div>
        <div class="p-2 bd-highlight api1">
          Weather Api : https://goweather.herokuapp.com/weather/"country_name"
        </div>

        <div class="p-2 bd-highlight api2">
          Country Api : https://restcountries.com/v3.1/all
        </div>
      </div>
    </div>
  );
};

export default About;
