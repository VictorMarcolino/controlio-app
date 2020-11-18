import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {View} from '../components/Themed';
import {Avatar, Button, Card, Paragraph, Text, Title} from "react-native-paper";
import Colors from "../constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import devicesReducer from "../store/reducers/devices";
import {Device, RootState} from "../types";
import {useCallback, useEffect} from "react";
import {fetch_device, fetch_devices, toggle_switch} from "../store/actions/devices";
// @ts-ignore
const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>
const HOST = 'http://192.168.1.6:5000'

async function device() {
    console.log('1')
    return await fetch(
        `${HOST}/api/device_switch/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

async function syncDevice(device: Device) {
    const url = `${HOST}/api/device_switch/${device.identifier}`
    console.log(url)
    return await fetch(
        url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(device)
        }
    )
}

export default function HomeScreen() {
    const devices = useSelector((state: RootState) => state.devices);
    const dispatch = useDispatch();
    useEffect(() => {
        device().then((res) => {
            return res.json()
        }, error => {
            console.log('error')
            console.log(error)
        }).then((r) => {
            console.log('devices:')
            console.log(r)
            dispatch(fetch_devices(r));
        })
    }, [dispatch])
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
                                              syncDevice({...item,is_on: !item.is_on}).then((res)=>{
                                                  res.json().then((r)=>{
                                                      dispatch(toggle_switch(r));
                                                  })
                                              },(error)=>{
                                                  console.log(error)
                                              })
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
