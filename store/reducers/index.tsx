import {combineReducers} from "redux";
import devicesReducer from "./devices";
import configReducer from "./config";
import serverReducer from "./server";

export const rootReducer = combineReducers(
    {
        devices: devicesReducer,
        config: configReducer,
        server: serverReducer,
    });