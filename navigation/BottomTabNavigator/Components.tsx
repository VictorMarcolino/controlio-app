import {Appbar, Button, Dialog, Portal, RadioButton} from "react-native-paper";
import * as React from "react";
import {Actuator, RootState} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {delete_actuator, generate_code, update_actuator} from "../../store/actions/actuator";
import * as Haptics from "expo-haptics";

export const HomeHeader = () => {
    const dispatch = useDispatch();
    let actuators: Actuator[] = useSelector((state: RootState) => state.actuators);
    const [visible, setVisible] = React.useState(false);
    const [kind_of_code, setChecked] = React.useState('first');
    const clearSelection = (actuator: Actuator) => {
        dispatch(update_actuator({identifier: actuator.identifier, selected: false}));
        Haptics.selectionAsync().then(r => {
        })
    }
    const selected = actuators.filter((item_actuator) => {
        return item_actuator.selected;
    });
    const Title = (selected.length != 0) ? `Selected ${selected.length}` : `Actuators`;
    const _handleDelete = () => {
        selected.forEach((item => {
            dispatch(delete_actuator({identifier: item.identifier}));
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