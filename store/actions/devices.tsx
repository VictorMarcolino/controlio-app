import {store} from "../index";
import {FETCH_DEVICE, FETCH_DEVICES, TOGGLE_DEVICE} from "./index";
import {ToastAndroid} from "react-native";


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
            res.json().then((r) => {
                console.log('devices:')
                console.log(r)
                dispatch({type: FETCH_DEVICES, devices: r})
            }, error => {
                ToastAndroid.showWithGravity(
                    'JSON ERROR',
                    ToastAndroid.LONG, //can be SHORT, LONG
                    ToastAndroid.TOP, //can be TOP, BOTTON, CENTER
                );
                console.log(error)
            })
        }, error => {
            ToastAndroid.showWithGravity(
                'CONN ERROR',
                ToastAndroid.LONG, //can be SHORT, LONG
                ToastAndroid.TOP, //can be TOP, BOTTON, CENTER
            );
            console.log(error)
        })

    }
};
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
                            console.log(response)
                            dispatch({type: TOGGLE_DEVICE, device: response})
                        }, error => {
                            console.log(error)
                        }
                    )

                },
                error => {
                    console.log(error)
                });
    }
}