import {DarkTheme, DefaultTheme} from "react-native-paper";
import {DarkTheme as ddt, DefaultTheme as dlt} from '@react-navigation/native';

export const lightTheme = {
    ...DefaultTheme,
    roundness: 15,
    colors: {
        ...dlt.colors,
        ...DefaultTheme.colors,
    },
};
export const darkTheme = {
    ...DarkTheme,
    roundness: 15,
    colors: {
        ...ddt.colors,
        ...DarkTheme.colors,
        // backdrop: "#6200ee",
        // accent: "#ffffff",
    },
};

const ref = {
    dark: false,
    fonts: {
        regular: {fontFamily: "sans-serif", fontWeight: "normal"},
        medium: {fontFamily: "sans-serif-medium", fontWeight: "normal"},
        light: {fontFamily: "sans-serif-light", fontWeight: "normal"},
        thin: {fontFamily: "sans-serif-thin", fontWeight: "normal"}
    },
    animation: {scale: 1},
    roundness: 15,
    colors: {
        card: "rgb(255, 255, 255)",
        border: "rgb(216, 216, 216)",
        primary: "#6200ee",

        accent: "#03dac4",
        background: "#f6f6f6",
        surface: "#ffffff",
        error: "#B00020",
        text: "#000000",
        onBackground: "#000000",
        onSurface: "#000000",
        disabled: "rgba(0, 0, 0, 0.26)",
        placeholder: "rgba(0, 0, 0, 0.54)",
        backdrop: "rgba(0, 0, 0, 0.5)",
        notification: "#f50057"
    }
}
const ref2 = {
    fonts: {
        regular: {fontFamily: "sans-serif", fontWeight: "normal"},
        medium: {fontFamily: "sans-serif-medium", fontWeight: "normal"},
        light: {fontFamily: "sans-serif-light", fontWeight: "normal"},
        thin: {fontFamily: "sans-serif-thin", fontWeight: "normal"}
    },
    animation: {scale: 1},
    dark: true,
    mode: "adaptive",
    roundness: 15,
    colors: {
        card: "rgb(18, 18, 18)",
        border: "rgb(39, 39, 41)",
        backdrop: "rgba(0, 0, 0, 0.5)",
        primary: "#BB86FC",
        accent: "#03dac6",
        background: "#121212",
        surface: "#121212",
        error: "#CF6679",
        onBackground: "#FFFFFF",
        onSurface: "#FFFFFF",
        text: "#ffffff",
        disabled: "rgba(255, 255, 255, 0.38)",
        placeholder: "rgba(255, 255, 255, 0.54)",
        notification: "#ff80ab"
    }
}
