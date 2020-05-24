import React from "react";
import { DayType } from "./types";
import { Col } from "react-bootstrap";

type DayProps = {
    dayData: DayType;
}

const Day: React.FC<DayProps> = ({ dayData }) => {
    const weather = dayData.weather[0];


    return (<Col sm={2}>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.icon} />
        <div>
            {dayData.dt_txt}: {weather.main}
        </div>
    </Col>);
}

export default Day;