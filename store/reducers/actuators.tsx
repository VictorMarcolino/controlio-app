import {
    CREATE_ACTUATOR,
    DELETE_ACTUATOR,
    FETCH_ACTUATOR,
    FETCH_actuators,
    TOGGLE_ACTUATOR,
    UPDATE_ACTUATOR_STATE
} from "../actions";
import {Actuator} from "../../types";

const initialState: Actuator[] = [];

function actuatorsReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_ACTUATOR:

            return state;
        case CREATE_ACTUATOR:
            return state;
        case FETCH_actuators:
            return [...action.actuators];
        case TOGGLE_ACTUATOR:
            const i = state.findIndex((item, index, arr) => {
                return item.identifier === action.actuator.identifier
            })
            state[i] = action.actuator
            return [...state];
        case UPDATE_ACTUATOR_STATE:
            const ii = state.findIndex((item, index, arr) => {
                return item.identifier === action.actuator.identifier
            })
            state[ii].selected = action.actuator.selected
            return [...state];
        case DELETE_ACTUATOR:
            const temp_state_for_delete = [...state];
            const index_for_delete = temp_state_for_delete.findIndex((item, index, arr) => {
                return item.identifier === action.actuator.identifier
            });
            temp_state_for_delete.splice(index_for_delete, 1);
            return temp_state_for_delete
        default:
            break;
    }
    return state;
}

export default actuatorsReducer;