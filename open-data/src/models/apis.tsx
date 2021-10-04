import axios from "../utility/AxiosIstance";
import { setStorageData } from "../utility/StorageSession";
import { UserInfo,SensorDataInterface } from "../utility/interface";

export const signup = async (userInfo: UserInfo) => {
  try {
    const url = "/signup";
    const signupResult = await axios.post(url, userInfo);
    return signupResult;
  } catch (err) {
    console.log("Sign up error:", err);
    throw err;
  }
};

export const login = async (userInfo: UserInfo) => {
  try {
    const url = "/login";
    const loginResult = await axios.post(url, userInfo);
    setStorageData("accessToken", loginResult.data.accessToken);
    return loginResult;
  } catch (err) {
    console.log("Login error:", err);
    throw err;
  }
};

export const getSensorData = async () => {
  try {
    const url = "/events";
    const sensorData = await axios.get(url);
    return sensorData.data;
  } catch (err) {
    console.log("Get Sensor Data error:", err);
    throw err;
  }
};

export const addDataToDb = async (sensorData: SensorDataInterface) => {
  try {
    const url = "https://open-data-react-app.herokuapp.com/SensorsData/";
    const sensorDataAdded = await axios.post(url, sensorData);
    return sensorDataAdded;
  } catch (err) {
    console.log("Add Data error:", err);
    throw err;
  }
};

export const getDataHistory = async () => {
  try {
    const url = "https://open-data-react-app.herokuapp.com/SensorsData/";
    const sensorData = await axios.get(url);
    return sensorData.data;
  } catch (err) {
    console.log("Get Sensor Data error:", err);
    throw err;
  }
};
