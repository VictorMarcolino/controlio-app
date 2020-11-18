import {FETCH_DEVICE, FETCH_DEVICES, TOGGLE_DEVICE} from "../actions/devices";

const initialState = [{identifier: '1', data: 1},
    {identifier: '2', data: 1},
    {identifier: '3', data: 1},
    {identifier: '4', data: 1},
    {identifier: '5', data: 1},
    {identifier: '6', data: 1},
    {identifier: '7', data: 1}];

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