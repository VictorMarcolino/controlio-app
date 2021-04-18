import {SET_HOST} from "../actions";

const initialState = {
    host: {
        url: 'http://192.168.1.10:5000'
    }
};

function configReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_HOST:
            return {...state, host: action.data}
        default:
            return state
    }
}

export default configReducer;