import {useDispatch} from "react-redux";
import {Button, Card, Text} from "react-native-paper";
import {toggle_switch, update_device} from "../../../store/actions/devices";
import * as React from "react";
import styles from "../styles";
import * as Haptics from 'expo-haptics';


export default function DeviceSwitchComponent({
                                                  identifier,
                                                  is_on,
                                                  name,
                                                  selected,
                                                  index,
                                                  editMode
                                              }: { identifier: string, is_on: boolean, editMode: boolean, name: string, selected: boolean, index: number }) {
    const dispatch = useDispatch();
    const toggleSelected = () => {
        dispatch(update_device({identifier: identifier, selected: !selected}));
        Haptics.selectionAsync().then(r => {
        })
    }
    const changeState = () => {
        dispatch(toggle_switch({identifier: identifier, is_on: !is_on}));
    }
    const s = (selected) ? styles.selectedCard : {};
    return (
        <Card elevation={0} style={{...styles.card, ...s}} onLongPress={editMode ? () => {
        } : toggleSelected} onPress={editMode ? toggleSelected : () => {
        }}>
            <Card.Title title={name}

            />
            <Card.Content>
                <Text>{`Connection: ${is_on ? "Online" : "Offline"}`}</Text>
                <Text>{`State: ${is_on ? "High" : "Low"}`}</Text>
            </Card.Content>
            <Card.Actions>
                <Button disabled={false} style={{...styles.container}}
                        mode="contained" onPress={editMode ? () => {
                } : changeState}
                >
                    Switch
                </Button>
            </Card.Actions>
        </Card>
    )
}


