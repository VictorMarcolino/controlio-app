import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput, useTheme} from "react-native-paper";
import {Device} from "../types";
import {create_device} from "../store/actions/devices";
import {useDispatch} from "react-redux";


export default function AddDeviceScreen() {
    const {colors} = useTheme();
    const dispatch = useDispatch();
    const [object, setObj] = React.useState({
        identifier: '',
        is_on: false,
        pin: '',
        name: ''
    } as Device);
    return (
        <View style={styles.container}>
            <TextInput
                label="Name"
                value={object.name}
                mode="outlined"
                onChangeText={_text => setObj({...object, name: _text})}
                style={styles.textInput}
            />
            <TextInput
                label="Pin"
                value={object.pin}
                mode="outlined"
                onChangeText={_text => setObj({...object, pin: _text})}
                style={styles.textInput}
            />
            <Button disabled={!object.name} icon="content-save-move" mode="contained" onPress={() => {
                if (object.name) {
                    dispatch(create_device(object))
                    setObj({
                        ...object,
                        name: '',
                        pin: '',
                    })
                }
            }}>
                Save
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 16,
    },
    textInput: {
        marginVertical: 10
    }
});
