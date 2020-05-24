import actionCreatorFactory from 'typescript-fsa';
import { OpenWeatherType } from '../components/Weather/types';
import { Dispatch } from 'redux';
import { getWeatherByString, getWeatherByCoords } from '../api/getWeather';

const actionCreator = actionCreatorFactory();

export const fetchWearherByStringAction =
    actionCreator.async<{ q: string, cnt: number },
        { weather: OpenWeatherType },
        any
    >('FETCH_WEATHER_BY_STRING');


export const fetchWearherByString = (q: string, cnt: number) => {
    return function (dispatch: Dispatch) {
        const params = { q, cnt };
        dispatch(fetchWearherByStringAction.started(params));

        getWeatherByString(q, cnt).then((result: { data: OpenWeatherType }) => {
            dispatch(fetchWearherByStringAction.done({ params: params, result: { weather: result.data } }));
        }).catch(() => {
            dispatch(fetchWearherByStringAction.failed({ params: params, error: {} }));
        })

    };
}

export const fetchWearherByCoordsAction =
    actionCreator.async<{ lon: number, lat: number, cnt: number },
        { weather: OpenWeatherType },
        any
    >('FETCH_WEATHER_BY_COORDS');


export const fetchWearherByCoords = (lon: number, lat: number, cnt: number) => {
    return function (dispatch: Dispatch) {
        const params = { lon, lat, cnt };
        dispatch(fetchWearherByCoordsAction.started(params));

        getWeatherByCoords(lat, lon, cnt).then((result: { data: OpenWeatherType }) => {
            dispatch(fetchWearherByCoordsAction.done({ params: params, result: { weather: result.data } }));
        }).catch(() => {
            dispatch(fetchWearherByCoordsAction.failed({ params: params, error: {} }));
        })

    };
}

export const setFilterAction = actionCreator<{ q: string }>('SET_FILTER');
export const setCoordsAction = actionCreator<{ lon: number, lat: number }>('SET_COORDS');
export const setDaysAction = actionCreator<number>('SET_DAYS');


