import React, { useEffect, useState } from "react";
import { ListCity, ListProvince } from "../types";
import { cityService, costService, provinceService } from "../services";
import DataBarang from "../data/data.json";
import Button from "../components/Button/Button";
import { convertRupiahs } from "../components/ConvertRupiah/indexConverRupiah";

type ListBarang = {
  nama_barang: string;
  harga: number;
};

const Order: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listProvince, setListProvince] = useState<Array<ListProvince>>([]);
  const [listCity, setListCity] = useState<Array<ListCity>>([]);
  const [selectedProvince, setSelectedProvince] =
    useState<string>("Pilih Provinsi");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [listBarang] = useState<Array<ListBarang>>(DataBarang);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedItem, setSelectedItem] = useState<ListBarang>();
  const [ongkirPrice, setOngkirPrice] = useState<number>(0);

  const getListProvince = async () => {
    try {
      const response = await provinceService.getProvince();
      // console.log(response.data);
      setListProvince(response.data.rajaongkir.results);
      // console.log(response.data.username)
      // console.log("responpetugas",(petugas))
    } catch (error) {
      console.log("error", error);
    }
  };

  const getListCity = async (provinceId: string) => {
    try {
      const response = await cityService.getCity(provinceId);
      setListCity(response.data.rajaongkir.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCity = async (id: string) => {
    try {
      const response = await cityService.getDetailCity(id);
      // console.log(response.data.rajaongkir.results);
      setSelectedCity(response.data.rajaongkir.results.city_name);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getItem = async (nama_barang: string, harga: number) => {
    try {
      console.log({ nama_barang, harga });
      const data = {
        nama_barang: nama_barang,
        harga: harga,
      };
      setSelectedItem(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getPriceOngkir = async (city_id: string) => {
    try {
      const data = {
        origin: "409",
        destination: city_id,
        weight: "10000",
        courier: "pos",
      };
      const response = await costService.getCost(data);
      // console.log(response.data);
      setOngkirPrice(
        response.data.rajaongkir.results[0].costs[0].cost[0].value
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getListProvince();
    // getListCity();
  }),
    [selectedProvince];
  return (
    <div className="container">
      <div className="row">
        <div className="card-content">
          {listBarang.map((barang: any, index: any) => {
            return (
              <div className="card" key={index}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  width="100%"
                />
                <div className="card-body">
                  <h4>
                    <b>{barang.nama_barang}</b>
                  </h4>
                  <p>{barang.harga}</p>
                  <p>Sidoarjo</p>

                  <Button
                    label="Masukkan Keranjang"
                    color="green"
                    onClick={() => getItem(barang.nama_barang, barang.harga)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="result">
          <h1>Keranjang</h1>
          <h4>Silahkan isi alamat anda</h4>
          <div className="destination">
            <div className="select-province">
              <label htmlFor="">Provinsi</label>
              <select
                name=""
                id=""
                value={selectedProvince}
                onChange={(e) => {
                  getListCity(e.target.value),
                    setSelectedProvince(e.target.value);
                }}
                className="input-select"
              >
                <option value="Pilih Provinsi">Pilih Provinsi</option>
                {listProvince.map((province: any, index: any) => {
                  return (
                    <option value={province.province_id} key={index}>
                      {province.province}
                    </option>
                  );
                })}
                {/* <option value="">2</option> */}
              </select>
            </div>
            <div className="select-city">
              <label htmlFor="">Kabupaten / Kota</label>
              <select
                name=""
                id=""
                // value={selectedCity}
                disabled={selectedProvince !== "Pilih Provinsi" ? false : true}
                className="input-select"
                onChange={(e) => {
                  // setSelectedCity(e.target.value);
                  getCity(e.target.value);
                  getPriceOngkir(e.target.value);
                }}
              >
                <option value="Pilih Kabupaten/Kota">
                  Pilih Kabupaten/Kota
                </option>

                {listCity.map((city: any, index: any) => {
                  return (
                    <option value={city.city_id} key={index}>
                      {city.city_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <h4>Prakiraan Total Barang & Harga Ongkir</h4>
          {selectedItem ? (
            <div className="list-item">
              <h4>1. Nama Item : {selectedItem?.nama_barang}</h4>
              <h4> {convertRupiahs.format(selectedItem?.harga)}</h4>
            </div>
          ) : (
            <div className="list-item">
              <h4>1. Nama Item :</h4>
              <h4> {convertRupiahs.format(0)}</h4>
            </div>
          )}
          <div className="list-item">
            <h4>2. Total Ongkir : Sidoarjo - {selectedCity}</h4>
            <h4> {convertRupiahs.format(ongkirPrice)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
