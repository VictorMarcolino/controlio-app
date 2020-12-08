import {store} from "../index";
import {CREATE_DEVICE, FETCH_DEVICE, FETCH_DEVICES, TOGGLE_DEVICE, UPDATE_DEVICE_STATE} from "./index";
import {ToastAndroid} from "react-native";
import {Device} from "../../types";
import * as Haptics from 'expo-haptics';


export const fetch_device = (identifier: string) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        dispatch({type: FETCH_DEVICE, identifier: identifier})
    }
};
export const fetch_devices = () => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        fetch(
            `${host}/api/device_switch/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            res.json().then((r: []) => {

                r.forEach((obj: Device) => {
                    obj.selected = false
                })
                dispatch({type: FETCH_DEVICES, devices: r})
            }, error => {
                ToastAndroid.showWithGravity(
                    'JSON ERROR',
                    ToastAndroid.LONG, //can be SHORT, LONG
                    ToastAndroid.TOP, //can be TOP, BOTTON, CENTER
                );

            })
        }, error => {
            ToastAndroid.showWithGravity(
                'CONN ERROR',
                ToastAndroid.LONG, //can be SHORT, LONG
                ToastAndroid.TOP, //can be TOP, BOTTON, CENTER
            );

        })

    }
};
export const create_device = (device: Device) => {
    const host = store.getState().config.host.url


    return (dispatch: any) => {
        fetch(`${host}/api/device_switch/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(device)
        }).then((res) => {

            res.json().then((dev: Device) => {
                dispatch({type: CREATE_DEVICE, device: dev})
                dispatch(fetch_devices())
            }, error => {

            })
        }, error => {

            ToastAndroid.showWithGravity(
                'POST ERROR',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
            );

        });

    }
};

export const update_device = (device: any) => {
    return {type: UPDATE_DEVICE_STATE, device: device}
}
export const toggle_switch = (device: any) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        const url = `${host}/api/device_switch/${device.identifier}`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(device)
        })
            .then(
                res => {
                    res.json().then(
                        (response) => {
                            dispatch({type: TOGGLE_DEVICE, device: response})
                            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).then(r => {
                            })

                        }, error => {
                            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).then(r => {
                            })
                        }
                    )

                },
                error => {
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).then(r => {
                    })
                });
    }
}