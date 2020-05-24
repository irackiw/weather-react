import axios from "axios";

const API_KEY = "fb2d3477a420e1130f94da9af93ec5e1";
const fbclid = "IwAR2CCW64qBJ3plSl4TtFwWmYGLEjHgnxDrqrq2r04WpZZL-U_znOjb71RhI";
export const getWeatherByString = (q: string, cnt: number) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${q}&cnt=${cnt}&appid=${API_KEY}&fbclid=${fbclid}`);
}

export const getWeatherByCoords = (lat: number, lon: number, cnt:number) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${API_KEY}&fbclid=${fbclid}`);
}
