import React from "react";

const Description = ({ weather }) => {
  return (
    <div className="description">
      <hr />
      <div className=" row mt-5 py-2">
        <p className="col-9">wind</p>
        <p className="col">{weather.wind}</p>
      </div>

      <div className=" row py-2">
        <p className="col-9">forcast</p>
        <p className="col">{weather.description}</p>
      </div>
    </div>
  );
};

export default Description;
