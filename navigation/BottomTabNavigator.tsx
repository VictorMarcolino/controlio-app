import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {BottomTabParamList, TabOneParamList, TabTwoParamList} from '../types';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import colors from "../constants/Colors";

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
            initialRouteName="TabOne" barStyle={{
            backgroundColor: colors.primaryColor
        }}>
            <Tab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarLabel: '1',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="file-document" color={color} size={26}/>
                    },
                }}
            />
            <Tab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarLabel: '2',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="file-document" color={color} size={26}/>
                    },
                }}
            />
            <Tab.Screen
                name="TabThree"
                component={TabTwoNavigator}
                options={{
                    tabBarLabel: '3',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="file-document" color={color} size={26}/>
                    },
                }}
            />
        </Tab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{headerTitle: 'Tab One Title'}}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{headerTitle: 'Tab Two Title'}}
            />
        </TabTwoStack.Navigator>
    );
}
