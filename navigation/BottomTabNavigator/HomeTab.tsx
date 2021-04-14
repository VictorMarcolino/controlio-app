import {createStackNavigator} from "@react-navigation/stack";
import {TabHomeParamList} from "../../types";
import TabHomeScreen from "../../screens/HomeScreen";
import * as React from "react";
import {HomeHeader} from "./Components";

const Stack = createStackNavigator<TabHomeParamList>();

export default function DevicesHomeTab() {
    return (
        <Stack.Navigator screenOptions={
            {
                header: () => {
                    return (<HomeHeader/>)
                }
            }
        }>
            <Stack.Screen
                name="Home"
                component={TabHomeScreen}
                // options={{headerTitle: 'Home'}}
            />
        </Stack.Navigator>
    );
}
