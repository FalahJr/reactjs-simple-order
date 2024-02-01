import { AxiosResponse } from "axios";
import api from "./api.service";
import { CostRequest, RootCost } from "../types";

export const getCost = async (
  data: CostRequest
): Promise<AxiosResponse<RootCost>> => {
  return await api.post("cost", data);
};
