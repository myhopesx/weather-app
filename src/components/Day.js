import React from "react";

const Day = ({ date, temperature }) => {

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="days row">
      <p className="col-9">{weekDays[date.getDay()]}</p>
      <p className="col">{(temperature).replaceAll("+", "")}</p>
    </div>
  );
};

export default Day;
