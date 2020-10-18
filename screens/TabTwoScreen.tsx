import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View} from '../components/Themed';
import {Avatar, Button, Card, Paragraph, Text, Title} from "react-native-paper";
import Colors from "../constants/Colors";
// @ts-ignore
const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>

const dario = [
    {identifier: '1', data: 1},
    {identifier: '2', data: 1},
    {identifier: '3', data: 1},
    {identifier: '4', data: 1},
    {identifier: '5', data: 1},
    {identifier: '6', data: 1},
    {identifier: '7', data: 1},
]
export default function TabTwoScreen() {
    return (
        <View style={{marginHorizontal: 16}}>
            <FlatList data={dario} keyExtractor={item => item.identifier}
                      renderItem={
                          ({index,item,separators}) => {
                              return (
                                  <Card elevation={0} style={{marginBottom: 10, backgroundColor: Colors.primaryColor}}>
                                      <Card.Title title="Card Title" subtitle="Card Subtitle" />
                                      <Card.Content>
                                          <Text>Device {index}</Text>
                                      </Card.Content>
                                      <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
                                      <Card.Actions>
                                          <Button>Cancel</Button>
                                          <Button>Ok</Button>
                                      </Card.Actions>
                                  </Card>)
                          }
                      }>
            </FlatList>
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
