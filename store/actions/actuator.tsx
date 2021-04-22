import {store} from "../index";
import {
    CREATE_ACTUATOR,
    DELETE_ACTUATOR,
    FETCH_ACTUATOR,
    FETCH_actuators,
    TOGGLE_ACTUATOR,
    UPDATE_ACTUATOR_STATE
} from "./index";
import {ToastAndroid} from "react-native";
import {Actuator} from "../../types";
import * as Haptics from 'expo-haptics';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as Sharing from 'expo-sharing';


export const fetch_actuator = (identifier: string) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        dispatch({type: FETCH_ACTUATOR, identifier: identifier})
    }
};
export const fetch_actuators = () => {
    const host = store.getState().config.host.url
    console.log(host)
    return async (dispatch: any) => {
        await fetch(
            `${host}/api/actuator_binary/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            res.json().then((r: []) => {

                r.forEach((obj: Actuator) => {
                    obj.selected = false
                })
                dispatch({type: FETCH_actuators, actuators: r})
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
export const create_actuator = (actuator: Actuator) => {
    const host = store.getState().config.host.url


    return (dispatch: any) => {
        fetch(`${host}/api/actuator_binary/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(actuator)
        }).then((res) => {

            res.json().then((dev: Actuator) => {
                dispatch({type: CREATE_ACTUATOR, actuator: dev})
                dispatch(fetch_actuators())
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

export const update_actuator = (actuator: any) => {
    return {type: UPDATE_ACTUATOR_STATE, actuator: actuator}
}
export const toggle_switch = (actuator: any) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        const url = `${host}/api/actuator_binary/${actuator.identifier}`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(actuator)
        })
            .then(
                res => {
                    res.json().then(
                        (response) => {
                            dispatch({type: TOGGLE_ACTUATOR, actuator: response})
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


export const delete_actuator = (actuator: any) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        const url = `${host}/api/actuator_binary/${actuator.identifier}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(actuator)
        })
            .then(
                res => {
                    res.json().then(
                        (response) => {
                            dispatch({type: DELETE_ACTUATOR, actuator: {...actuator}})
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

export const generate_code = ({selected, kind_of_code}: { selected: Actuator[], kind_of_code: any }) => {
    const host = store.getState().config.host.url
    return (dispatch: any) => {
        const url = `${host}/api/actuator_binary/code-generate?download=false`


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                kind_of_code: kind_of_code,
                host,
                //actuators_uuids
                actuator_uuids: selected.map((item) => {
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