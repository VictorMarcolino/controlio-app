import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {TextInput} from "react-native-paper";
import {colors} from "../constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../types";
import {set_host} from "../store/actions/config";

export default function ConfigScreen() {
    const config = useSelector((state: RootState) => state.config);
    const [text, setText] = React.useState(config.host.url);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                label="Address"
                value={text}
                mode="outlined"
                selectionColor="black"
                // underlineColor={Colors.primaryColor}
                // selectionColor={Colors.primaryColor}
                onChangeText={text => setText(text)}
                onEndEditing={text => {
                    dispatch(set_host({url: text.nativeEvent.text}))
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: colors.background
    },
    textInput: {
        marginTop: 10,
    }
});
