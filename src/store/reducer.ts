import { combineReducers } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { setCoordsAction, setFilterAction, fetchWearherByCoordsAction, fetchWearherByStringAction, setDaysAction } from "./actions";
import { OpenWeatherType } from "../components/Weather/types";

type filterReducerType = {
    type: "location" | "q";
    q: string;
    lon: number;
    lat: number;
}

const filterReducer = reducerWithInitialState<filterReducerType>({
    type: "q",
    q: "London",
    lon: 0,
    lat: 0,
})
    .case(setCoordsAction, (state, payload) => ({ ...state, type: "location", q: "", lat: payload.lat, lon: payload.lon }))
    .case(setFilterAction, (state, payload) => ({ ...state, type: "q", q: payload.q }));

const daysReducer = reducerWithInitialState<number>(16)
    .case(setDaysAction, (_, payload: number) => payload)

const isLoadingReducer = reducerWithInitialState<boolean>(false)
    .cases([fetchWearherByStringAction.started, fetchWearherByCoordsAction.started], (state) => (true))
    .cases([fetchWearherByStringAction.done, fetchWearherByCoordsAction.done], (state) => (false))
    .cases([fetchWearherByStringAction.failed, fetchWearherByCoordsAction.failed], (state) => (false));

const weatherDataReducer = reducerWithInitialState<OpenWeatherType | null | false>(null)
    .cases([fetchWearherByStringAction.done, fetchWearherByCoordsAction.done], (_, payload) => {
        if (payload && payload.result?.weather) {
            return { ...payload.result.weather };
        }

        return null;
    })
    .cases([fetchWearherByStringAction.failed, fetchWearherByCoordsAction.failed], () => (false))
    .cases([setCoordsAction, setDaysAction], () => (null));

export type StateType = {
    filters: filterReducerType;
    isLoading: boolean;
    days: number;
    weather: OpenWeatherType | null | false;
}

const weatherAppReducers = combineReducers<StateType>({
    filters: filterReducer,
    isLoading: isLoadingReducer,
    days: daysReducer,
    weather: weatherDataReducer,
})

export default weatherAppReducers;
