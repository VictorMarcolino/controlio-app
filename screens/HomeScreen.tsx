import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {Button, Card, Text} from "react-native-paper";
import Colors from "../constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../types";
import {fetch_devices, toggle_switch} from "../store/actions/devices";


export default function HomeScreen() {
    const devices = useSelector((state: RootState) => state.devices);
    const config = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch_devices());
    }, [dispatch, config.host.url])
    return (
        <View style={{marginHorizontal: 16}}>
            <FlatList data={devices} keyExtractor={item => item.identifier}
                      renderItem={
                          ({index, item, separators}) => {
                              return (
                                  <Card onPress={() => {
                                      console.log('pressed');
                                  }} elevation={0} style={{marginBottom: 10, backgroundColor: Colors.primaryColor}}>
                                      <Card.Title title={item.identifier} subtitle={`Ligado: ${item.is_on}`}/>
                                      <Card.Content>
                                          <Text>Device {index}</Text>
                                      </Card.Content>
                                      <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
                                      <Card.Actions style={styles.container}>
                                          <Button onPress={() => {
                                              dispatch(toggle_switch({...item, is_on: !item.is_on}));
                                          }}>Switch</Button>
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
