import axios from "axios";
import { getStorageData } from "./StorageSession";
const instance = axios.create({
  baseURL: "https://opendata.hopefully.works/api",
});

instance.interceptors.request.use(async (request) => {
  const accessToken = await getStorageData("accessToken");
  request.headers.Authorization = `Bearer ${accessToken}`;
  return request;
});

export default instance;
