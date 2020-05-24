import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../store/reducer";
import { setFilterAction, setCoordsAction } from "../store/actions";

const Location: React.FC = () => {
    const dispatch = useDispatch();
    const q = useSelector((state: StateType) => (state.filters.q));
    const filterType = useSelector((state: StateType) => (state.filters.type));
    
    const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value;
        dispatch(setFilterAction({ q }));
    }

    const setYourLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            dispatch(setCoordsAction({ lon, lat }));
        });
       }

    return <div>
        <Button onClick={setYourLocation}>Your location</Button>
        {filterType === "location" && <span className="your-location">Will show weather for your location</span> }
        {" "}
        <label>
            Find location:
            <input value={q} onChange={onCityChange} />
        </label>

    </div>
}

export default Location;