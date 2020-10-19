import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {createStore, combineReducers} from "redux";

import devicesReducer from "./store/reducers/devices";
import {Provider} from "react-redux";
import configReducer from "./store/reducers/config";
import serverReducer from "./store/reducers/server";

const rootReducer = combineReducers(
    {
        devices: devicesReducer,
        config: configReducer,
        server: serverReducer,
    });
const store = createStore(rootReducer);

export default function App() {

    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme}/>
                    <StatusBar/>
                </SafeAreaProvider>
            </Provider>
        );
    }
}
