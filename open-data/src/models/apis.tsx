import axios from "axios";
import { setStorageData } from "../utility/StorageSession";
import { getStorageData } from "../utility/StorageSession";

export interface UserInfo {
  email: string;
  password: string;
}

export const login = async (userInfo: UserInfo) => {
  try {
    const url = "https://opendata.hopefully.works/api/login";
    const loginResult = await axios.post(url, userInfo);
    setStorageData("accessToken", loginResult.data.accessToken);
    return loginResult;
  } catch (err) {
    console.log("Add todo Item error:", err);
  }
};

export const getData = async () => {
  try {
    const accessToken = await getStorageData("accessToken");
    const url = "https://opendata.hopefully.works/api/events";
    let headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    const sensorData = await axios.get(url, {
      method: "GET",
      headers: headers,
    });
    return sensorData;
  } catch (err) {
    console.log("Get Sensor Data error:", err);
  }
};
