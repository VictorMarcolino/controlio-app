import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Provider} from "react-redux";
import {store} from "./store";
import {Provider as PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from "./constants/Themes";


export default function App() {

    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <PaperProvider theme={(colorScheme === 'dark') ? darkTheme : lightTheme}>
                    <SafeAreaProvider>
                        <Navigation colorScheme={colorScheme}/>
                        <StatusBar/>
                    </SafeAreaProvider>
                </PaperProvider>
            </Provider>
        );
    }
}
