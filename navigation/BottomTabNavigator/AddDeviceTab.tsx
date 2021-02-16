import {createStackNavigator} from "@react-navigation/stack";
import {TabAddDevicesParamList} from "../../types";
import AddDeviceScreen from "../../screens/AddDeviceScreen";
import * as React from "react";
import {Appbar} from "react-native-paper";

const Stack = createStackNavigator<TabAddDevicesParamList>();

export default function DevicesAddTab() {
    return (
        <Stack.Navigator screenOptions={
            {
                header: () => {
                    return (
                        <Appbar.Header>
                            <Appbar.Content title="Add Devices"/>
                        </Appbar.Header>
                    )
                }
            }
        }>
            <Stack.Screen
                name="AddDevice"
                component={AddDeviceScreen}
                options={{headerTitle: 'Add Device'}}
            />
        </Stack.Navigator>
    );
}