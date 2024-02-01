import { AxiosResponse } from "axios";
import api from "./api.service";
import { RootCity, RootListCity } from "../types";

export const getCity = async (
  province?: string
): Promise<AxiosResponse<RootListCity>> => {
  return await api.get("city?province=" + province);
};

export const getDetailCity = async (
  id?: string
): Promise<AxiosResponse<RootCity>> => {
  return await api.get("city?id=" + id);
};
