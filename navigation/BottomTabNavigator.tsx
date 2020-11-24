import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

// import colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
import TabConfigScreen from '../screens/ConfigScreen';
import TabHomeScreen from '../screens/HomeScreen';
import {BottomTabParamList, TabAddDevicesParamList, TabConfigParamList, TabHomeParamList} from '../types';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import AddDeviceScreen from "../screens/AddDeviceScreen";
import {withTheme} from "react-native-paper";

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator(props: any) {
    const {colors} = props.theme;

    return (
        <Tab.Navigator
            initialRouteName="TabOne" barStyle={{
            backgroundColor: colors.primary
        }}>
            <Tab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarLabel: 'Server',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="wrench" color={color} size={26}/>
                    },
                }}
            />
            <Tab.Screen
                name="TabTwo"
                component={DevicesHome}
                options={{
                    tabBarLabel: 'Devices',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="chip" color={color} size={26}/>
                    },
                }}
            />
            <Tab.Screen
                name="TabThree"
                component={DevicesAdd}
                options={{
                    tabBarLabel: 'Add Devices',
                    tabBarIcon: ({color}) => {
                        return <MaterialCommunityIcons name="layers-plus" color={color} size={26}/>
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default withTheme(BottomTabNavigator);
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabConfigParamList>();

function TabOneNavigator() {
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

const HomeStack = createStackNavigator<TabHomeParamList>();

function DevicesHome() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={TabHomeScreen}
                options={{headerTitle: 'Home'}}
            />
        </HomeStack.Navigator>
    );
}

const TabDevicesAddStack = createStackNavigator<TabAddDevicesParamList>();

function DevicesAdd() {
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