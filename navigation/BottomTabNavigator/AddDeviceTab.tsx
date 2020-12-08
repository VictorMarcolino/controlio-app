import {createStackNavigator} from "@react-navigation/stack";
import {TabAddDevicesParamList} from "../../types";
import AddDeviceScreen from "../../screens/AddDeviceScreen";
import * as React from "react";

const TabDevicesAddStack = createStackNavigator<TabAddDevicesParamList>();

export default function DevicesAddTab() {
    return (
        <TabDevicesAddStack.Navigator>
            <TabDevicesAddStack.Screen
                name="AddDevice"
                component={AddDeviceScreen}
                options={{headerTitle: 'Add Device'}}
            />
        </TabDevicesAddStack.Navigator>
    );
}