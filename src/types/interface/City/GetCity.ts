export interface RootCity {
  rajaongkir: GetCity;
}

export interface GetCity {
  query: QueryCity;
  status: StatusCity;
  results: City;
}

export interface QueryCity {
  province: string;
}

export interface StatusCity {
  code: number;
  description: string;
}

export interface City {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}
