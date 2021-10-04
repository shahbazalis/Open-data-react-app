import axios from "axios";
import { getStorageData } from "./StorageSession";
import { login,getSensorData } from "../models/apis";
import { useDispatch } from "react-redux";


const instance = axios.create({
  baseURL: "https://opendata.hopefully.works/api",
});

instance.interceptors.request.use(async (request) => {
  const accessToken = await getStorageData("accessToken");
  request.headers.Authorization = `Bearer ${accessToken}`;
  return request;
});


axios.interceptors.response.use(async (response) => {
  return response
}, 
async function  (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    const dispatch = useDispatch();

    const userInfo = JSON.parse(getStorageData("userInfo")!);
    const loginResult = await login(userInfo);
    if (loginResult) {
      const accessToken = await getStorageData("accessToken");
      dispatch({ type: "SIGN_IN", accessToken: accessToken });
      return await getSensorData();
    }
    }});
export default instance;
