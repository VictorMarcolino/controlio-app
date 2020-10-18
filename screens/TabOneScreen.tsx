import * as React from 'react';
import {StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {TextInput} from "react-native-paper";
import Colors from "../constants/Colors";

export default function TabOneScreen() {
  const [text, setText] = React.useState('');
  return (
    <View>
      <TextInput
          // style={{backgroundColor: Colors.primaryColor}}
          label="Address"
          value={text}
          mode="outlined"
          underlineColor={Colors.primaryColor}
          selectionColor={Colors.primaryColor}
          onChangeText={text => setText(text)}
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
