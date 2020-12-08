import {createStackNavigator} from "@react-navigation/stack";
import {TabConfigParamList} from "../../types";
import TabConfigScreen from "../../screens/ConfigScreen";
import * as React from "react";

const Stack = createStackNavigator<TabConfigParamList>();

export default function ConfigurationTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Configuration"
                component={TabConfigScreen}
                options={{headerTitle: 'Configuration'}}
            />
        </Stack.Navigator>
    );
}

