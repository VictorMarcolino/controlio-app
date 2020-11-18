import {FETCH_DEVICE, FETCH_DEVICES, TOGGLE_DEVICE} from "../actions";

const initialState: { identifier: string, is_on: boolean }[] = [];

function devicesReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_DEVICE:
            console.log(FETCH_DEVICE)
            return {...state};
        case FETCH_DEVICES:
            return [...action.devices];
        case TOGGLE_DEVICE:
            const i= state.findIndex((item, index, arr) => {
                return item.identifier === action.device.identifier
            })
            state[i] = action.device
            return [...state];
        default:
            break;
    }
    return state;
}

export default devicesReducer;