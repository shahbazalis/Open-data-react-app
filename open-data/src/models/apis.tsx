import axios from "../Utility/AxiosIstance";
import { setStorageData } from "../Utility/StorageSession";

export interface UserInfo {
  email: string;
  password: string;
}

export const signup = async (userInfo: UserInfo) => {
  try {
    const url = "/signup";
    const signupResult = await axios.post(url, userInfo);
    return signupResult;
  } catch (err) {
    console.log("Sign up error:", err);
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
  }
};

export const getData = async () => {
  try {
    const url = "/events";
    const sensorData = await axios.get(
      url
    );
    return sensorData.data;
  } catch (err) {
    console.log("Get Sensor Data error:", err);
  }
};
