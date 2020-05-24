export type TempType = {
    "day": number,
    "min": number,
    "max": number,
    "night": number,
    "eve": number,
    "morn": number
};

export type MainWeatherType = {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
};

export type WeatherType = {
    "id": number,
    "main": string,
    "description": string,
    "icon": string,
};

export type DayType = {
    "dt_txt": string;
    "main": MainWeatherType;
    "weather": WeatherType[];
}

export type CityType = {
    "id": number;
    "name": string;
    "coord": {
        "lon": number;
        "lat": number;
    };
    "country": string;
    "timezone": number;
};

export type OpenWeatherType = {
    "city": CityType;
    "cod": string;
    "message": number;
    "cnt": number;
    "list": DayType[];
}