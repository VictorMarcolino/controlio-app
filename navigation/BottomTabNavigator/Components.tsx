import {Appbar} from "react-native-paper";
import * as React from "react";
import {Device, RootState} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {delete_device, update_device} from "../../store/actions/devices";
import * as Haptics from "expo-haptics";

export const HomeHeader = () => {
    const dispatch = useDispatch();
    let devices: Device[] = useSelector((state: RootState) => state.devices);
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const clearSelection = (device: Device) => {
        dispatch(update_device({identifier: device.identifier, selected: false}));
        Haptics.selectionAsync().then(r => {
        })
    }
    const selected = devices.filter((item_device) => {
        console.log(item_device);
        return item_device.selected;
    });
    const Title = (selected.length != 0) ? `Selected ${selected.length}` : `Devices`;
    const _handleDelete = () => {

        selected.forEach((item => {
            // clearSelection(item);
            dispatch(delete_device({identifier: item.identifier}));
        }));
        console.log('Delete more')
    };
    return (
        <Appbar.Header>
            <Appbar.Content title={Title}/>
            {/*{selected.length==0 && <Appbar.Action icon="magnify" onPress={_handleSearch}/>}*/}
            {selected.length == 1 && <Appbar.Action icon="pencil" onPress={_handleMore}/>}
            {selected.length != 0 && <Appbar.Action icon="delete" onPress={_handleDelete}/>}
        </Appbar.Header>
    )

};