import {createStackNavigator} from "@react-navigation/stack";
import {TabAddactuatorsParamList} from "../../types";
import AddActuatorScreen from "../../screens/AddActuatorScreen";
import * as React from "react";
import {Appbar} from "react-native-paper";

const Stack = createStackNavigator<TabAddactuatorsParamList>();

export default function actuatorsAddTab() {
    return (
        <Stack.Navigator screenOptions={
            {
                header: () => {
                    return (
                        <Appbar.Header>
                            <Appbar.Content title="Add actuators"/>
                        </Appbar.Header>
                    )
                }
            }
        }>
            <Stack.Screen
                name="AddActuator"
                component={AddActuatorScreen}
                options={{headerTitle: 'Add Actuator'}}
            />
        </Stack.Navigator>
    );
}