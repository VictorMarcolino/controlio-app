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

export type TabAddactuatorsParamList = {
    AddActuator: undefined;
};


export interface Actuator {
    identifier: string;
    pin: string;
    name: string;
    state: boolean;
    is_attached: boolean;
    selected: boolean;
}

export interface ActuatorBinary extends Actuator {
}

export interface ActuatorRange extends Actuator {
    currentValue: number;
    maxValue: number;
    minValue: number;
}

export interface RootState {
  config: any;
    actuators: any
}