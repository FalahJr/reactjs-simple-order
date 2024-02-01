import { AxiosResponse } from "axios";
import api from "./api.service";
import { RootProvince } from "../types";

export const getProvince = async (): Promise<AxiosResponse<RootProvince>> => {
  return await api.get("province");
};
