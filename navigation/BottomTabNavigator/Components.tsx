import {Appbar, Button, Dialog, Portal, RadioButton} from "react-native-paper";
import * as React from "react";
import {Device, RootState} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {delete_device, generate_code, update_device} from "../../store/actions/devices";
import * as Haptics from "expo-haptics";

export const HomeHeader = () => {
    const dispatch = useDispatch();
    let devices: Device[] = useSelector((state: RootState) => state.devices);
    const [visible, setVisible] = React.useState(false);
    const [kind_of_code, setChecked] = React.useState('first');
    const clearSelection = (device: Device) => {
        dispatch(update_device({identifier: device.identifier, selected: false}));
        Haptics.selectionAsync().then(r => {
        })
    }
    const selected = devices.filter((item_device) => {
        return item_device.selected;
    });
    const Title = (selected.length != 0) ? `Selected ${selected.length}` : `Actuators`;
    const _handleDelete = () => {
        selected.forEach((item => {
            dispatch(delete_device({identifier: item.identifier}));
        }));
    };
    return (
        <Appbar.Header>
            <Appbar.Content title={Title}/>
            {selected.length > 0 && <Appbar.Action icon="alpha-g-circle-outline" onPress={() => setVisible(true)}/>}
            {selected.length != 0 && <Appbar.Action icon="delete" onPress={_handleDelete}/>}
            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Title>Select your platform</Dialog.Title>
                    <Dialog.Content>
                        <RadioButton.Group onValueChange={value => setChecked(value)} value={kind_of_code}>
                            <RadioButton.Item label="ESP8266" value="esp8266"/>
                            <RadioButton.Item label="ATMEGA" value="ATMEGA"/>
                        </RadioButton.Group>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => {
                            dispatch(generate_code({selected, kind_of_code}));
                            setVisible(false);
                        }}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Appbar.Header>)
};