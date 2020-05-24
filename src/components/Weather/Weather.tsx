import React from "react";
import Day from "./Day";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../store/reducer";
import { Row, Button } from "react-bootstrap";
import { fetchWearherByCoords, fetchWearherByString } from "../../store/actions";

const Weather: React.FC = () => {
    const dispatch = useDispatch();
    const q = useSelector((state: StateType) => (state.filters.q));
    const filterType = useSelector((state: StateType) => (state.filters.type));
    const coords = useSelector((state: StateType) => ({ lat: state.filters.lat, lon: state.filters.lon }));
    const weather = useSelector((state: StateType) => state.weather)
    const isLoading = useSelector((state: StateType) => state.isLoading);
    const days = useSelector((state: StateType) => state.days);


    const fetchWeatcher = () => {
        dispatch(filterType === "location" ? fetchWearherByCoords(coords.lon, coords.lat, days) : fetchWearherByString(q, days));
    };

    if (isLoading) return (<div>Loading, please wait...</div>);

    if (!weather) return (
        <>
            {(weather === false) && <div>City not found, try with another one.</div>}
            <Button onClick={fetchWeatcher}>Show weather</Button>
        </>
    );

    return (<div>
        Weather for: {weather.city.name}
        <Row>
            {weather.list.map((day, index) => <Day key={index} dayData={day} />)}
        </Row>
    </div>);
}

export default Weather;