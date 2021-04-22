import {SET_HOST} from "./index";

export const set_host = (data: { url: string }) => {
    return {type: SET_HOST, data: data}
};

