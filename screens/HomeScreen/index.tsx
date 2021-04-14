import * as React from 'react';
import {FlatList, Platform, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {Device, RootState} from "../../types";
import {fetch_devices} from "../../store/actions/devices";
import DeviceSwitchComponent from "./components/DeviceSwitchComponent";
import styles from "./styles";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


export default function HomeScreen(props: any) {
    let devices: Device[] = useSelector((state: RootState) => state.devices);
    const config = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();
    const [refreshState, setRefreshState] = React.useState(false);
    let selected = devices.filter((d) => {
        return d.selected;
    });


    React.useEffect(() => {
        setRefreshState(true);
        // @ts-ignore
        dispatch(fetch_devices()).then(() => {
                setRefreshState(false)
            }
        );
    }, [dispatch, config.host.url]);


    return (
        <View>
            <FlatList data={devices} keyExtractor={item => item.identifier}
                      style={styles.list_card}
                      initialNumToRender={7}
                      renderItem={
                          ({index, item, separators}) => {
                              return <DeviceSwitchComponent index={index} {...item} editMode={selected.length != 0}/>
                          }
                      }
                      refreshing={refreshState}
                      onRefresh={
                          () => {
                              setRefreshState(true);
                              // @ts-ignore
                              dispatch(fetch_devices()).then(() => {
                                      setRefreshState(false)
                                  }
                              );
                          }}
            >
            </FlatList>

        </View>
    );
}



