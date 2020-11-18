import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {Button, Card, Text} from "react-native-paper";
import Colors from "../constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../types";
import {fetch_devices, toggle_switch} from "../store/actions/devices";

export default function HomeScreen(props: any) {
    const devices = useSelector((state: RootState) => state.devices);
    const config = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch_devices());
    }, [dispatch, config.host.url])
    console.log(props)
    return (
        <View style={{marginHorizontal: 16, backgroundColor: Colors.dark.text}}>
            <FlatList data={devices} keyExtractor={item => item.identifier}
                      style={{backgroundColor: Colors.dark.text}}
                      renderItem={
                          ({index, item, separators}) => {
                              return <View style={{backgroundColor: "#f0f0f0"}}>
                                  <Card onPress={() => {
                                      console.log('pressed');
                                  }} elevation={0} style={{marginBottom: 16, backgroundColor: Colors.primaryColor}}>
                                      <Card.Title title={item.identifier} subtitle={`Ligado: ${item.is_on}`}/>
                                      <Card.Content>
                                          <Text>Device {index}</Text>
                                      </Card.Content>
                                      {/*<Card.Cover source={{uri: 'https://picsum.photos/700'}}/>*/}
                                      <Card.Actions style={styles.container}>
                                          <Button onPress={() => {
                                              dispatch(toggle_switch({...item, is_on: !item.is_on}));
                                          }}>Switch</Button>
                                      </Card.Actions>
                                  </Card>
                              </View>

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
