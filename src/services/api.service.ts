import axios, { AxiosRequestConfig } from "axios";
// import { storageService } from ".";

const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

const rajaOngkirApiUrl = "https://api.rajaongkir.com/starter/";

const main = axios.create({
  baseURL: corsAnywhereUrl + rajaOngkirApiUrl,
});

main.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    config.headers = {
      key: "9632c2237d91fe08f0b9ba86f5ebfb69",
      "Content-Type": "application/json",
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default main;
