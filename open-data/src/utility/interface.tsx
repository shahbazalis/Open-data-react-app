export interface LooseObject {
  [key: string]: any;
}

export interface StateInterface {
  isSignout: boolean;
  accessToken: string;
}

export interface SensorDataInterface {
  date: string;
  sensor1: null;
  sensor2: number;
  sensor3: number;
  sensor4: number;
}

export interface UserInfo {
  email: string;
  password: string;
}

export interface LineChartInterface {
  date: [];
  sensor1: [];
  sensor2: [];
  sensor3: [];
  sensor4: [];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: string[];
    backgroundColor: string[];
  };
}

