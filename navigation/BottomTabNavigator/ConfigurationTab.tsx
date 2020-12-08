import {createStackNavigator} from "@react-navigation/stack";
import {TabConfigParamList} from "../../types";
import TabConfigScreen from "../../screens/ConfigScreen";
import * as React from "react";

const TabOneStack = createStackNavigator<TabConfigParamList>();

export default function ConfigurationTab() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="Configuration"
                component={TabConfigScreen}
                options={{headerTitle: 'Configuration'}}
            />
        </TabOneStack.Navigator>
    );
}

