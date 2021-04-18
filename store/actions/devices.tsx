import {store} from "../index";
import {CREATE_DEVICE, DELETE_DEVICE, FETCH_DEVICE, FETCH_DEVICES, TOGGLE_DEVICE, UPDATE_DEVICE_STATE} from "./index";
import {ToastAndroid} from "react-native";
import {Device} from "../../types";
import * as Haptics from 'expo-haptics';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as Sharing from 'expo-sharing';


export const fetch_device = (identifier: string) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        dispatch({type: FETCH_DEVICE, identifier: identifier})
    }
};
export const fetch_devices = () => {
    const host = store.getState().config.host.url
    console.log(host)
    return async (dispatch: any) => {
        await fetch(
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

        });
        return Promise.resolve();

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


export const delete_device = (device: any) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        const url = `${host}/api/device_switch/${device.identifier}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(device)
        })
            .then(
                res => {
                    res.json().then(
                        (response) => {
                            dispatch({type: DELETE_DEVICE, device: {...device}})
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

export const generate_code = ({selected, kind_of_code}: { selected: Device[], kind_of_code: any }) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        const url = `${host}/api/device_switch/code-generate?download=false`


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                kind_of_code: kind_of_code,
                host,
                devices_uuids: selected.map((item) => {
                    return item.identifier
                })
            })
        }).then(
            res => {
                res.json().then(
                    (response) => {
                        console.log(response)
                        const saveFile = async (something: string, fileName: string) => {
                            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                            if (status === "granted") {
                                let fileUri = FileSystem.documentDirectory + `${fileName}.txt`;
                                await FileSystem.writeAsStringAsync(fileUri, something, {encoding: FileSystem.EncodingType.UTF8});
                                await Sharing.shareAsync(fileUri);
                                const asset = await MediaLibrary.createAssetAsync(fileUri)
                                await MediaLibrary.createAlbumAsync("Download", asset, false)
                            }
                        }
                        saveFile(response.code, response.kind_of_code);
                        dispatch({type: "NONEdfg"})
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).then(r => {
                        })

                    }, error => {
                        console.log(error)
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).then(r => {
                        })
                    }
                )

            },
            error => {
                console.log(error)
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).then(r => {
                })
            });
    }
}