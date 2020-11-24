import {DefaultTheme} from "react-native-paper";

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
export const colors = {
    primary: '#457b9d',
    accent: '#2a9d8f',
    surface: '#08122a',
    selectedSurface: '#2052b8',
    background: '#f1faee',
    text: '#f1faee',
}
export default {
    primaryColor: "#2268d4",
    light: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
    },
};
export const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
        ...DefaultTheme.colors,
        ...colors
    },

};