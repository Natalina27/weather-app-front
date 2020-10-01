import React, {useState} from 'react';


function Day(props) {
    const {temp, day, icon} = props
    const degreeTemp = "" + Math.round(temp - 273) + "°"
    const iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png"
    console.log(iconUrl)
    return (

        <div className="task">
            <div className="text">
                {day}
                {degreeTemp}
                <img src={iconUrl}/>
            </div>

        </div>
    );
}

export default Day;
