import {createStackNavigator} from "@react-navigation/stack";
import {TabHomeParamList} from "../../types";
import TabHomeScreen from "../../screens/HomeScreen";
import * as React from "react";
import {HomeHeader} from "./Components";

const HomeStack = createStackNavigator<TabHomeParamList>();

export default function DevicesHomeTab() {
    return (
        <HomeStack.Navigator screenOptions={
            {header: HomeHeader}
        }>
            <HomeStack.Screen
                name="Home"
                component={TabHomeScreen}
                options={{headerTitle: 'Home'}}
            />
        </HomeStack.Navigator>
    );
}
