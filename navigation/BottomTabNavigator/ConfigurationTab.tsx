import {createStackNavigator} from "@react-navigation/stack";
import {TabConfigParamList} from "../../types";
import TabConfigScreen from "../../screens/ConfigScreen";
import * as React from "react";
import {Appbar} from "react-native-paper";

const Stack = createStackNavigator<TabConfigParamList>();

export default function ConfigurationTab() {
    return (
        <Stack.Navigator screenOptions={
            {
                header: () => {
                    return (
                        <Appbar.Header>
                            <Appbar.Content title="Serve Config"/>
                        </Appbar.Header>
                    )
                }
            }
        }>
            <Stack.Screen
                name="Configuration"
                component={TabConfigScreen}
                options={{headerTitle: 'Configuration'}}
            />
        </Stack.Navigator>
    );
}

