import {
    CREATE_DEVICE,
    DELETE_DEVICE,
    FETCH_DEVICE,
    FETCH_DEVICES,
    TOGGLE_DEVICE,
    UPDATE_DEVICE_STATE
} from "../actions";
import {Device} from "../../types";

const initialState: Device[] = [];

function devicesReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_DEVICE:

            return state;
        case CREATE_DEVICE:
            return state;
        case FETCH_DEVICES:
            return [...action.devices];
        case TOGGLE_DEVICE:
            const i = state.findIndex((item, index, arr) => {
                return item.identifier === action.device.identifier
            })
            state[i] = action.device
            return [...state];
        case UPDATE_DEVICE_STATE:
            const ii = state.findIndex((item, index, arr) => {
                return item.identifier === action.device.identifier
            })
            state[ii].selected = action.device.selected
            return [...state];
        case DELETE_DEVICE:
            const temp_state_for_delete = [...state];
            const index_for_delete = temp_state_for_delete.findIndex((item, index, arr) => {
                return item.identifier === action.device.identifier
            });
            temp_state_for_delete.splice(index_for_delete, 1);
            return temp_state_for_delete
        default:
            break;
    }
    return state;
}

export default devicesReducer;