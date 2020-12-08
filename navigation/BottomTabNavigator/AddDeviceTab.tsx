import {createStackNavigator} from "@react-navigation/stack";
import {TabAddDevicesParamList} from "../../types";
import AddDeviceScreen from "../../screens/AddDeviceScreen";
import * as React from "react";

const Stack = createStackNavigator<TabAddDevicesParamList>();

export default function DevicesAddTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AddDevice"
                component={AddDeviceScreen}
                options={{headerTitle: 'Add Device'}}
            />
        </Stack.Navigator>
    );
}