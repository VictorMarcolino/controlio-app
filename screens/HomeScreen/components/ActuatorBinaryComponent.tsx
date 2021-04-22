import {useDispatch} from "react-redux";
import {Button, Card, Text} from "react-native-paper";
import {toggle_switch, update_actuator} from "../../../store/actions/actuator";
import * as React from "react";
import styles from "../styles";
import * as Haptics from 'expo-haptics';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {View} from "react-native";


export default function ActuatorBinaryComponent({
                                                    identifier,
                                                    state,
                                                    is_attached,
                                                    name,
                                                    selected,
                                                    index,
                                                    editMode
                                                }: { identifier: string, state: boolean, is_attached: boolean, editMode: boolean, name: string, selected: boolean, index: number }) {
    const dispatch = useDispatch();
    const toggleSelected = () => {
        dispatch(update_actuator({identifier: identifier, selected: !selected}));
        Haptics.selectionAsync().then(r => {
        })
    }
    const changeState = () => {
        dispatch(toggle_switch({identifier: identifier, state: !state}));
    }
    const s = (selected) ? styles.selectedCard : {};
    return (
        <Card elevation={0} style={{...styles.card, ...s}} onLongPress={editMode ? () => {
        } : toggleSelected} onPress={editMode ? toggleSelected : () => {
        }}>
            <View style={{
                position: "absolute",
                top: 8,
                right: 8,
                flexDirection: "row"
            }}>
                <MaterialCommunityIcons name="power" size={24} color={state ? "green" : "red"}/>
                <MaterialCommunityIcons
                    name={is_attached ? "lan-connect" : "lan-disconnect"} size={24}
                    color={is_attached ? "green" : "red"}
                />

            </View>

            <Card.Title title={name}/>
            <Card.Content>
                <Text>{`Connection: ${is_attached ? "Online" : "Offline"}`}</Text>
                <Text>{`State: ${state ? "High" : "Low"}`}</Text>
            </Card.Content>
            <Card.Actions>
                <Button disabled={!is_attached} style={{...styles.container}}
                        mode="contained" onPress={editMode ? () => {
                } : changeState}>
                    Switch
                </Button>
            </Card.Actions>
        </Card>
    )
}


