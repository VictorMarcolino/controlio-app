import {createStackNavigator} from "@react-navigation/stack";
import {Device, RootState, TabHomeParamList} from "../../types";
import TabHomeScreen from "../../screens/HomeScreen";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {delete_device, generate_code, update_device} from "../../store/actions/devices";
import * as Haptics from "expo-haptics";
import {Appbar} from "react-native-paper";

const Stack = createStackNavigator<TabHomeParamList>();

export default function DevicesHomeTab() {
    return (
        <Stack.Navigator screenOptions={
            {
                header: () => {
                    const dispatch = useDispatch();
                    let devices: Device[] = useSelector((state: RootState) => state.devices);
                    const _goBack = () => console.log('Went back');


                    const _handleMore = () => console.log('Shown more');
                    const clearSelection = (device: Device) => {
                        dispatch(update_device({identifier: device.identifier, selected: false}));
                        Haptics.selectionAsync().then(r => {
                        })
                    }
                    const selected = devices.filter((item_device) => {
                        // console.log(item_device);
                        return item_device.selected;
                    });
                    const Title = (selected.length != 0) ? `Selected ${selected.length}` : `Actuators`;
                    const _handleDelete = () => {
                        selected.forEach((item => {
                            dispatch(delete_device({identifier: item.identifier}));
                        }));
                    };
                    const _handleSearch = () => dispatch(generate_code(selected));
                    return (
                        <Appbar.Header>
                            <Appbar.Content title={Title}/>
                            {selected.length > 0 &&
                            <Appbar.Action icon="alpha-g-circle-outline" onPress={_handleSearch}/>}
                            {selected.length == 1 && <Appbar.Action icon="pencil" onPress={_handleMore}/>}
                            {selected.length != 0 && <Appbar.Action icon="delete" onPress={_handleDelete}/>}
                        </Appbar.Header>
                    )

                }
            }
        }>
            <Stack.Screen
                name="Home"
                component={TabHomeScreen}
                // options={{headerTitle: 'Home'}}
            />
        </Stack.Navigator>
    );
}
