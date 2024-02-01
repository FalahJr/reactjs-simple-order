export interface RootProvince {
  rajaongkir: GetProvince;
}

export interface GetProvince {
  query: any[];
  status: StatusProvince;
  results: ListProvince[];
}

export interface StatusProvince {
  code: number;
  description: string;
}

export interface ListProvince {
  province_id: string;
  province: string;
}
