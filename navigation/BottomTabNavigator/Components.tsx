import {Appbar} from "react-native-paper";
import * as React from "react";
import {Device, RootState} from "../../types";
import {useSelector} from "react-redux";

export const HomeHeader = () => {
    let devices: Device[] = useSelector((state: RootState) => state.devices);
    const Title = (devices.length == 0) ? `Devices` : `Devices ${devices.length}`
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        <Appbar.Header>
            <Appbar.Content title={Title}/>
            <Appbar.Action icon="magnify" onPress={_handleSearch}/>
            <Appbar.Action icon="dots-vertical" onPress={_handleMore}/>
        </Appbar.Header>
    )

};