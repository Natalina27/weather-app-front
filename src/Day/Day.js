import React from 'react';

import s from './Day.module.css';


function Day(props) {
  const {temp, day, icon} = props
  const degreeTemp = "" + Math.round(temp - 273) + "°"
  const iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png"
  console.log(iconUrl)
  return (

      <div className={s.tasks}>
        <div className={s.text}>
          {day}
          {degreeTemp}
          <img src={iconUrl} alt={icon}/>
        </div>

      </div>
  );
}

export default Day;
