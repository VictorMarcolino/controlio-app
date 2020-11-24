import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, Platform, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {Device, RootState} from "../../types";
import {fetch_devices} from "../../store/actions/devices";
import DeviceSwitchComponent from "./components/DeviceSwitchComponent";
import styles from "./styles";
import {Appbar} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
export default function HomeScreen(props: any) {
    let devices: Device[] = useSelector((state: RootState) => state.devices);
    const config = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch_devices());
    }, [dispatch, config.host.url])
    let selected = [];
    devices.forEach((d) => {
        if (d.selected) {
            selected.push(d)
        }
    })
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    console.log(selected.length);
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Devices"/>
                <Appbar.Action icon="magnify" onPress={_handleSearch}/>
                <Appbar.Action icon="dots-vertical" onPress={_handleMore}/>
            </Appbar.Header>
            <FlatList data={devices} keyExtractor={item => item.identifier}
                      style={styles.list_card}
                      initialNumToRender={7}
                      renderItem={
                          ({index, item, separators}) => {
                              return <DeviceSwitchComponent index={index} {...item}/>
                          }
                      }>
            </FlatList>
        </View>

    );
}



