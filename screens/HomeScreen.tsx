import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {Button, Card} from "react-native-paper";
import Colors from "../constants/Colors";
import {connect, useDispatch, useSelector} from "react-redux";
import {RootState} from "../types";
import {fetch_devices, toggle_switch} from "../store/actions/devices";

export default function HomeScreen(props: any) {
    let devices = useSelector((state: RootState) => state.devices);
    const config = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch_devices());
    }, [dispatch, config.host.url])
    console.log(devices.length)
    return (
        <View style={{marginHorizontal: 16, backgroundColor: '#f0f0f0'}}>
            <FlatList data={devices} keyExtractor={item => item.identifier}
                      style={{backgroundColor: '#f0f0f0'}}
                      initialNumToRender={7}
                      renderItem={
                          ({index, item, separators}) => {
                              return <DeviceSwitchComponent style={{backgroundColor: "#f0f0f0"}} {...item}/>
                          }
                      }>
            </FlatList>
        </View>
    );
}


function DeviceSwitchComponent({identifier, is_on}: { identifier: string, is_on: boolean }) {
    const dispatch = useDispatch();
    return <View style={{backgroundColor: "#f0f0f0"}}>
        <Card elevation={0} style={{marginBottom: 150, backgroundColor: Colors.primaryColor}}>
            <Card.Title title={identifier} subtitle={`Ligado: ${is_on}`}/>
            <Card.Actions style={styles.container}>
                <Button onPress={() => {
                    dispatch(toggle_switch({identifier: identifier, is_on: !is_on}));
                }}>Switch</Button>
            </Card.Actions>
        </Card>
    </View>
}

const mapStateToProps = function (state: any) {
    return {
        profile: state.user.profile,
        loggedIn: state.auth.loggedIn
    }
}

connect(mapStateToProps)(DeviceSwitchComponent);
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
