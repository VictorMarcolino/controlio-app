import {Appbar} from "react-native-paper";
import * as React from "react";
import {Device, RootState} from "../../types";
import {useSelector} from "react-redux";

export const HomeHeader = () => {
    let devices: Device[] = useSelector((state: RootState) => state.devices);
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const _handleDelete = () => console.log('Delete more');
    let selected = devices.filter((d) => {
        return d.selected;
    });
    const Title = (selected.length != 0) ? `Selected ${selected.length}` : `Devices`;

    return (
        <Appbar.Header>
            <Appbar.Content title={Title}/>
            {/*{selected.length==0 && <Appbar.Action icon="magnify" onPress={_handleSearch}/>}*/}
            {selected.length != 0 && <Appbar.Action icon="dots-vertical" onPress={_handleMore}/>}
            {selected.length != 0 && <Appbar.Action icon="delete" onPress={_handleDelete}/>}
        </Appbar.Header>
    )

};