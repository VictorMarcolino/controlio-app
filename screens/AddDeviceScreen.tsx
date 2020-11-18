import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {Button, TextInput} from "react-native-paper";
import Colors from "../constants/Colors";

export default function AddDeviceScreen() {
    const [object, setObj] = React.useState(
        {
            address: '',
            type: '',
            name: ''
        });
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
            <Button icon="content-save-move" mode="contained" onPress={() => console.log('Pressed')}>
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
