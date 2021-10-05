export interface LooseObject {
  [key: string]: any;
}

export interface StateInterface {
  isSignout: boolean;
  accessToken: string;
}

export interface SensorDataInterface {
  date: string;
  sensor1: number;
  sensor2: number;
  sensor3: number;
  sensor4: number;
}

export interface ApiResponseData{
  sdata:SensorDataInterface[]
}

export interface UserInfo {
  email: string;
  password: string;
}

export interface LineChartInterface {
  date: string[];
  sensor1: number[];
  sensor2: number[];
  sensor3: number[];
  sensor4: number[];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  };
}


 export type IntervalType = string |null;

