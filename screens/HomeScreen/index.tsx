import * as React from 'react';
import {FlatList, Platform} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {Actuator, RootState} from "../../types";
import {fetch_actuators} from "../../store/actions/actuator";
import ActuatorBinaryComponent from "./components/ActuatorBinaryComponent";
import styles from "./styles";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


export default function HomeScreen(props: any) {
    let actuators: Actuator[] = useSelector((state: RootState) => state.actuators);
    const config = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();
    const [refreshState, setRefreshState] = React.useState(false);
    let selected = actuators.filter((d) => {
        return d.selected;
    });


    React.useEffect(() => {
        setRefreshState(true);
        // @ts-ignore
        dispatch(fetch_actuators()).then(() => {
                setRefreshState(false)
            }
        );
    }, [dispatch, config.host.url]);


    return (
        <FlatList data={actuators} keyExtractor={item => item.identifier}
                  style={styles.list_card}
                  initialNumToRender={7}
                  renderItem={
                      ({index, item, separators}) => {
                          return <ActuatorBinaryComponent index={index} {...item} editMode={selected.length != 0}/>
                      }
                  }
                  refreshing={refreshState}
                  onRefresh={
                      () => {
                              setRefreshState(true);
                              // @ts-ignore
                          dispatch(fetch_actuators()).then(() => {
                                  setRefreshState(false)
                              }
                          );
                          }}
            >
            </FlatList>
    );
}



