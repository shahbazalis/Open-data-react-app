export interface LooseObject {
  [key: string]: any;
}

export interface StateInterface {
  isSignout: boolean;
  accessToken: any;
}

export interface SensorDataInterface{
  date: string;
  sensor1: null;
  sensor2: number;
  sensor3: number;
  sensor4: number;
}
