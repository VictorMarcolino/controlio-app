export const FETCH_DEVICES = 'FETCH_DEVICES';
export const FETCH_DEVICE = 'FETCH_DEVICE';
export const TOGGLE_DEVICE = 'TOGGLE_DEVICE';

export const fetch_device = (identifier: string) => {
    return {type: FETCH_DEVICE, identifier: identifier}
};
export const fetch_devices = (devices: []) => {
    return {type: FETCH_DEVICES, devices: devices}
};
export const toggle_switch = (device: any) => {
    return {type: TOGGLE_DEVICE, device: device}
}