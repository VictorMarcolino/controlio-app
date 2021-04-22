import {combineReducers} from "redux";
import actuatorsReducer from "./actuators";
import configReducer from "./config";
import serverReducer from "./server";

export const rootReducer = combineReducers(
    {
        actuators: actuatorsReducer,
        config: configReducer,
        server: serverReducer,
    });