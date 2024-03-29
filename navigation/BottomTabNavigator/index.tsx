import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as React from 'react';

// import colors from '../../constants/Colors';
// import useColorScheme from '../../hooks/useColorScheme';
import {BottomTabParamList} from '../../types';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {withTheme} from "react-native-paper";
import ConfigurationTab from "./ConfigurationTab";
import actuatorsHomeTab from "./HomeTab";
import actuatorsAddTab from "./AddActuatorTab";

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator(props: any) {
    return (
        <Tab.Navigator
            initialRouteName="TabOne">
            <Tab.Screen
                name="TabOne"
                component={ConfigurationTab}
                options={{
                    tabBarLabel: 'Server',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="wrench" color={color} size={26}/>
                    },
                }}
            />
            <Tab.Screen
                name="TabTwo"
                component={actuatorsHomeTab}
                options={{
                    tabBarLabel: 'actuators',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="chip" color={color} size={26}/>
                    },
                }}
            />
            <Tab.Screen
                name="TabThree"
                component={actuatorsAddTab}
                options={{
                    tabBarLabel: 'Add actuators',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="layers-plus" color={color} size={26}/>
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default withTheme(BottomTabNavigator);




