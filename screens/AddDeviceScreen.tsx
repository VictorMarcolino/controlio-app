import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {Button, TextInput} from "react-native-paper";
import Colors from "../constants/Colors";
import {Device} from "../types";
import {create_device} from "../store/actions/devices";
import {useDispatch} from "react-redux";


export default function AddDeviceScreen() {
    const dispatch = useDispatch();
    const [object, setObj] = React.useState({
        identifier: '',
        is_on: false,
        name: ''
    } as Device);
    return (
        <View style={{marginHorizontal: 10}}>
            <TextInput
                label="Name"
                value={object.name}
                mode="outlined"
                underlineColor={Colors.primaryColor}
                selectionColor={Colors.primaryColor}
                onChangeText={_text => setObj({...object, name: _text})}
                style={{marginVertical: 16}}
            />
            <Button icon="content-save-move" mode="contained" onPress={() => {

                if (object.name) {

                    dispatch(create_device(object))
                }
            }}>
                Save
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
