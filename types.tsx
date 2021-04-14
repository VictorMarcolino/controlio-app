export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

export type TabConfigParamList = {
  Configuration: undefined;
};

export type TabHomeParamList = {
  Home: undefined;
};

export type TabAddDevicesParamList = {
  AddDevice: undefined;
};


export interface Device {
  identifier: string;
  pin: string;
  name: string;
  is_on: boolean;
  selected: boolean;
}

export interface DeviceSwitch extends Device {
}

export interface DeviceRange extends Device {
  currentValue: number;
  maxValue: number;
  minValue: number;
}

export interface RootState {
  config: any;
  devices: any
}