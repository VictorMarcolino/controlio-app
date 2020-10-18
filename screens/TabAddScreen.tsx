import * as React from 'react';
import {StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {TextInput} from "react-native-paper";
import Colors from "../constants/Colors";

export default function TabAddScreen() {
    const [object, setObj] = React.useState(
        {
            address: '',
            type: '',
            name: ''
        });
    return (
        <View style={{marginHorizontal: 10}}>
            <TextInput
                label="Address"
                value={object.address}
                mode="outlined"
                underlineColor={Colors.primaryColor}
                selectionColor={Colors.primaryColor}
                onChangeText={_text => setObj({...object, address: _text})}
            />
            <TextInput
                label="Name"
                value={object.name}
                mode="outlined"
                underlineColor={Colors.primaryColor}
                selectionColor={Colors.primaryColor}
                onChangeText={_text => setObj({...object, name: _text})}
            />
            <TextInput
                label="type"
                value={object.type}
                mode="outlined"
                underlineColor={Colors.primaryColor}
                selectionColor={Colors.primaryColor}
                onChangeText={_text => setObj({...object, type: _text})}
            />
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
