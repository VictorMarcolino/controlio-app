import {useDispatch} from "react-redux";
import {Button, Card} from "react-native-paper";
import {toggle_switch, update_device} from "../../../store/actions/devices";
import * as React from "react";
import styles from "../styles";

export default function DeviceSwitchComponent({identifier, is_on, name, selected, index}: { identifier: string, is_on: boolean, name: string, selected: boolean, index: number }) {
    const dispatch = useDispatch();
    const s = (selected) ? styles.selectedCard : {}
    return (
        <Card elevation={0} style={{...styles.card, ...s}} onLongPress={() => {
            dispatch(update_device({identifier: identifier, selected: !selected}));
        }}>
            <Card.Title title={name} subtitle={`Ligado: ${is_on}`}/>
            <Card.Actions>
                <Button style={{...styles.container}} mode="contained" onPress={() => {
                    dispatch(toggle_switch({identifier: identifier, is_on: !is_on}));
                }}
                >
                    Switch
                </Button>
            </Card.Actions>
        </Card>
    )
}


