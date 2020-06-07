import React from 'react';
import Hours from './Hours'

const Day = ({ days, date, hourlyForecast }) => {

    const dayDate = date.slice(0, 10);
    const forecastForHour = hourlyForecast.map(element => (
        <Hours
         key={element.$}
         hours={hourlyForecast}
         />
    ))
    return (
        <div>
            <p>{dayDate}</p>
            {forecastForHour}
            {console.log(hourlyForecast)}
        </div>
    );
}

export default Day;